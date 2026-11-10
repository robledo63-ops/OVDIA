// Endpoint Serverless Seguro para Vercel
// Metodología: Lic. Francisco Javier Robledo Zatarain
// Permite deconstruir carreras al 2030 sin exponer ninguna clave API en el navegador.

export default async function handler(req, res) {
  // Configuración de CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Utiliza POST.' });
  }

  const { careerName } = req.body || {};
  if (!careerName || !careerName.trim()) {
    return res.status(400).json({ error: 'Se requiere el nombre de la carrera.' });
  }

  const cleanName = careerName.trim();
  const openaiKey = process.env.OPENAI_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  if (!openaiKey && !geminiKey) {
    return res.status(503).json({
      error: 'No hay clave de IA configurada en el servidor de Vercel.',
      useFallback: true
    });
  }

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
    if (openaiKey) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiKey}`
        },
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

      if (!response.ok) {
        throw new Error(`OpenAI error: HTTP ${response.status}`);
      }

      const data = await response.json();
      const textOutput = data.choices?.[0]?.message?.content;
      return res.status(200).json(JSON.parse(textOutput));
    } else if (geminiKey) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt + `\n\nResponde ÚNICAMENTE con el objeto JSON para la carrera "${cleanName}".` }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.3
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini error: HTTP ${response.status}`);
      }

      const data = await response.json();
      const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
      return res.status(200).json(JSON.parse(textOutput));
    }
  } catch (err) {
    console.error('Error en /api/generate:', err);
    return res.status(500).json({ error: err.message, useFallback: true });
  }
}
