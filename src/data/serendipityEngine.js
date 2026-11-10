// Serendipia Planificada / Happenstance Learning Theory (John Krumboltz, Stanford)
// Módulo interactivo de giros fortuitos y desarrollo de las 5 competencias
// Metodología OVDIA - Lic. Francisco Javier Robledo Zatarain

export const SERENDIPITY_COMPETENCIES = [
  {
    name: 'Curiosidad',
    english: 'Curiosity',
    icon: 'Sparkles',
    desc: 'Explorar activamente nuevas tecnologías y aprendizajes más allá de la currícula escolar.'
  },
  {
    name: 'Persistencia',
    english: 'Persistence',
    icon: 'ShieldCheck',
    desc: 'Sostener el esfuerzo adaptativo frente a un resultado adverso o un examen no aprobado.'
  },
  {
    name: 'Flexibilidad',
    english: 'Flexibility',
    icon: 'Shuffle',
    desc: 'Modificar actitudes y planes sin frustración cuando el mercado o la IA cambian el contexto.'
  },
  {
    name: 'Optimismo',
    english: 'Optimism',
    icon: 'Sun',
    desc: 'Considerar los imprevistos y tropiezos como oportunidades alcanzables de aprendizaje.'
  },
  {
    name: 'Riesgo Calculado',
    english: 'Risk-Taking',
    icon: 'Compass',
    desc: 'Atrévete a actuar en la incertidumbre mediante micro-experimentos de bajo costo sin parálisis.'
  }
];

export const SERENDIPITY_SCENARIOS = [
  {
    id: 1,
    title: 'Giro Inesperado: La Convocatoria Universitaria redujo cupos al 4%',
    event: 'La facultad pública donde pensabas estudiar redujo sus lugares de ingreso a la mitad debido a recortes presupuestales.',
    traditionalReaction: '🔴 Reacción Tradicional (Atractor Punto): "Se arruinó mi vida, soy un fracaso, me quedaré un año en cama deprimido."',
    ovdiaPivot: '🟢 Giro Serendipia OVDIA (Resiliencia Bimodal): "Acepto el cupo como un Problema de Gravedad inalterable. Activo mi Vía 2 bimodal: curso una microcredencial técnica de 4 meses en IA, genero ingresos propios y decido con calma el siguiente paso sin perder un solo semestre."',
    competencyActivated: 'Flexibilidad y Persistencia'
  },
  {
    id: 2,
    title: 'Giro Inesperado: Hackathon Escolar el Fin de Semana',
    event: 'Un profesor anuncia un evento de 24 horas para resolver un problema de la comunidad usando tecnología. Tú nunca has programado.',
    traditionalReaction: '🔴 Reacción Tradicional (Miedo al error): "No voy porque no sé programar y voy a hacer el ridículo."',
    ovdiaPivot: '🟢 Giro Serendipia OVDIA (Sesgo a la Acción): "Asisto como orquestador de diseño y empatía de usuario. Conozco a dos ingenieros, aporto la visión humana y ganamos una mención honorífica que añade valor a mi currículum."',
    competencyActivated: 'Curiosidad y Riesgo Calculado'
  },
  {
    id: 3,
    title: 'Giro Inesperado: Un Familiar busca automatizar su Pequeño Negocio',
    event: 'Tu tío comenta en la comida que pasa horas haciendo inventarios en hojas de papel y perdiendo clientes.',
    traditionalReaction: '🔴 Reacción Tradicional: "Ese es su problema, yo solo tengo que preocuparme por mis materias de la prepa."',
    ovdiaPivot: '🟢 Giro Serendipia OVDIA (Prototipo Rápido): "Le ofrezco ayudarle a implementar una plantilla digital gratuita con IA en 3 horas. El negocio mejora, mi tío me paga mis primeros honorarios y descubro mi talento para la consultoría de procesos."',
    competencyActivated: 'Curiosidad y Optimismo'
  },
  {
    id: 4,
    title: 'Giro Inesperado: Conversación casual con un Egresado en una Cafetería',
    event: 'Escuchas a un joven hablar sobre su trabajo en una empresa internacional de biotecnología/software.',
    traditionalReaction: '🔴 Reacción Tradicional: "Me da pena interrumpir, qué van a pensar de mí."',
    ovdiaPivot: '🟢 Giro Serendipia OVDIA (Conversación con el Futuro): "Me acerco con respeto, le hago las 3 preguntas clave de Stanford y me comparte su contacto para una visita guiada a su empresa."',
    competencyActivated: 'Riesgo Calculado y Curiosidad'
  }
];
