import React, { useState } from 'react';
import { Terminal, Copy, CheckCircle2, Sparkles, BookOpen, Layers, Zap } from 'lucide-react';

export function PromptsLabModal({ isOpen, onClose, careerName, studentName, initialTab = 'activacion' }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(initialTab); // 'activacion', 'plantilla1', 'plantilla2', 'plantilla3', 'final'

  if (!isOpen) return null;

  const targetCareer = careerName || '[Escribe aquí el nombre de la carrera]';

  const prompts = [
    {
      id: 'activacion',
      title: 'Prompt de Activación Previa',
      subtitle: 'Semana 2 • Para estudiantes indecisos o en exploración',
      options: [
        {
          name: 'Opción A: Por Materias y Pasatiempos',
          text: `Eres un orientador experto en desarrollo de competencias. No tengo decidida una carrera todavía. Mis materias favoritas son [escribe 2 materias que te gusten], mis pasatiempos o intereses son [escribe 2 pasatiempos], y me considero bueno(a) en [escribe una habilidad, ej: organizar, explicar, crear]. Con base en esto, sugiéreme 3 opciones de carreras universitarias emergentes que tengan alta demanda laboral y fit con mi perfil.`
        },
        {
          name: 'Opción B: Por Flujo de Trabajo (AEIOU)',
          text: `Te voy a dar datos de cómo trabajo mejor en mi día a día. Me siento con más energía cuando [aquí pones lo que hiciste], en un ambiente [aquí pones el lugar], trabajando [solo/en equipo], usando [tu herramienta] Y a quien es dirigido esta actividad que realizas. Con base en esta forma de trabajar, no me des nombres de carreras tradicionales. Dame 3 áreas de trabajo o puestos reales actuales donde esta forma de trabajar sea muy valorada, y explícame qué hace esa persona en un día normal.`
        }
      ]
    },
    {
      id: 'plantilla1',
      title: 'Plantilla 1: Auditoría de Viabilidad BANI',
      subtitle: 'Semana 2 • Deconstrucción de tareas al 2030',
      text: `Eres un analista experto en prospectiva laboral y tendencias de empleo hacia el año 2030 en un entorno BANI (Quebradizo, Ansioso, No lineal e Incomprensible). Voy a estudiar la carrera de ${targetCareer}.

Por favor, respóndeme lo siguiente:
1. ¿Qué porcentaje aproximado de las tareas operativas tradicionales de esta profesión corre riesgo de automatización en los próximos años?
2. ¿Cuáles son las 3 habilidades humanas críticas y no automatizables (como pensamiento crítico, adaptabilidad o gestión emocional) que un profesional de esta área necesitará obligatoriamente para destacar?
3. Menciona 2 riesgos ocultos o 'puntos ciegos' que los planes de estudio universitarios actuales suelen ignorar sobre esta profesión.`
    },
    {
      id: 'plantilla2',
      title: 'Plantilla 2: Entorno Laboral Real vs. Plan de Estudios',
      subtitle: 'Semana 2 • Simulación con Director de RRHH',
      text: `Eres un director de recursos humanos de una empresa de alta innovación. Analiza la carrera de ${targetCareer} en México.

Proporcióname:
1. Un panorama realista de cómo es un día de trabajo típico para un profesionista recién egresado en esta área hoy en día.
2. Una lista de 3 materias o conocimientos clave que no suelen enseñarse en la universidad, pero que el mercado laboral exige de inmediato para ser contratado.
3. Sugiere una ruta de aprendizaje autodidacta complementaria (cursos cortos, certificaciones o habilidades técnicas) que deba estudiar en paralelo a la carrera para asegurar mi empleabilidad.`
    },
    {
      id: 'plantilla3',
      title: 'Plantilla 3: Ruta Bimodal y Contingencia (Duelo Académico)',
      subtitle: 'Semana 2 • Plan A y Plan B Integrados',
      text: `Eres un estratega de desarrollo profesional y experto en transiciones académicas en un entorno BANI. Estoy evaluando postularme a la carrera de ${targetCareer} en una universidad pública de alta demanda.

Como parte de una estrategia de alto rendimiento y no de un plan de emergencia, ayúdame a estructurar:
1. La Ruta Bimodal: Cómo puedo combinar desde el día uno mi ingreso a la universidad (Plan A) con una especialización técnica o autodidacta en paralelo (certificaciones, habilidades digitales o proyectos) para salir al mercado con ventaja real.
2. La Alternativa de Alto Impacto (Plan B Estratégico): Una ruta alterna o carrera afín de rápida inserción que funcione como un acelerador de experiencia en caso de que los tiempos del proceso de admisión público requieran un movimiento táctico, evitando cualquier pausa en mi desarrollo profesional.`
    },
    {
      id: 'final',
      title: 'PROMPT PARA RESULTADO FINAL',
      subtitle: 'Compilación Oficial del Reporte Ejecutivo de 5 Secciones',
      text: `Eres un analista senior de desarrollo profesional y especialista en diseño curricular en un entorno BANI. Necesito que generes un reporte formal, estructurado y de nivel profesional basado en la investigación y auditoría de la carrera de ${targetCareer}.

El documento debe entregarse con un tono ejecutivo, técnico y sin sesgos de optimismo infundado, bajo la siguiente estructura obligatoria:
1. Diagnóstico de Viabilidad y Exposición al Entorno BANI (2030): Análisis crítico del riesgo de automatización de las tareas operativas típicas de esta profesión y el porcentaje estimado de disrupción tecnológica.
2. Matriz de Competencias Insustituibles: Desglose técnico de las habilidades humanas de alta demanda (pensamiento crítico, gestión de la incertidumbre, liderazgo estratégico) que la tecnología no puede reemplazar en este campo.
3. Auditoría de Brecha Curricular: Contraste entre la formación teórica tradicional de las universidades públicas y los requerimientos reales del mercado corporativo actual (herramientas digitales, agilidad, metodologías aplicadas).
4. Estructura de Ruta Bimodal (Plan A + B Integrados): Sincronización estratégica de la formación universitaria con un carril de especialización autodidacta y práctica en paralelo (certificaciones, herramientas de análisis, software o proyectos aplicados) desde los primeros semestres.
5. Alternativa de Alto Impacto (Plan B Estratégico): Propuesta de una ruta técnica o carrera afín aceleradora que funcione como un movimiento táctico de inserción laboral rápida, detallando su ventaja competitiva frente a la saturación de los procesos de admisión tradicionales.`
    }
  ];

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(key);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const activePromptData = prompts.find(p => p.id === activeTab) || prompts[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-950 text-cyan-400 border border-cyan-800">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-black text-xl text-white">
                  Laboratorio de Prompts Maestros OVDIA
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Semana 2
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Plantillas oficiales protocolizadas por el Lic. Francisco Javier Robledo Zatarain
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-semibold">
          {prompts.map((p) => (
            <button
              type="button"
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`py-2 px-3 rounded-xl transition-all cursor-pointer ${
                activeTab === p.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {p.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Active Prompt View */}
        <div className="space-y-4">
          <div>
            <h4 className="font-heading font-black text-lg text-white">
              {activePromptData.title}
            </h4>
            <p className="text-xs text-cyan-400 font-medium">
              {activePromptData.subtitle}
            </p>
          </div>

          {activePromptData.options ? (
            <div className="space-y-4">
              {activePromptData.options.map((opt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                    <span className="font-bold text-slate-200 text-xs">{opt.name}:</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(opt.text, `opt_${idx}`)}
                      className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                    >
                      {copiedIndex === `opt_${idx}` ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs text-slate-300 font-mono leading-relaxed whitespace-pre-wrap">
                    {opt.text}
                  </pre>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-900">
                <span className="text-xs text-slate-400">
                  Carrera inyectada: <strong className="text-cyan-300">{targetCareer}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(activePromptData.text, activePromptData.id)}
                  className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                >
                  {copiedIndex === activePromptData.id ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado al Portapapeles!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Prompt Maestro</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-xs text-slate-300 font-mono leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
                {activePromptData.text}
              </pre>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer"
        >
          Cerrar Laboratorio
        </button>

      </div>
    </div>
  );
}
