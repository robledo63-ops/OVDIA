// Teoría del Caos de Carreras (Pryor & Bright, 2003, 2011)
// Módulo de Diagnóstico de Atractores Vocacionales en el Entorno BANI
// Metodología OVDIA - Lic. Francisco Javier Robledo Zatarain

export const CHAOS_ATTRACTORS = {
  punto: {
    id: 'punto',
    name: 'Patrón Todo o Nada (Fijación en una sola opción)',
    quote: '"Solo puedo estudiar esta carrera específica; si no quedo en la universidad pública, mi vida entera se acaba."',
    badge: 'Riesgo de Frustración',
    badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    description: 'Sientes que solo existe un camino y que si no quedas en esa opción específica, todo se derrumba. Te ayudaremos a ver que tienes múltiples caminos y talentos para triunfar.',
    symptoms: [
      'Mucha angustia al pensar en el examen de admisión.',
      'Dificultad para imaginar otra opción sin sentir que es un "fracaso".',
      'Desgaste de energía preocupándote por cosas fuera de tu control.'
    ],
    reframing: 'Descubrir tus 3 Vidas Posibles (Planes Odisea de Stanford): recordarte que dentro de ti existen varias versiones geniales para tu futuro.'
  },
  pendulo: {
    id: 'pendulo',
    name: 'Patrón de Duda Extrema (¿Dinero o Pasión?)',
    quote: '"O estudio una carrera que me dé mucho dinero rápido o estudio lo que realmente me apasiona y me muero de hambre."',
    badge: 'Duda Constante',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    description: 'Tu mente va y viene entre dos extremos: "¿Estudio lo que me gusta o lo que dé dinero?". Con OVDIA aprenderás a combinar ambas cosas a tu favor.',
    symptoms: [
      'Sobrecarga mental: demasiadas ideas y opciones en la cabeza.',
      'Miedo a arrepentirte después de iniciar la carrera.',
      'Dejar la decisión para el final por no saber qué elegir.'
    ],
    reframing: 'Activar la Ruta de Dos Caminos: no tienes que elegir entre dinero o pasión; puedes cursar tu carrera principal complementada con certificaciones de alta demanda.'
  },
  torus: {
    id: 'torus',
    name: 'Patrón de Presión Familiar (Miedo a decepcionar)',
    quote: '"En mi familia todos esperan que estudie cierta carrera; me da culpa elegir algo distinto."',
    badge: 'Presión de Casa',
    badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    description: 'Sientes la carga de cumplir lo que la familia espera o seguir la tradición de casa, con temor a fallarles. Te daremos herramientas para platicarlo con ellos en paz.',
    symptoms: [
      'Nervios, culpa y temor constante a no cumplir lo que tus papás esperan.',
      'Conversaciones tensas en casa cuando se habla de la universidad.',
      'Sentir que estás eligiendo para complacer a otros y no a ti.'
    ],
    reframing: 'Usar el Kit de Diálogo Familiar: platicar con tus papás desde el cariño y con información clara de las carreras hacia el 2030.'
  },
  extrano: {
    id: 'extrano',
    name: 'Patrón Flexible y Adaptable (Mente Ágil)',
    quote: '"Tengo una meta clara que me entusiasma, y tengo la mente abierta para adaptarme al camino."',
    badge: 'Estado Ideal OVDIA',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    description: 'Tienes una dirección clara, pero eres flexible: sabes adaptarte y buscar nuevas soluciones si algo cambia en el camino.',
    symptoms: [
      'Curiosidad por aprender cosas nuevas y usar herramientas digitales.',
      'Capacidad de tomar los imprevistos como aprendizajes.',
      'Ganas de avanzar y confianza en tus capacidades.'
    ],
    reframing: 'Aprovechar tu entusiasmo para probar proyectos rápidos y conectar con personas que ya trabajan en tu área de interés.'
  }
};
