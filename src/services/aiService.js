// Servicio Unificado de Inteligencia Artificial en Vivo para OVDIA 2030
// Metodología: Lic. Francisco Javier Robledo Zatarain
// Soporta OpenAI (GPT-4o-mini) y Google Gemini con detección automática y fallback local.

import { findCareerOrGenerate, CAREER_DATABASE } from '../data/ovdiaKnowledgeBase';

const STORAGE_KEY = 'ovdia_ai_api_key';
const CACHE_PREFIX = 'ovdia_ai_career_v2_';

// Obtiene la clave configurada (prioridad: localStorage > env)
export function getAiApiKey() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim()) return saved.trim();
  }
  return import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY || '';
}

// Guarda la clave en el Kiosco
export function saveAiApiKey(key) {
  if (typeof window !== 'undefined') {
    if (key && key.trim()) {
      localStorage.setItem(STORAGE_KEY, key.trim());
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

// Detecta si es OpenAI (sk-...) o Gemini (AIza...)
export function detectProvider(key) {
  const cleanKey = (key || getAiApiKey() || '').trim();
  if (cleanKey.startsWith('sk-')) return 'openai';
  if (cleanKey.startsWith('AIza')) return 'gemini';
  return cleanKey ? 'openai' : 'none'; // Por defecto OpenAI si tiene clave
}

export function isAiConfigured() {
  const key = getAiApiKey();
  return Boolean(key && key.length > 10);
}

// Para compatibilidad con imports previos
export const getGeminiApiKey = getAiApiKey;
export const saveGeminiApiKey = saveAiApiKey;
export const isGeminiConfigured = isAiConfigured;

// Prueba la conexión con el proveedor correspondiente
export async function testAiConnection(customKey) {
  const apiKey = (customKey || getAiApiKey() || '').trim();
  if (!apiKey) {
    return { success: false, message: 'No se ha proporcionado una Clave API.' };
  }

  const provider = detectProvider(apiKey);

  if (provider === 'openai') {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: 'Responde exclusivamente con la palabra: OK' }],
          max_tokens: 10
        })
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        return {
          success: false,
          provider: 'OpenAI',
          message: err.error?.message || `Error HTTP ${response.status} de OpenAI.`
        };
      }

      return {
        success: true,
        provider: 'OpenAI (GPT-4o-mini)',
        message: '¡Conexión verificada con OpenAI! GPT-4o-mini responderá en vivo.'
      };
    } catch (e) {
      return {
        success: false,
        provider: 'OpenAI',
        message: e.name === 'AbortError' ? 'Tiempo de espera agotado (Timeout 8s).' : e.message
      };
    }
  } else {
    // Gemini
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Responde estrictamente: OK' }] }]
        })
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        return {
          success: false,
          provider: 'Gemini',
          message: err.error?.message || `Error HTTP ${response.status} de Gemini.`
        };
      }

      return {
        success: true,
        provider: 'Google Gemini',
        message: '¡Conexión verificada con Google Gemini!'
      };
    } catch (e) {
      return {
        success: false,
        provider: 'Gemini',
        message: e.name === 'AbortError' ? 'Tiempo de espera agotado (Timeout 8s).' : e.message
      };
    }
  }
}

export const testGeminiConnection = testAiConnection;

// Genera un perfil vocacional profundo al horizonte 2030 siguiendo la metodología OVDIA
export async function fetchCareerWithAI(careerName) {
  if (!careerName || !careerName.trim()) {
    return findCareerOrGenerate('Orientación Vocacional');
  }

  const cleanName = careerName.trim();

  // 1. Revisar si ya existe en la base canónica
  const localMatch = CAREER_DATABASE.find(c => {
    const normName = c.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normQuery = cleanName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return normName.includes(normQuery) || (c.aliases && c.aliases.some(a => normQuery.includes(a)));
  });

  if (localMatch) {
    return { ...localMatch, fromAI: false };
  }

  // 2. Revisar si ya está en caché local de sesión para no repetir llamadas
  const cacheKey = CACHE_PREFIX + cleanName.toLowerCase();
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      return { ...parsed, fromAI: true, fromCache: true };
    }
  } catch (e) {}

  // 3. Intentar primero a través del Endpoint Serverless Seguro de Vercel (/api/generate)
  // Esto protege las claves en el servidor para que ningún bot de internet las detecte.
  try {
    const serverRes = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ careerName: cleanName })
    });

    if (serverRes.ok) {
      const serverData = await serverRes.json();
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify(serverData));
      } catch (e) {}
      return { ...serverData, fromAI: true, aiProvider: 'Servidor Seguro Vercel (IA en Vivo)' };
    }
  } catch (e) {
    // Si no está corriendo en Vercel o el endpoint falla, continuar
  }

  // 4. Si hay API key configurada localmente en el dispositivo del Kiosco (localStorage)
  const apiKey = getAiApiKey();
  if (!apiKey) {
    return { ...findCareerOrGenerate(cleanName), fromAI: false, reason: 'no_api_key' };
  }

  const provider = detectProvider(apiKey);

  const systemPrompt = `Eres el Analista Senior de Metodología OVDIA 2030 (creada por el Lic. Francisco Javier Robledo Zatarain).
Tu misión es deconstruir la carrera de: "${cleanName}" al horizonte 2030 en un entorno BANI (Quebradizo, Ansioso, No lineal e Incomprensible).

Debes entregar estrictamente un objeto JSON válido con esta estructura exacta:
{
  "id": "ia_${cleanName.toLowerCase().replace(/\\s+/g, '_')}",
  "name": "${cleanName}",
  "category": "Área de la profesión",
  "disruptionScore": 72,
  "disruptionLevel": "Alta Disrupción y Automatización Operativa",
  "summary2030": "Resumen ejecutivo del impacto de la IA en esta profesión hacia 2030 (2 a 3 líneas técnicas).",
  "emergentRole2030": "Nombre del rol profesional emergente al 2030 (ej. Diseñador de X / Orquestador de Y)",
  "automatedTasks": [
    "Tarea operativa 1 que la IA automatizará por completo",
    "Tarea operativa 2 que la IA automatizará por completo",
    "Tarea operativa 3 que la IA automatizará por completo",
    "Tarea operativa 4 que la IA automatizará por completo"
  ],
  "humanSuperpowers": [
    "Superpoder humano insustituible 1 (empatía, criterio ético, pensamiento divergente)",
    "Superpoder humano insustituible 2 (negociación, lectura contextual)",
    "Superpoder humano insustituible 3 (creatividad no lineal, juicio crítico)",
    "Superpoder humano insustituible 4 (contención emocional, liderazgo relacional)"
  ],
  "obsoleteSubjects": [
    "Materia o práctica tradicional universitaria 1 que ya está desfasada",
    "Materia tradicional 2 que el mercado ya no valora memorizar",
    "Materia tradicional 3 superada por herramientas digitales"
  ],
  "curriculumBlindSpots": [
    "Conocimiento clave 1 que la universidad NO suele enseñar y el mercado corporativo exige hoy",
    "Conocimiento clave 2 ausente en planes de estudio públicos",
    "Conocimiento clave 3 (herramientas digitales, IA aplicada, agilidad)"
  ],
  "bimodalPath": {
    "via1": "Grado formal en ${cleanName} (4 a 5 años en Universidad)",
    "via2": "Microcredenciales técnicas en herramientas digitales y especialización práctica (3 a 6 meses)",
    "platforms": ["Coursera / Google / edX", "Plataformas de certificación especializada"],
    "earlyIncome": "Cómo generar ingresos tempranos y experiencia real desde el 2.° año de formación."
  },
  "odysseyPlans": {
    "plan1": {
      "title": "Ruta Principal: El Profesional Titulado en ${cleanName}",
      "description": "Licenciatura o ingeniería formal con sólida base científica y técnica.",
      "year1": "Fundamentos y materias troncales.",
      "year2": "Laboratorios y primeras prácticas de campo.",
      "year3": "Prácticas profesionales intermedias.",
      "year4": "Servicio social y proyecto integrador de egreso.",
      "year5": "Inserción laboral formal en puestos de responsabilidad."
    },
    "plan2": {
      "title": "Ruta Bimodal: El Perfil Híbrido + Habilidades Digitales",
      "description": "Universidad complementada con certificaciones de alta demanda en paralelo.",
      "year1": "Tronco común + primera microcredencial de 3 meses.",
      "year2": "Primeros proyectos remunerados o consultoría junior.",
      "year3": "Portafolio profesional consolidado con clientes reales.",
      "year4": "Titulación con ventaja competitiva de mercado.",
      "year5": "Especialista de alto valor con doble perfil estratégico."
    },
    "plan3": {
      "title": "Ruta Salvaje / Radical: Emprendimiento Vocacional Disruptivo",
      "description": "Proyecto audaz sin miedo al juicio social ni limitaciones de dinero.",
      "year1": "Exploración radical de la frontera más innovadora de la disciplina.",
      "year2": "Prototipo experimental o comunidad de nicho.",
      "year3": "Alianzas estratégicas e impacto social o tecnológico.",
      "year4": "Escalabilidad de la iniciativa con tracción propia.",
      "year5": "Liderar un movimiento o agencia pionera en el sector.",
      "sparkToRescue": "La chispa de pasión y libertad creativa que debe nutrir al Plan 1."
    },
    "coherence": { "resources": 85, "like": 92, "confidence": 88, "coherence": 94 }
  },
  "rapidPrototype": {
    "interviewTitle": "Conversación de Diseño Vocacional (15 min) con Profesional en Activo",
    "suggestedRole": "Profesional titulado o líder en activo en el área de ${cleanName}",
    "questions": [
      "¿Cómo es un martes promedio en tu trabajo entre las 9:00 y las 14:00 horas?",
      "¿Qué competencias aprendiste por tu cuenta que la universidad nunca te enseñó?",
      "Con el avance de la Inteligencia Artificial, ¿qué harías diferente si tuvieras 18 años hoy?"
    ],
    "microExperience": "Experiencia inmersiva de 2 a 3 horas para prototipar el día a día real de la profesión."
  },
  "familyKit": {
    "commonParentFear": "Miedo familiar recurrente ante la elección de esta carrera.",
    "empathicValidation": "Papá, mamá: entiendo que su preocupación es mi bienestar y futuro profesional.",
    "dataDefense": "Argumentos con datos de mercado OVDIA para demostrar que el enfoque bimodal garantiza empleabilidad.",
    "agreementCommitment": "Acordar una tregua de 30 días para realizar dos entrevistas de diseño y presentarles la ruta de microcredenciales."
  }
}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000); // 9 segundos límite

    let parsedJson = null;

    if (provider === 'openai') {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: `Deconstruye la carrera: "${cleanName}" en formato JSON.` }
          ],
          response_format: { type: 'json_object' },
          temperature: 0.3
        })
      });

      clearTimeout(timeout);

      if (!response.ok) {
        console.warn('OpenAI API respondió con error, usando motor heurístico local');
        return { ...findCareerOrGenerate(cleanName), fromAI: false, error: 'api_error' };
      }

      const data = await response.json();
      const textOutput = data.choices?.[0]?.message?.content;
      if (!textOutput) {
        return { ...findCareerOrGenerate(cleanName), fromAI: false, error: 'empty_response' };
      }
      parsedJson = JSON.parse(textOutput);
    } else {
      // Gemini
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt + `\n\nResponde ÚNICAMENTE con el objeto JSON para la carrera "${cleanName}".` }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.3
          }
        })
      });

      clearTimeout(timeout);

      if (!response.ok) {
        console.warn('Gemini API respondió con error, usando motor heurístico local');
        return { ...findCareerOrGenerate(cleanName), fromAI: false, error: 'api_error' };
      }

      const data = await response.json();
      const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textOutput) {
        return { ...findCareerOrGenerate(cleanName), fromAI: false, error: 'empty_response' };
      }
      parsedJson = JSON.parse(textOutput);
    }

    // Guardar en caché de sesión para máxima agilidad en el Kiosco
    try {
      sessionStorage.setItem(cacheKey, JSON.stringify(parsedJson));
    } catch (e) {}

    return { ...parsedJson, fromAI: true, aiProvider: provider === 'openai' ? 'OpenAI GPT-4o-mini' : 'Google Gemini' };
  } catch (error) {
    console.warn('Fallo en llamada a IA, activando motor local:', error.message);
    return { ...findCareerOrGenerate(cleanName), fromAI: false, error: error.message };
  }
}
