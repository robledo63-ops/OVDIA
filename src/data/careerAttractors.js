// Teoría del Caos de Carreras (Pryor & Bright, 2003, 2011)
// Módulo de Diagnóstico de Atractores Vocacionales en el Entorno BANI
// Metodología OVDIA - Lic. Francisco Javier Robledo Zatarain

export const CHAOS_ATTRACTORS = {
  punto: {
    id: 'punto',
    name: 'Atractor Punto (Fijación Rígida)',
    quote: '"Solo puedo estudiar esta carrera específica; si no quedo en la universidad pública, mi vida entera se acaba."',
    badge: 'Riesgo de Colapso',
    badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    description: 'El sistema vocacional está atraído rígidamente hacia un único desenlace fijo. Se percibe cualquier desviación o tropiezo como una catástrofe irreversible.',
    symptoms: [
      'Pánico extremo al examen de admisión con cupos reducidos.',
      'Incapacidad para contemplar una segunda opción sin sentir que es un "fracaso".',
      'Desgaste de energía psíquica luchando contra Problemas de Gravedad inalterables.'
    ],
    reframing: 'Desarmar el Atractor Punto mediante los 3 Planes Odisea (Stanford Life Design): recordarle al estudiante que dentro de él existen múltiples versiones viables y valiosas.'
  },
  pendulo: {
    id: 'pendulo',
    name: 'Atractor Péndulo (Dilema Dicotómico)',
    quote: '"O estudio una carrera que me dé mucho dinero rápido o estudio lo que realmente me apasiona y me muero de hambre."',
    badge: 'Parálisis Decisional',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    description: 'El pensamiento del estudiante oscila perpetuamente entre dos extremos polarizados (dinero vs pasión, arte vs ingeniería), sin encontrar punto de integración.',
    symptoms: [
      'Infoxicación y sobrecarga mental: demasiadas pestañas abiertas en la cabeza.',
      'Miedo crónico a arrepentirse a los dos años de iniciar.',
      'Postergación de la toma de decisiones hasta que se cierran las convocatorias.'
    ],
    reframing: 'Activar la Estrategia Bimodal: demostrar que no tiene que elegir entre dinero o pasión; puede combinar una carrera de fondo con microcredenciales de alta demanda técnica.'
  },
  torus: {
    id: 'torus',
    name: 'Atractor Torus (Mandato Familiar en Bucle)',
    quote: '"En mi familia todos son médicos/contadores desde mi abuelo; siento una culpa inmensa si rompo la tradición."',
    badge: 'Conflicto por Lealtad',
    badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    description: 'Trayectoria en bucle cerrado que repite mandatos intergeneracionales por lealtad afectiva inconsciente, reprimiendo los verdaderos talentos del estudiante.',
    symptoms: [
      'Somatización, culpa y temor constante a "defraudar" a los padres.',
      'Discusiones tensas en la mesa familiar al hablar de opciones contemporáneas.',
      'Sensación de vivir la vida de otra persona.'
    ],
    reframing: 'Implementar el Kit de Sintonía Familiar y el Acuerdo de Exploración a 30 Días: dialogar con los padres desde el afecto y con datos objetivos de mercado al 2030.'
  },
  extrano: {
    id: 'extrano',
    name: 'Atractor Extraño (Complejidad Abierta y Resiliencia)',
    quote: '"Tengo una dirección clara que me entusiasma, pero soy ágil y flexible en la ruta que elijo para llegar."',
    badge: 'Estado Óptimo OVDIA',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    description: 'El estado de adaptabilidad superior en el "borde del caos": reconoce la incertidumbre de la IA y el mercado, y navega con serenidad gracias a experimentos de bajo costo.',
    symptoms: [
      'Curiosidad activa y experimentación con nuevas herramientas tecnológicas.',
      'Capacidad de aceptar los imprevistos como datos de campo y oportunidades.',
      'Alta autonomía personal y sentido de propósito.'
    ],
    reframing: 'Potenciar su liderazgo con prototipado rápido y vinculación temprana con profesionales de su área.'
  }
};
