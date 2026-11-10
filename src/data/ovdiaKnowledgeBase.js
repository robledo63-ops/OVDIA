// Base de Conocimiento Canónica Metodológica OVDIA 2030
// Basada en:
// 1. "Orientación Vocacional Disruptiva con IA - Guía Metodológica y Manual del Formador en el Entorno BANI"
// 2. "Manual Práctico de Autogestión Vocacional con IA - Playbook Interactivo de Carrera"
// Autor: Lic. Francisco Javier Robledo Zatarain (Tijuana, B.C., México)

export const CAREER_DATABASE = [
  {
    id: 'modas',
    name: 'Diseño y Mercadotecnia de Modas (Industria Textil)',
    aliases: ['moda', 'modas', 'diseño de modas', 'diseno de modas', 'textil', 'confeccion', 'confección', 'fashion', 'indumentaria', 'ropa', 'estilismo'],
    category: 'Artes, Diseño y Creatividad',
    disruptionScore: 76,
    disruptionLevel: 'Alta Automatización Digital y Fast Fashion',
    summary2030: 'La generación algorítmica de estampados por IA, el modelado 3D de prendas sobre avatares virtuales y la predicción de tendencias mediante redes sociales transforman la moda rápida. El valor del diseñador 2030 radicará en la curaduría táctil de materiales, el patronaje a medida, el ecodiseño circular y la narrativa de autor que conecta con la identidad cultural.',
    emergentRole2030: 'Diseñador Textil Sostenible y Curador de Moda Digital 3D',
    automatedTasks: [
      'Generación automática de figurines, estampados y combinaciones de color con IA (Midjourney/DALL-E).',
      'Predicción estadística de microtendencias y consumo rápido mediante algoritmos de redes sociales.',
      'Optimización algorítmica de trazos de tela para corte industrial computarizado.',
      'Simulación virtual estandarizada de caída de prendas en avatares digitales 3D.'
    ],
    humanSuperpowers: [
      'Sensibilidad háptica y drapeado sobre maniquí vivo (moulage): comprender el tacto, peso y comportamiento de la fibra real.',
      'Patronaje anatómico complejo, sastrería y confección a medida que abraza la diversidad corporal humana.',
      'Criterio ético sobre economía circular: suprarreciclaje (upcycling), biomateriales y trazabilidad laboral justa.',
      'Conexión emocional y estilismo empático: traducir la identidad, vulnerabilidad y autoestima del cliente en una prenda con alma.'
    ],
    obsoleteSubjects: [
      'Ilustración manual repetitiva de figurines en acuarela sin digitalización vectorial ni 3D.',
      'Trazado exclusivo de patrones en papel mantequilla sin software de patronaje digital (Lectra / Audaces).',
      'Memorización de catálogos estáticos de telas sintéticas desvinculadas de fibras ecológicas e inteligentes.'
    ],
    curriculumBlindSpots: [
      'Modelado y prototipado 3D de prendas virtuales en software de vanguardia (CLO 3D / Browzwear).',
      'Ecodiseño circular, ciclo de vida de materiales y aprovechamiento de residuo cero (Zero Waste).',
      'E-Commerce de moda independiente, marketing de creadores en TikTok/Instagram y modelos Direct-to-Consumer (DTC).'
    ],
    bimodalPath: {
      via1: 'Licenciatura en Diseño y Mercadotecnia de Modas (4 años en Universidad)',
      via2: 'Microcredenciales en Patronaje Digital 3D (CLO 3D) y E-Commerce Textil en Shopify (3 a 6 meses)',
      platforms: ['CLO Virtual Fashion Academy', 'Coursera / Google E-Commerce / Domestika Pro'],
      earlyIncome: 'Modelado 3D de prototipos de ropa para marcas independientes, confección a medida de prendas personalizadas o gestión de tiendas Shopify de moda desde el 2.° año.'
    },
    odysseyPlans: {
      plan1: {
        title: 'Ruta Principal: El Diseñador de Autor y Gestor de Marca',
        description: 'Licenciatura formal destacando en confección de alta gama y desfiles de pasarela.',
        year1: 'Historia de la indumentaria, textiles, fundamentos del color y primeros figurines.',
        year2: 'Patronaje anatómico, drapeado sobre maniquí y confección de sastrería.',
        year3: 'Prácticas en taller de confección o marca de moda + colección semestral.',
        year4: 'Presentación de pasarela de egreso con colección cápsula y tesis de autor.',
        year5: 'Lanzamiento de atelier propio o diseñador titular en marca regional consolidada.'
      },
      plan2: {
        title: 'Ruta Bimodal: Diseñador de Moda Digital 3D y Marcas E-Commerce',
        description: 'Combina el buen gusto del diseño con software 3D para marcas internacionales de videojuegos y moda virtual.',
        year1: 'Tronco de moda universitario + certificación en CLO 3D y renderizado textil.',
        year2: 'Venta de activos de ropa digital para avatares y prototipado 3D para maquilas.',
        year3: 'Lanzamiento de micro-marca de ropa sostenible vendida exclusivamente en línea.',
        year4: 'Facturación en dólares exportando diseños y asesorando en patronaje digital.',
        year5: 'Director creativo de moda digital y consultor de sostenibilidad textil.'
      },
      plan3: {
        title: 'Ruta Salvaje / Radical: Fundador de un Movimiento de Ropa de Rescate y Arte Textil',
        description: 'Sin límites de dinero ni juicios: crear un laboratorio comunitario de suprarreciclaje que transforme toneladas de merma textil en arte vestible.',
        year1: 'Recolección de ropa desechada y experimentación textil radical.',
        year2: 'Primera exhibición de moda de rescate en festivales culturales.',
        year3: 'Talleres comunitarios para capacitar a mujeres en costura de alta gama sustentable.',
        year4: 'Colaboración internacional con activistas del medio ambiente.',
        year5: 'Marca reconocida globalmente por desarticular la contaminación del fast fashion.',
        sparkToRescue: 'El coraje rebelde y la autenticidad social deben impedir que caiga en la superficialidad de la moda desechable.'
      },
      coherence: { resources: 85, like: 98, confidence: 85, coherence: 94 }
    },
    rapidPrototype: {
      interviewTitle: 'Conversación de Diseño (15 min) con Diseñador(a) de Modas o Dueño(a) de Marca',
      suggestedRole: 'Diseñador(a) activo(a) que tenga marca propia o trabaje en taller de confección',
      questions: [
        '¿Cuánto tiempo de tu semana pasas cosiendo y bocetando vs comprando telas, cotizando maquila y atendiendo clientes?',
        '¿Qué fue lo que la escuela de modas NO te enseñó sobre cómo vender y cobrar por tus prendas?',
        '¿Cómo utilizas el software 3D o las redes sociales para no depender de tiendas departamentales?'
      ],
      microExperience: 'Visitar una tienda de telas local, tocar 5 tipos de fibras diferentes (algodón, lino, viscosa, mezclilla, seda) y armar un muestrario táctil (2 horas).'
    },
    familyKit: {
      commonParentFear: 'La típica objeción familiar: "La moda es solo costura o un capricho caro, te vas a morir de hambre haciendo dobladillos".',
      empathicValidation: 'Papá, mamá: sé que cuando escuchan "modas" se imaginan una máquina de coser vieja y tienen miedo de que no tenga un empleo seguro. Agradezco que quieran protegerme.',
      dataDefense: 'La industria de la moda mueve miles de millones de dólares. Quien solo cose sufre; pero el diseñador bimodal que domina software 3D (CLO 3D) y venta digital (E-Commerce) trabaja para marcas internacionales de ropa deportiva, cine y pasarelas con ingresos en dólares.',
      agreementCommitment: 'Hagamos la tregua de 30 días: entrevistaré a una diseñadora en activo y les presentaré el plan de inversión y certificaciones de Vía 2 para darles total tranquilidad.'
    }
  },
  {
    id: 'derecho',
    name: 'Derecho y Ciencias Jurídicas',
    aliases: ['derecho', 'abogado', 'abogacia', 'abogacía', 'leyes', 'juridico', 'jurídico'],
    category: 'Ciencias Sociales y Jurídicas',
    disruptionScore: 72,
    disruptionLevel: 'Alta Disrupción Operativa',
    summary2030: 'Los contratos estándar, la revisión de expedientes y la jurisprudencia serán procesados en segundos por LLMs jurídicos. El valor del abogado 2030 radicará en la mediación cara a cara, el litigio estratégico y la gobernanza ética de algoritmos.',
    emergentRole2030: 'Arquitecto Legal de Gobernanza Algorítmica y Mediador Ético',
    automatedTasks: [
      'Búsqueda y correlación masiva de jurisprudencia en bases de datos.',
      'Redacción de contratos mercantiles y acuerdos de confidencialidad estandarizados.',
      'Revisión preliminar de cláusulas de cumplimiento normativo (Compliance automático).',
      'Extracción y síntesis de datos en litigios de alto volumen de expedientes.'
    ],
    humanSuperpowers: [
      'Empatía y contención emocional en juicios orales, mediación familiar y crisis de clientes.',
      'Juicio moral y criterio ético no estructurado en dilemas de derechos humanos y nuevas tecnologías.',
      'Negociación de alta tensión y calibración de intereses entre partes en conflicto.',
      'Estrategia litigiosa adaptativa y lectura del lenguaje corporal de jueces y jurados.'
    ],
    obsoleteSubjects: [
      'Memorización rígida de códigos y artículos civiles sin enfoque contextual.',
      'Mecanografía y redacción manual de contratos repetitivos de machote.',
      'Tramitología burocrática física de archivo ya digitalizada por tribunales electrónicos.'
    ],
    curriculumBlindSpots: [
      'Gobernanza y marco regulatorio de Inteligencia Artificial y Datos Personales.',
      'Smart Contracts, Blockchain y Tokenización de Activos.',
      'Prompt Engineering Jurídico y Auditoría de Evidencia Digital generada por IA.'
    ],
    bimodalPath: {
      via1: 'Licenciatura en Derecho (4 a 5 años en Universidad)',
      via2: 'Certificación Profesional en Ciberderecho, Privacidad de Datos y Prompt Engineering (3 a 6 meses)',
      platforms: ['Coursera / Google / edX', 'Diplomados en Compliance Tecnológico'],
      earlyIncome: 'Asistente de cumplimiento normativo digital, auditoría de términos y condiciones para startups o redacción de acuerdos freelance a partir del 3.er semestre.'
    },
    odysseyPlans: {
      plan1: {
        title: 'Ruta Principal: El Jurista Estratégico Universitario',
        description: 'Licenciatura tradicional destacando en juicio oral y derecho corporativo.',
        year1: 'Dominio de fundamentos del derecho + creación de círculo de debate.',
        year2: 'Primeras prácticas en despacho legal + inicio de certificación en derecho digital.',
        year3: 'Prácticas en litigio corporativo / mediación y servicio social.',
        year4: 'Titulador por examen de excelencia o tesis en gobernanza de IA.',
        year5: 'Asociado junior en despacho especializado con cartera corporativa.'
      },
      plan2: {
        title: 'Ruta Bimodal: Especialista en Compliance Tecnológico y LegalTech',
        description: 'Combina el tronco formativo de leyes con microcredenciales en ciberseguridad y protección de datos.',
        year1: 'Tronco común universitario + Certificado en Protección de Datos (GDPR/LFPDPPP).',
        year2: 'Consultoría freelance para empresas medianas en privacidad y contratos digitales.',
        year3: 'Ingresos recurrentes propios + especialización en propiedad intelectual de IA.',
        year4: 'Lanzamiento de despacho boutique enfocado en startups y comercio electrónico.',
        year5: 'Líder regional de cumplimiento ético-legal en empresas tecnológicas.'
      },
      plan3: {
        title: 'Ruta Salvaje / Radical: Defensor Global de Derechos Digitales y Creador de Políticas',
        description: 'Sin límites de dinero ni juicio: liderar una ONG internacional que defienda la dignidad humana frente a la vigilancia algorítmica.',
        year1: 'Exploración de foros internacionales y diplomacia digital.',
        year2: 'Creación de canal de divulgación sobre derechos de la era IA.',
        year3: 'Beca en organización internacional de derechos civiles.',
        year4: 'Redacción de anteproyectos legislativos de impacto social.',
        year5: 'Director de políticas públicas para América Latina.',
        sparkToRescue: 'La audacia para comunicar causas justas y liderar con propósito social debe inyectarse a su Plan 1 desde hoy.'
      },
      coherence: { resources: 80, like: 90, confidence: 85, coherence: 95 }
    },
    rapidPrototype: {
      interviewTitle: 'Conversación de Diseño (15 min) con Abogado Corporativo o Litigante',
      suggestedRole: 'Abogado egresado hace 3 a 5 años en despacho activo',
      questions: [
        '¿Cómo es tu martes promedio entre las 9:00 y las 14:00 horas? (¿Cuánto tiempo pasas leyendo documentos vs hablando con personas?)',
        '¿Qué porcentaje de tu trabajo diario sientes que es papeleo mecánico que una computadora podría hacer?',
        'Si tuvieras 18 años hoy y supieras cómo viene la IA, ¿qué habilidad técnica aprenderías por tu cuenta?'
      ],
      microExperience: 'Asistir como oyente a una audiencia oral pública en el juzgado local (2 horas) para sentir la atmósfera y la tensión real.'
    },
    familyKit: {
      commonParentFear: 'Que los despachos estén saturados o que solo ganen dinero los abogados con contactos políticos de toda la vida.',
      empathicValidation: 'Papá, mamá: sé que su mayor deseo es que yo no batalle y tenga una carrera con prestigio y clientes seguros. Les agradezco de corazón que me cuiden.',
      dataDefense: 'He investigado con OVDIA que el abogado tradicional que solo hace machotes está en riesgo, pero el abogado bimodal con certificaciones en datos y tecnología tiene salarios 40% superiores y demanda internacional.',
      agreementCommitment: 'Les propongo una tregua de 30 días: entrevistaré a 2 abogados y cotizaré certificaciones de Vía 2 para presentarles el plan completo.'
    }
  },
  {
    id: 'medicina',
    name: 'Medicina General y Especialidades',
    aliases: ['medicina', 'medico', 'médico', 'doctor', 'doctora', 'cirujano', 'salud'],
    category: 'Ciencias de la Salud',
    disruptionScore: 60,
    disruptionLevel: 'Disrupción Diagnóstica y Telemedicina',
    summary2030: 'La lectura de radiografías, cálculo farmacológico y triaje primario serán asistidos por visión artificial y agentes de salud. El médico 2030 será irremplazable por su mirada clínica integral, compasión somática y decisiones bioéticas críticas.',
    emergentRole2030: 'Médico Integrativo con Diagnóstico Asistido y Longevidad Personalizada',
    automatedTasks: [
      'Detección preliminar de anomalías en imágenes diagnósticas (Rayos X, TAC, Resonancias).',
      'Cálculo y ajuste estandarizado de dosis farmacológicas según peso e historial.',
      'Transcripción y estructuración de expedientes clínicos electrónicos mediante voz.',
      'Monitoreo continuo de signos vitales mediante sensores IoT y wearables.'
    ],
    humanSuperpowers: [
      'Empatía clínica de cabecera: sostener la mano del paciente en momentos de dolor o pronóstico difícil.',
      'Criterio bioético en situaciones críticas donde los algoritmos carecen de valor moral.',
      'Intuición médica holística que conecta factores emocionales, familiares y somáticos del paciente.',
      'Destreza quirúrgica fina y juicio en quirófano frente a imprevistos anatómicos en vivo.'
    ],
    obsoleteSubjects: [
      'Memorización enciclopédica de guías farmacológicas que cambian mes con mes.',
      'Llenado manual en papel de recetas y expedientes hospitalarios sin interoperabilidad.',
      'Técnicas de cálculo analógico de mezclas ya automatizadas por bombas de infusión.'
    ],
    curriculumBlindSpots: [
      'Interpretación y auditoría de algoritmos diagnósticos de IA médica.',
      'Telemedicina avanzada y monitoreo remoto de pacientes con dispositivos biofisiológicos.',
      'Medicina genómica preventiva y bioinformática básica para tratamientos personalizados.'
    ],
    bimodalPath: {
      via1: 'Licenciatura en Medicina (6 a 7 años incluyendo internado y servicio)',
      via2: 'Microcredenciales en Salud Digital, Bioestadística con Python y Telemedicina (3 a 6 meses)',
      platforms: ['Coursera / Johns Hopkins / Harvard Online', 'Cursos de Informática Médica'],
      earlyIncome: 'Asistente de investigación clínica, coordinación de datos en ensayos médicos o consultoría de salud ocupacional para empresas.'
    },
    odysseyPlans: {
      plan1: {
        title: 'Ruta Principal: El Médico Clínico y Especialista Quirúrgico',
        description: 'Carrera tradicional con miras al examen de residencia médica nacional (ENARM).',
        year1: 'Dominio de anatomía, bioquímica y fisiología con simuladores 3D.',
        year2: 'Inmersión en fisiopatología y primeros contactos con pacientes en simulación.',
        year3: 'Rotaciones hospitalarias de pregrado y desarrollo de empatía clínica.',
        year4: 'Internado rotatorio de pregrado con turnos hospitalarios reales.',
        year5: 'Servicio social comunitario y preparación intensiva para la especialidad médica.'
      },
      plan2: {
        title: 'Ruta Bimodal: Médico Consultor en Tecnologías de Salud y Biotecnología',
        description: 'Formación médica complementada con certificaciones en analítica de datos clínicos y salud digital.',
        year1: 'Tronco médico + curso corto en Python para ciencias biomédicas.',
        year2: 'Vinculación con proyectos de investigación en salud preventiva.',
        year3: 'Publicación de artículos científicos asistidos por análisis de datos.',
        year4: 'Internado con enfoque en telemedicina y gestión hospitalaria moderna.',
        year5: 'Médico con doble perfil: práctica clínica privada + consultor de salud para empresas farmacéuticas.'
      },
      plan3: {
        title: 'Ruta Salvaje / Radical: Fundador de Clínicas Móviles Autónomas para Zonas Remotas',
        description: 'Crear un sistema de salud accesible con inteligencia artificial para comunidades indígenas o sin acceso a hospitales.',
        year1: 'Voluntariado en brigadas médicas rurales.',
        year2: 'Diseño del prototipo de teleclínica móvil de bajo costo.',
        year3: 'Alianzas con fundaciones internacionales y financiamiento social.',
        year4: 'Prueba piloto en comunidades vulnerables.',
        year5: 'Red de 20 centros comunitarios de salud preventiva apoyados por tecnología.',
        sparkToRescue: 'La vocación de servicio desinteresado y la sensibilidad social deben ser el motor que evite el agotamiento académico.'
      },
      coherence: { resources: 75, like: 95, confidence: 80, coherence: 98 }
    },
    rapidPrototype: {
      interviewTitle: 'Conversación de Diseño (15 min) con Médico Pasante o Residente',
      suggestedRole: 'Médico que esté cursando su internado o 1er año de residencia',
      questions: [
        '¿Cómo lidias con el cansancio mental de los turnos de 24 o 36 horas?',
        '¿Qué fue lo que ningún maestro te advirtió en la preparatoria sobre el trato real con pacientes?',
        'Si el cupo en la universidad pública es limitado, ¿qué plan alternativo hubieras activado?'
      ],
      microExperience: 'Acompañar a una brigada de la Cruz Roja o voluntariado de primeros auxilios durante un sábado (4 horas).'
    },
    familyKit: {
      commonParentFear: 'Que no quede en la convocatoria pública (donde aceptan solo al 5-8%) y se pierda un año entero en depresión.',
      empathicValidation: 'Papá, mamá: sé que Medicina es una carrera muy respetada y que ustedes sueñan con verme de bata blanca salvando vidas.',
      dataDefense: 'Entiendo que el cupo público es un Problema de Gravedad (circunstancia inalterable). Por eso tengo un Plan B bimodal (Biotecnología / Nutrición / Salud Digital) para avanzar sin estancarme si no quedo al primer intento.',
      agreementCommitment: 'Firmemos el Acuerdo a 30 Días: estudiaré con rigor para el examen, pero tendremos el Plan B acordado para no vivir en angustia.'
    }
  },
  {
    id: 'gastronomia',
    name: 'Gastronomía y Artes Culinarias',
    aliases: ['gastronomia', 'gastronomía', 'cocina', 'artes culinarias', 'chef', 'alimentos y bebidas', 'reposteria', 'repostería'],
    category: 'Hospitalidad y Ciencias de los Alimentos',
    disruptionScore: 58,
    disruptionLevel: 'Automatización de Cocina Rápida y Gestión Digital',
    summary2030: 'Los brazos robóticos y dispensadores automáticos asumirán la comida rápida y el picado mecánico. El chef 2030 será un artista de la experiencia multisensorial, científico de la fermentación y gestor de sostenibilidad gastronómica de kilómetro cero.',
    emergentRole2030: 'Chef Ejecutivo de Innovación Sensorial y Sostenibilidad Gastronómica',
    automatedTasks: [
      'Cálculo de gramajes y costos de recetas (escandallo) por software de cocina.',
      'Control y monitoreo de temperaturas en hornos y abatidores mediante sensores IoT.',
      'Recepción de pedidos y comandas automatizadas sin mesero en cadenas de comida.',
      'Generación algorítmica de combinaciones de ingredientes estándar por química de sabor.'
    ],
    humanSuperpowers: [
      'Calibración sensorial del paladar en tiempo real: sazón intuitiva, balance de acidez y textura.',
      'Liderazgo y templanza en la línea de fuego: coordinar brigadas de cocina bajo extrema presión.',
      'Hospitalidad cálida: salir al salón, escuchar a los comensales y crear recuerdos afectivos.',
      'Creatividad gastronómica de autor: narrar la historia de una tierra o cultura en cada platillo.'
    ],
    obsoleteSubjects: [
      'Cálculo manual de mermas y costos en libretas de papel sin software de restaurante.',
      'Memorización rígida del recetario clásico francés sin adaptación a productos locales sustentables.',
      'Técnicas de servicio burocrático de salón del siglo XX en desuso.'
    ],
    curriculumBlindSpots: [
      'Nutrición personalizada y cocina para alergias, intolerancias y medicina preventiva.',
      'Fermentación avanzada, hongos (Koji) y aprovechamiento de merma cero (Zero-Waste Kitchen).',
      'Marketing digital de restaurantes, creación de marca personal y finanzas de restaurantes modernos.'
    ],
    bimodalPath: {
      via1: 'Licenciatura en Gastronomía / Artes Culinarias (4 años)',
      via2: 'Microcredenciales en Costeo Digital de Restaurantes y Fermentaciones / Barismo (3 a 6 meses)',
      platforms: ['Culinary Arts Academy Online', 'Certificaciones en Manipulación Higiénica (Distintivo H / ServSafe)'],
      earlyIncome: 'Servicio de catering privado para eventos pequeños, panadería artesanal en línea o asesoría de menú para cafeterías desde el 2.° año.'
    },
    odysseyPlans: {
      plan1: {
        title: 'Ruta Principal: El Chef de Alta Cocina y Restaurador',
        description: 'Formación gastronómica universitaria orientada a dirigir brigadas en hoteles o restaurantes de alta gama.',
        year1: 'Técnicas de corte, seguridad e higiene y bases de cocina internacional.',
        year2: 'Panadería, repostería, carnes y primeros turnos de banquetes reales.',
        year3: 'Prácticas en restaurante reconocido y dominio de partidas calientes.',
        year4: 'Diseño de menú de autor de egreso y titulación práctica.',
        year5: 'Sous Chef o Chef Ejecutivo en restaurante prestigiado.'
      },
      plan2: {
        title: 'Ruta Bimodal: Emprendedor de Conceptos Gastronómicos y Dark Kitchens',
        description: 'Gastronomía combinada con marketing digital y costos para abrir negocios rentables.',
        year1: 'Tronco de cocina + curso de finanzas para restaurantes.',
        year2: 'Lanzamiento de concepto de comida delivery (Dark Kitchen) con marca propia.',
        year3: 'Generación de flujo de caja propio y reinversión en equipo profesional.',
        year4: 'Apertura de local físico o franquicia local de bajo costo.',
        year5: 'Dueño de dos conceptos gastronómicos rentables.'
      },
      plan3: {
        title: 'Ruta Salvaje / Radical: Fundador de un Comedor Regenerativo de Huerto Propio',
        description: 'Sin límites: crear un restaurante rural sustentable donde el 100% de los ingredientes se cosechan en el huerto y se cocinan con leña.',
        year1: 'Voluntariado en granjas orgánicas y aprendizaje de permacultura.',
        year2: 'Primeras cenas clandestinas en la naturaleza para comensales exclusivos.',
        year3: 'Construcción del espacio gastronómico ecológico.',
        year4: 'Reconocimiento en guías turísticas de sostenibilidad internacional.',
        year5: 'Destino gastronómico de referencia mundial por su respeto a la tierra.',
        sparkToRescue: 'El respeto por los ingredientes puros y la conexión con el productor local deben inspirar su cocina diaria.'
      },
      coherence: { resources: 80, like: 98, confidence: 85, coherence: 95 }
    },
    rapidPrototype: {
      interviewTitle: 'Conversación de Diseño (15 min) con Chef Propietario o Jefe de Cocina',
      suggestedRole: 'Cocinero en activo que trabaje en restaurante con servicio a la carta',
      questions: [
        '¿Cómo son tus pies y tu espalda tras un turno de viernes por la noche?',
        '¿Cuánto dinero se pierde realmente por no saber costear una receta?',
        '¿Qué diferencia a los cocineros que se estancan de los que llegan a Chef Ejecutivo?'
      ],
      microExperience: 'Preparar una cena completa de 3 tiempos para 4 familiares calculando el costo exacto por platillo y el tiempo de servicio (4 horas).'
    },
    familyKit: {
      commonParentFear: 'Que "solo vas a estar de cocinero parado todo el día oliendo a grasa y mal pagado".',
      empathicValidation: 'Papá, mamá: sé que les preocupa el esfuerzo físico de la cocina y quieren que tenga un trabajo descansado y bien pagado.',
      dataDefense: 'El cocinero que solo sigue órdenes gana poco, pero el Licenciado en Gastronomía que sabe costos, administración y crea experiencias dirige negocios rentables y hoteles internacionales.',
      agreementCommitment: 'Acordemos los 30 días: les presentaré el plan bimodal y hablaré con un chef profesional para mostrarles la visión empresarial.'
    }
  },
  {
    id: 'veterinaria',
    name: 'Medicina Veterinaria y Zootecnia',
    aliases: ['veterinaria', 'veterinario', 'medicina veterinaria', 'zootecnia', 'animales', 'fauna'],
    category: 'Ciencias de la Salud Animal',
    disruptionScore: 52,
    disruptionLevel: 'Diagnóstico por IA y Salud Preventiva',
    summary2030: 'El diagnóstico por imagen y la formulación nutricional animal se apoyarán en IA. El médico veterinario 2030 será el cirujano experto, mediador de la relación humano-animal y guardián de la salud pública (One Health).',
    emergentRole2030: 'Médico Veterinario Especialista en Cirugía Avanzada y Salud Global',
    automatedTasks: [
      'Lectura preliminar de radiografías y ecografías veterinarias por visión artificial.',
      'Cálculo de dietas balanceadas para ganado y mascotas según especie y peso.',
      'Recordatorios automáticos de vacunación y desparasitación.',
      'Monitoreo satelital y sensores en orejeras de ganado para detección de celo o fiebre.'
    ],
    humanSuperpowers: [
      'Manejo etológico compasivo: calmar animales heridos o agresivos sin lastimarlos.',
      'Destreza quirúrgica veterinaria en tejidos blandos y traumatología.',
      'Contención emocional al tutor de la mascota en momentos de eutanasia o diagnóstico terminal.',
      'Criterio epidemiológico en prevención de zoonosis (enfermedades transmitidas al ser humano).'
    ],
    obsoleteSubjects: [
      'Formulación manual de raciones alimenticias en calculadora básica sin software zootécnico.',
      'Memorización de guías farmacológicas que cambian constantemente.',
      'Técnicas de sujeción física ruda en desuso frente al manejo respetuoso libre de miedo (Fear Free).'
    ],
    curriculumBlindSpots: [
      'Manejo libre de estrés (Fear Free Certified) y etología clínica moderna.',
      'Ecografía veterinaria avanzada y telemedicina para animales de compañía.',
      'Gestión hospitalaria veterinaria y comunicación asertiva con tutores angustiados.'
    ],
    bimodalPath: {
      via1: 'Licenciatura en Medicina Veterinaria y Zootecnia (5 años)',
      via2: 'Microcredenciales en Imagenología Veterinaria y Gestión de Clínicas (3 a 6 meses)',
      platforms: ['Coursera / Vetfolio / Fear Free Pets'],
      earlyIncome: 'Asistente técnico en clínicas veterinarias, estética canina profesional o cuidado especializado de mascotas exóticas desde el 2.° año.'
    },
    odysseyPlans: {
      plan1: {
        title: 'Ruta Principal: El Médico Veterinario Clínico y Cirujano',
        description: 'Formación universitaria tradicional con miras a hospital veterinario de pequeñas especies.',
        year1: 'Anatomía animal comparada, fisiología e histología.',
        year2: 'Patología, farmacología y primeros manejos con animales en rancho o perrera.',
        year3: 'Medicina interna, técnicas quirúrgicas y rotaciones clínicas.',
        year4: 'Internado en hospital veterinario y servicio social.',
        year5: 'Médico veterinario titulado en clínica consolidada o apertura de consultorio.'
      },
      plan2: {
        title: 'Ruta Bimodal: Veterinario Zootecnista y Consultor en Producción Sostenible',
        description: 'Veterinaria combinada con analítica de datos pecuarios y bienestar animal.',
        year1: 'Tronco veterinario + curso en tecnología ganadera y sensores IoT.',
        year2: 'Prácticas en ranchos lecheros o granjas avícolas modernas.',
        year3: 'Consultoría junior en optimización de salud de hatos ganaderos.',
        year4: 'Desarrollo de protocolos de bienestar animal para empresas agropecuarias.',
        year5: 'Director técnico de salud animal en empresa pecuaria regional.'
      },
      plan3: {
        title: 'Ruta Salvaje / Radical: Fundador de un Santuario de Rescate y Rehabilitación de Fauna',
        description: 'Sin límites: rescatar animales maltratados o silvestres y devolverlos a su hábitat natural.',
        year1: 'Voluntariado en reservas de vida silvestre.',
        year2: 'Capacitación en medicina de fauna silvestre en zoológicos o centros de conservación.',
        year3: 'Construcción del primer módulo de rescate financiado por donaciones.',
        year4: 'Rehabilitación y liberación de especies en peligro.',
        year5: 'Liderar un santuario reconocido con programas de educación para miles de niños.',
        sparkToRescue: 'El amor genuino por los seres vivos debe ser el escudo contra el agotamiento clínico cotidiano.'
      },
      coherence: { resources: 80, like: 99, confidence: 85, coherence: 98 }
    },
    rapidPrototype: {
      interviewTitle: 'Conversación de Diseño (15 min) con Médico Veterinario de Clínica',
      suggestedRole: 'Veterinario en ejercicio en clínica de pequeñas o grandes especies',
      questions: [
        '¿Qué porcentaje de tu trabajo es tratar con el animal vs lidiar con el dueño enojado o llorando?',
        '¿Cómo enfrentas emocionalmente la eutanasia cuando no hay más que hacer?',
        '¿Es rentable abrir una clínica veterinaria propia o se requiere demasiado equipo caro?'
      ],
      microExperience: 'Hacer voluntariado de 4 horas en una clínica veterinaria o albergue para observar la rutina real de curaciones y limpieza.'
    },
    familyKit: {
      commonParentFear: 'Que "solo vas a bañar perros o terminar en ranchos oliendo feo y arriesgándote a mordeduras".',
      empathicValidation: 'Papá, mamá: sé que les da miedo que me muerda un animal o que piensen que la veterinaria no es una carrera médica de verdad. Les agradezco que me cuiden.',
      dataDefense: 'La medicina veterinaria hoy tiene el mismo nivel de especialidad que la humana: oncología, traumatología y odontología animal. Las familias gastan sumas importantes en sus mascotas y las clínicas modernas son empresas muy rentables.',
      agreementCommitment: 'Les pido 30 días de tregua: entrevistaré a un veterinario y revisaremos los costos reales de consulta para que tengan total tranquilidad.'
    }
  },
  {
    id: 'software',
    name: 'Ingeniería en Software y Ciencias de la Computación',
    aliases: ['software', 'computacion', 'computación', 'programacion', 'programación', 'sistemas', 'informatica', 'informática', 'codigo', 'código', 'desarrollo web'],
    category: 'Tecnología e Inteligencia Artificial',
    disruptionScore: 88,
    disruptionLevel: 'Transformación Radikal por Copilotos de Código',
    summary2030: 'La codificación mecánica, pruebas unitarias y resolución de sintaxis ya son ejecutadas por modelos de lenguaje en segundos. El ingeniero de software 2030 no pica código repetitivo: diseña arquitecturas resilientes, resuelve dolores de usuario y audita seguridad de IA.',
    emergentRole2030: 'Arquitecto de Sistemas Autónomos e Ingeniero de Confianza en IA',
    automatedTasks: [
      'Escritura de código CRUD (crear, leer, actualizar, borrar) y funciones estándar.',
      'Detección de errores de sintaxis y generación de tests unitarios automáticos.',
      'Conversión de código entre lenguajes antiguos y modernos.',
      'Maquetado básico de interfaces visuales a partir de capturas de pantalla o bocetos.'
    ],
    humanSuperpowers: [
      'Comprensión profunda del dolor del usuario: traducir necesidades humanas en lógica de software.',
      'Arquitectura de sistemas complejos, escalabilidad y tolerancia a fallos críticos.',
      'Criterio ético sobre sesgos algorítmicos, privacidad y explicabilidad de modelos.',
      'Liderazgo técnico, comunicación asertiva con clientes no técnicos y trabajo interdisciplinario.'
    ],
    obsoleteSubjects: [
      'Memorización rígida de sintaxis y palabras clave que los IDEs autocompletan hoy.',
      'Metodologías de desarrollo en cascada (Waterfall) de ciclos de 2 años sin iteración.',
      'Instalación manual de servidores locales físicos sin nociones de nube o contenedores.'
    ],
    curriculumBlindSpots: [
      'Ingeniería de contexto, RAG (Retrieval Augmented Generation) y orquestación de agentes IA.',
      'Ciberseguridad en modelos generativos y prevención de ataques de inyección de prompts.',
      'Diseño centrado en el usuario (UX/UI) integrado con ingeniería de producto.'
    ],
    bimodalPath: {
      via1: 'Ingeniería en Software / Computación (4 años en Universidad)',
      via2: 'Microcredenciales en Cloud Architecture (AWS/GCP), Ciberseguridad y LLMOps (3 a 6 meses)',
      platforms: ['Coursera / Google Cloud / GitHub Certification', 'Bootcamps de IA Aplicada'],
      earlyIncome: 'Desarrollo de integraciones de IA para pequeñas empresas, automatizaciones sin código (Zapier/Make) y desarrollo frontend freelance desde el 2.° año.'
    },
    odysseyPlans: {
      plan1: {
        title: 'Ruta Principal: El Arquitecto de Software Empresarial',
        description: 'Ingeniería universitaria enfocada en desarrollo en la nube y grandes plataformas.',
        year1: 'Fundamentos matemáticos, algoritmos y estructuras de datos con Python y C++.',
        year2: 'Arquitectura web moderna + primera certificación en la nube (AWS/Azure).',
        year3: 'Prácticas profesionales en empresa tecnológica + proyectos de código abierto.',
        year4: 'Diseño de proyecto integrador con agentes autónomos + titulación.',
        year5: 'Ingeniero de software pleno en empresa internacional con trabajo remoto.'
      },
      plan2: {
        title: 'Ruta Bimodal: Ingeniero de Inteligencia Artificial y Automatización de Negocios',
        description: 'Carrera universitaria acelerada con microcredenciales en desarrollo de agentes y automatizaciones.',
        year1: 'Tronco común universitario + microcredencial en Prompt Engineering y Python.',
        year2: 'Venta de automatizaciones de atención al cliente con IA a negocios locales.',
        year3: 'Independencia económica temprana con ingresos en dólares y portafolio en GitHub.',
        year4: 'Creación de su propia micro-agencia de software de automatización.',
        year5: 'Lanzamiento de producto SaaS (Software as a Service) con clientes recurrentes.'
      },
      plan3: {
        title: 'Ruta Salvaje / Radical: Desarrollador de Videojuegos Indie con Narrativa Ética',
        description: 'Crear un estudio independiente de videojuegos que explore la relación entre humanos y tecnología.',
        year1: 'Aprender Unreal Engine / Unity de forma autodidacta los fines de semana.',
        year2: 'Lanzar un primer minijuego experimental en itch.io.',
        year3: 'Campaña de financiamiento colectivo (Kickstarter) para demo jugable.',
        year4: 'Ganar reconocimiento en festivales de videojuegos independientes.',
        year5: 'Lanzamiento de juego galardonado en Steam y consolas.',
        sparkToRescue: 'La creatividad visual y el amor por la experiencia del jugador deben evitar que se convierta en un programador aburrido.'
      },
      coherence: { resources: 90, like: 95, confidence: 90, coherence: 92 }
    },
    rapidPrototype: {
      interviewTitle: 'Conversación de Diseño (15 min) con Desarrollador en Remoto',
      suggestedRole: 'Desarrollador con 2 a 4 años trabajando para empresa extranjera o nacional',
      questions: [
        '¿Cuánto tiempo de tu semana pasas escribiendo código nuevo vs revisando código de la IA o en reuniones de equipo?',
        '¿Qué pesa más al contratar a un junior hoy: el título universitario o los proyectos reales en GitHub?',
        '¿Qué herramienta de IA es indispensable en tu día a día que la universidad no enseña?'
      ],
      microExperience: 'Construir una página web interactiva o una pequeña app de tareas en Replit o V0 en menos de 2 horas este fin de semana.'
    },
    familyKit: {
      commonParentFear: 'Que sea solo pasar horas pegado a la pantalla jugando videojuegos y que la IA reemplace a los programadores.',
      empathicValidation: 'Papá, mamá: entiendo que para ustedes el mundo de la tecnología parezca abstracto o lleno de incertidumbre.',
      dataDefense: 'Les muestro datos de la OCDE y de Microsoft: la demanda de ingenieros que saben orquestar IA creció 300%. Los que pican código básico sufrirán, pero los que crean soluciones ganan sueldos globales.',
      agreementCommitment: 'Acordemos 30 días: construiré un proyecto funcional pequeño y hablaré con un programador para demostrarles la seriedad del camino.'
    }
  },
  {
    id: 'psicologia',
    name: 'Psicología y Salud Mental',
    aliases: ['psicologia', 'psicología', 'psicologo', 'psicólogo', 'terapia', 'salud mental', 'psicoterapeuta'],
    category: 'Ciencias de la Conducta',
    disruptionScore: 45,
    disruptionLevel: 'Baja Sustitución / Alta Demanda Humana',
    summary2030: 'La psicometría estática y las transcripciones de sesiones serán automatizadas. Sin embargo, la psicología es uno de los campos con mayor blindaje humano: la presencia terapéutica viva, la alianza afectiva y la intervención en crisis son insustituibles.',
    emergentRole2030: 'Psicólogo Clínico Integrativo y Diseñador de Bienestar Digital',
    automatedTasks: [
      'Calificación y tabulación estadística de pruebas psicométricas cerradas.',
      'Transcripción y generación de resúmenes estructurados de sesiones clínicas.',
      'Recordatorios automáticos y seguimiento de hábitos en aplicaciones móviles de autocuidado.',
      'Búsqueda bibliográfica de literatura basada en evidencia para diagnósticos específicos.'
    ],
    humanSuperpowers: [
      'Sostén afectivo y resonancia emocional: el poder sanador de sentirse escuchado por otro ser humano.',
      'Intervención en crisis suicida o trauma agudo donde el contacto visual y la presencia regulan el sistema nervioso.',
      'Desarticulación de lealtades familiares inconscientes y mediación de conflictos relacionales.',
      'Criterio ético sobre confidencialidad, límites profesionales y dignidad humana.'
    ],
    obsoleteSubjects: [
      'Calificación manual con plantillas perforadas de pruebas psicométricas de 1970.',
      'Teorías psicológicas desvinculadas de la neurociencia contemporánea.',
      'Redacción en papel carbón de expedientes psicopedagógicos escolares.'
    ],
    curriculumBlindSpots: [
      'Impacto neurobiológico de pantallas, algoritmos de recomendación y adicciones digitales.',
      'Diseño de vida (Life Design) y psicología vocacional no lineal para la era BANI.',
      'Terapia asistida por telepsicología segura y herramientas de biofeedback con wearables.'
    ],
    bimodalPath: {
      via1: 'Licenciatura en Psicología (4 a 5 años en Universidad)',
      via2: 'Microcredenciales en Salud Mental Digital, Terapia Cognitivo-Conductual y Life Design (3 a 6 meses)',
      platforms: ['Coursera / edX / Universidades con enfoque cognitivo', 'Certificaciones en Orientación con IA (OVDIA)'],
      earlyIncome: 'Tutorías de orientación para preparatorias, facilitación de talleres de regulación emocional o gestión de bienestar de equipos remotos.'
    },
    odysseyPlans: {
      plan1: {
        title: 'Ruta Principal: El Terapeuta Clínico y Docente Universitario',
        description: 'Licenciatura con especialidad en clínica infantil o de adolescentes.',
        year1: 'Bases biológicas de la conducta y corrientes psicológicas fundamentales.',
        year2: 'Psicología del desarrollo, neurociencias y psicodiagnóstico.',
        year3: 'Prácticas de campo en centros de salud y escuelas públicas.',
        year4: 'Práctica clínica supervisada (cámara de Gesell) y servicio social.',
        year5: 'Apertura de consultorio privado y docencia en bachillerato o universidad.'
      },
      plan2: {
        title: 'Ruta Bimodal: Psicólogo Organizacional y Consultor de Talento en la Era BANI',
        description: 'Psicología combinada con analítica de clima laboral, People Analytics y mediación.',
        year1: 'Tronco psicológico + certificación en People Analytics y liderazgo ágil.',
        year2: 'Gestión de dinámicas de integración en empresas locales o agencias de marketing.',
        year3: 'Consultor independiente de prevención de burnout en empresas de tecnología.',
        year4: 'Desarrollo de programas de bienestar para trabajadores remotos en América Latina.',
        year5: 'Director de Cultura y Talento (HRBP) en empresa transnacional.'
      },
      plan3: {
        title: 'Ruta Salvaje / Radical: Creador de un Movimiento Global de Resiliencia Juvenil',
        description: 'Escribir libros, crear un podcast de impacto masivo y fundar centros comunitarios de escucha para adolescentes en riesgo.',
        year1: 'Lanzar un podcast escolar sobre salud mental sin filtros.',
        year2: 'Escribir una guía práctica de supervivencia emocional para jóvenes.',
        year3: 'Giras de conferencias en escuelas de todo el país.',
        year4: 'Crear una red de mentoría de pares para prevenir el suicidio adolescente.',
        year5: 'Liderar una fundación con impacto en más de 100,000 jóvenes.',
        sparkToRescue: 'La calidez comunicativa y el deseo de conectar con las masas deben enriquecer su práctica clínica diaria.'
      },
      coherence: { resources: 85, like: 98, confidence: 90, coherence: 99 }
    },
    rapidPrototype: {
      interviewTitle: 'Conversación de Diseño (15 min) con Psicólogo Clínico u Orientador',
      suggestedRole: 'Psicólogo que trabaje en escuela técnica o consultorio privado',
      questions: [
        '¿Cómo te cuidas a ti mismo para no llevarte los problemas de tus pacientes a casa?',
        '¿Qué opinas de que la gente use chatbots de IA para desahogarse de sus problemas emocionales?',
        '¿Cuánto tiempo tardaste en tener suficientes pacientes para vivir cómodamente de tu consulta?'
      ],
      microExperience: 'Participar como voluntario en un taller de escucha o círculo de apoyo escolar para experimentar qué se siente sostener emocionalmente a un compañero.'
    },
    familyKit: {
      commonParentFear: 'Que los psicólogos ganan poco dinero o que solo atienden a personas con enfermedades mentales graves.',
      empathicValidation: 'Papá, mamá: sé que su preocupación nace de querer que yo tenga una profesión con ingresos estables y respeto social.',
      dataDefense: 'Hoy la salud mental es una crisis mundial silenciosa. Las empresas y escuelas pagan sueldos altos a psicólogos preparados en el entorno BANI que saben usar datos y prevenir el burnout.',
      agreementCommitment: 'Acordemos la tregua de 30 días: les presentaré cifras de empleabilidad en People Analytics y clínicas privadas para darles total tranquilidad.'
    }
  }
];

// Helper to look up a career or return a deeply synthesized, domain-aware profile
export function findCareerOrGenerate(careerQuery) {
  if (!careerQuery || typeof careerQuery !== 'string') {
    return CAREER_DATABASE[0];
  }
  
  const rawQuery = careerQuery.trim();
  const queryNormalized = rawQuery.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // strip accents for lookup
  
  // 1. Try exact or alias match across our canonical database
  const match = CAREER_DATABASE.find(c => {
    const idMatch = c.id.toLowerCase() === queryNormalized;
    const nameMatch = c.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(queryNormalized);
    const aliasMatch = c.aliases && c.aliases.some(alias => {
      const normAlias = alias.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return queryNormalized.includes(normAlias) || normAlias.includes(queryNormalized);
    });
    return idMatch || nameMatch || aliasMatch;
  });

  if (match) return match;

  // 2. Format a dignified, grammatically correct title for unlisted careers
  const formattedTitle = rawQuery.charAt(0).toUpperCase() + rawQuery.slice(1);
  const degreeType = queryNormalized.includes('ingenier') ? 'Ingeniería' : 'Licenciatura';

  // 3. Domain detection to provide specialized, non-generic deconstructions
  const isCreative = /arte|diseno|diseño|moda|cine|musica|animacion|dibujo|fotografia|danza|teatro/i.test(queryNormalized);
  const isHealth = /salud|enfermer|veterinar|terapia|nutrici|medicin|odontol|fisioterapi|biolog/i.test(queryNormalized);
  const isTech = /comput|software|robot|electr|mecan|datos|ia|sistemas|ciber/i.test(queryNormalized);

  let category = 'Campo Profesional al 2030';
  let emergentRole = `Especialista Estratégico en ${formattedTitle} y Liderazgo Humano-IA`;
  let autoTasks = [
    `Búsqueda bibliográfica, análisis estadístico y clasificación de expedientes en ${formattedTitle}.`,
    `Generación de reportes preliminares y minutas de trabajo mediante agentes de lenguaje.`,
    `Filtrado sistemático de solicitudes rutinarias y tabulación de métricas de proceso.`,
    `Monitoreo automatizado de calendarios, cotizaciones estándar y logística operativa.`
  ];
  let humanPowers = [
    `Criterio ético no estructurado y discernimiento moral en decisiones de alto impacto humano.`,
    `Empatía relacional cara a cara y lectura profunda del lenguaje corporal y emocional.`,
    `Negociación estratégica en escenarios de alta incertidumbre donde no existen algoritmos fijos.`,
    `Creatividad divergente y visión de autor para resolver dilemas inéditos del entorno BANI.`
  ];
  let obsoleteSubs = [
    `Memorización enciclopédica de datos y procedimientos mecánicos que hoy la tecnología procesa en segundos.`,
    `Elaboración manual de formatos impresos y trámites burocráticos ya digitalizados.`,
    `Prácticas operativas aisladas que no fomentan el pensamiento crítico ni la colaboración en red.`
  ];
  let blindSpots = [
    `Uso ético y orquestación de herramientas de Inteligencia Artificial Generativa aplicada al área.`,
    `Estrategia Bimodal: sincronización de la teoría con microcredenciales ágiles de empleabilidad temprana.`,
    `Habilidades de comunicación asertiva, Life Design y mediación de conflictos en equipos híbridos.`
  ];

  if (isCreative) {
    category = 'Artes, Creatividad y Diseño';
    emergentRole = `Director(a) Creativo(a) en ${formattedTitle} y Narrativa Visual con IA`;
    autoTasks = [
      `Generación de maquetas iniciales, texturas y variaciones cromáticas con modelos de difusión visual.`,
      `Redimensionamiento y optimización de activos gráficos para múltiples plataformas digitales.`,
      `Predicción de tendencias de consumo visual mediante analítica de redes sociales.`,
      `Búsqueda automatizada de referencias visuales y generación de paletas estandarizadas.`
    ];
    humanPowers = [
      `Curaduría estética y visión de autor: infundir significado humano, emoción y alma a cada creación.`,
      `Empatía con el usuario o espectador: comprender los anhelos culturales y la vulnerabilidad humana.`,
      `Dirección artística interdisciplinaria y liderazgo de proyectos creativos complejos.`,
      `Sensibilidad sensorial y conexión física con los materiales reales y el contexto cultural.`
    ];
    obsoleteSubs = [
      `Técnicas de bocetaje mecánico repetitivo sin vinculación al software digital contemporáneo.`,
      `Memorización de comandos de software tradicionales superados por herramientas generativas.`,
      `Prácticas de diseño decorativo superficial desconectadas del impacto en el usuario real.`
    ];
    blindSpots = [
      `Modelado y renderizado 3D paramétrico e interactivo para entornos virtuales y realidad mixta.`,
      `Gestión de derechos de autor, propiedad intelectual y ética en contenido generado por IA.`,
      `Monetización digital directa, portafolio internacional y gestión de micro-marcas independientes.`
    ];
  } else if (isHealth) {
    category = 'Ciencias de la Salud y Cuidado';
    emergentRole = `Especialista en ${formattedTitle} y Salud Preventiva Asistida por Tecnología`;
    autoTasks = [
      `Triaje preliminar y cálculo automatizado de dosis o planes según peso e historial clínico.`,
      `Transcripción y síntesis de notas de evolución médica mediante reconocimiento de voz.`,
      `Monitoreo de parámetros fisiológicos con sensores biométricos y alertas preventivas.`,
      `Búsqueda de interacciones clínicas en bases de datos farmacológicas internacionales.`
    ];
    humanPowers = [
      `Compasión somática y presencia terapéutica: sostener al paciente o familia en momentos de dolor.`,
      `Juicio bioético contextualizado frente a dilemas de vida o tratamientos no convencionales.`,
      `Intuición clínica integral que conecta factores emocionales, nutricionales y familiares.`,
      `Destreza manual fina y toma de decisiones en vivo durante emergencias críticas.`
    ];
    obsoleteSubs = [
      `Llenado manual en papel de expedientes clínicos y recetas sin interoperabilidad digital.`,
      `Memorización de tablas nutricionales o farmacológicas fijas que cambian continuamente.`,
      `Técnicas de diagnóstico exclusivamente sintomáticas sin visión holística preventiva.`
    ];
    blindSpots = [
      `Telemedicina avanzada, monitoreo remoto con dispositivos wearables y expediente digital seguro.`,
      `Salud personalizada basada en biomarcadores y medicina del estilo de vida.`,
      `Habilidades de contención emocional en crisis y prevención del burnout del personal de salud.`
    ];
  }

  return {
    id: 'personalizada',
    name: formattedTitle,
    category: category,
    disruptionScore: 68,
    disruptionLevel: 'Transformación Híbrida al 2030',
    summary2030: `El campo de ${formattedTitle} experimentará una acelerada automatización del 70% de sus tareas repetitivas hacia el 2030. Su valor radicará en la orquestación ética, la empatía humana y la resolución de problemas complejos.`,
    emergentRole2030: emergentRole,
    automatedTasks: autoTasks,
    humanSuperpowers: humanPowers,
    obsoleteSubjects: obsoleteSubs,
    curriculumBlindSpots: blindSpots,
    bimodalPath: {
      via1: `${degreeType} en ${formattedTitle} (4 a 5 años en Universidad)`,
      via2: `Microcredenciales técnicas en herramientas digitales, analítica y gestión con IA (3 a 6 meses)`,
      platforms: ['Coursera / Google / edX', 'Plataformas de certificación especializada'],
      earlyIncome: `Servicios profesionales independientes, consultoría junior y proyectos freelance desde el 2.° año de formación.`
    },
    odysseyPlans: {
      plan1: {
        title: `Ruta Principal: El Profesional Titulado en ${formattedTitle}`,
        description: `Carrera universitaria tradicional con sólida base científica, técnica y ética.`,
        year1: `Fundamentos teóricos, bases epistemológicas y materias de tronco común.`,
        year2: `Materias troncales de especialidad y primeras prácticas de laboratorio o campo.`,
        year3: `Prácticas profesionales intermedias y vinculación con proyectos reales.`,
        year4: 'Servicio social, desarrollo de proyecto integrador o tesis de titulación.',
        year5: `Ingreso al mercado laboral formal en puestos de responsabilidad operativa o estratégica.`
      },
      plan2: {
        title: `Ruta Bimodal: El Perfil Híbrido en ${formattedTitle} + Habilidades Digitales`,
        description: `Carrera universitaria fortalecida con certificaciones cortas de alta demanda tecnológica.`,
        year1: 'Tronco común universitario + primera certificación técnica de 3 meses.',
        year2: 'Generación de ingresos tempranos mediante servicios freelance o asesorías.',
        year3: 'Consolidación de portafolio profesional en proyectos reales con clientes.',
        year4: 'Titulador con ventaja competitiva frente a egresados convencionales.',
        year5: `Especialista cotizado con doble perfil: visión de fondo + agilidad técnica.`
      },
      plan3: {
        title: `Ruta Salvaje / Radical: Emprendimiento Vocacional Audaz en ${formattedTitle}`,
        description: `¿Qué harías si el dinero y el juicio social no importaran? Un proyecto de impacto libre.`,
        year1: 'Exploración sin límites de las ramas más innovadoras y disruptivas del área.',
        year2: 'Creación de un prototipo experimental o comunidad digital de nicho.',
        year3: 'Alianzas con pares creativos y búsqueda de financiamiento alternativo.',
        year4: 'Lanzamiento de un proyecto propio con impacto social o ambiental tangible.',
        year5: 'Liderar una iniciativa pionera que redefine cómo se ejerce esta disciplina.',
        sparkToRescue: 'La audacia, el entusiasmo y la libertad creativa deben inyectarse al Plan 1 para evitar la rutina burocrática.'
      },
      coherence: { resources: 85, like: 90, confidence: 85, coherence: 90 }
    },
    rapidPrototype: {
      interviewTitle: `Conversación de Diseño (15 min) con Especialista en ${formattedTitle}`,
      suggestedRole: `Profesionista activo en el área de ${formattedTitle}`,
      questions: [
        '¿Cómo es tu martes promedio entre las 9:00 y las 14:00 horas?',
        '¿Qué habilidades aprendiste por tu cuenta que la universidad nunca te enseñó?',
        'Si tuvieras 18 años hoy con el avance de la IA, ¿qué harías diferente?'
      ],
      microExperience: `Investigar durante 3 horas un caso de éxito real en ${formattedTitle} y redactar 3 aprendizajes prácticos aplicables.`
    },
    familyKit: {
      commonParentFear: 'Que sea una opción con poca demanda laboral o con riesgo de precariedad.',
      empathicValidation: 'Papá, mamá: sé que su mayor anhelo es que yo tenga estabilidad y bienestar, y les agradezco que se preocupen.',
      dataDefense: `He investigado con el método OVDIA que el factor de éxito no es solo el título, sino la combinación con habilidades técnicas y superpoderes humanos insustituibles.`,
      agreementCommitment: 'Les pido una tregua de 30 días para realizar dos entrevistas informativas y mostrarles los datos reales de mercado.'
    }
  };
}
