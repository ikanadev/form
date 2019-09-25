export default ({
  ins1: { title: 'Nombre y apellidos:' },
  ins2: { title: 'Correo electrónico' },
  ins3: { title: 'Celular' },
  ins4: { title: 'Cargo que ocupa:' },
  ins5: { title: 'Antigüedad' },
  ins6: { title: 'Nombre de la institución:' },
  ins7: { title: 'Página Web:' },
  ins8: {
    title: 'Tipo de institución:',
    options: [
      'Estatal',
      'Privada',
      'ONG',
      'Otro:'
    ]
  },
  ins9: {
    title: 'Rubro de la institución',
    options: [
      'Banca',
      'Educación Regular',
      'Educación Superior',
      'Administración Pública',
      'Telecomunicaciones',
      'Desarrollo de Software',
      'Prensa',
      'Salud',
      'Transporte',
      'Turismo',
      'Exportación de Software',
      'Hotelería',
      'Agropecuaria',
      'Minería',
      'Gastronomía',
      'Construcción',
      'Comercio',
      'Automotores',
      'Publicidad',
      'Entretenimiento',
      'Comercio',
      'Servicios'
    ]
  },
  ins10: {
    title: 'Nro. de empleados en la institución',
    options: [
      'De 1 a 10',
      'De 11 a 20',
      'De 21 a 49',
      'De 50 en adelante'
    ]
  },
  ins11: {
    title: 'Alcance de la institución',
    options: [
      'Local',
      'Nacional',
      'Internacional'
    ]
  },
  ins12: { title: 'Nro. de empleados que trabajan en el área de informática y/o sistemas' },
  ins13a: { title: 'Operador de computadoras' },
  ins13b: { title: 'Transcriptor' },
  ins13c: { title: 'Programador' },
  ins13d: { title: 'Analista de sistemas' },
  ins13e: { title: 'Jefe de proyecto (Supervisor)' },
  ins13f: { title: 'Administrador de base de datos' },
  ins13g: { title: 'Administrador de redes' },
  ins13h: { title: 'Jefe de sistemas' },
  ins13i: { title: 'Jefe de IT' },
  ins13j: { title: 'Administrador de sistemas' },
  ins13k: { title: 'Otro(s) 1:' },
  ins13l: { title: 'Otro(s) 2:' },
  ins13m: { title: 'Otro(s) 3:' },
  ins14: {
    title: 'Forma en la que se accede a los cargos',
    options: [
      'Pasantía',
      'Beca Trabajo',
      'Convocatoría Pública',
      'Invitación'
    ]
  },
  ins15: {
    title: 'Si tuviera que solicitar personal a una univesidad y/o instituto ¿Cuál eligiría?'
  },
  ins15a: {
    title: 'Justifique:'
  },
  ins16: {
    title: 'Principales actividades que desarrolla el personal del área de Informática y sistemas en la institución',
    options: [
      'Análisis y diseño de sistemas',
      'Administración de bases de datos',
      'Diseño de páginas web',
      'Soporte técnico',
      'Transcripción de datos',
      'Administración de redes',
      'Seguridad de información',
      'Testing',
      'Capacitación',
      'Investigación'
    ]
  },
  ins17: {
    title: 'Sección III Pregunta 1',
    options: [
      'El perfil prefesional con el que llegan los profesionales del área es adecuado para la institución',
      'El perfil profesional que ofertan las universidades responde a las demandas del mercado laboral',
      'Los profesionales de las carreras de área de informática son altamente valorados en el mercado laboral'
    ]
  },
  ins18: {
    title: '¿Qué características debería tener un profesional para responder a las nececidades de su institución en el presente y en el futuro?'
  },
  ins19: {
    title: 'Sección IV Pregunta 1',
    options: [
      'Las asignaturas de los Planes de Estudios son adecuadas para la formación del profesional en Informatica',
      'Los contenidos de las asignaturas de los Planes de Estudios son actualizados y vigentes',
      'Las asignaturas de los planes de estudio de las universidades combinan adecuadamente la teoría con la práctica'
    ]
  },
  ins20: { title: '¿Qué debilidades tienen los Planes de estudio de las universidades?' },
  ins21: { title: '¿Qué fortalezas tienen los Planes de estudio de las universidades?' },
  ins22: { title: 'Mencione al menos 3 materias que considera deben incluirse en el Plan de Estudios de la carrera de Informática' },
  ins22a: { title: 'Justifique:' },
  ins23: { title: 'Mencione al menos 3 materias que considera ya no deberian ser parte del Plan de Estudios del área de la informatica' },
  ins23a: { title: 'Justifique:' },
  ins24: {
    title: 'Sección V Pregunta 1',
    options: [
      'Los títulos que existen en el área actualmente son coherente son con la demanda de la institución',
      'Los títulos que existen actualmente en el área son altamente valorados por la institución',
      'En la institución se demanda formación postgradual de los empleados'
    ]
  },
  ins25: { title: '¿Qué otros programas considera que se deben inplementar en el área de Informática?' },
  ins26: {
    title: 'A continuación se presentan algunas denominaciones. ¿Cuál(es)considera que son y serán requridas por el mercado laboral?',
    options: [
      'Licenciatura en Informática',
      'Ingeniería en Sistemas Informáticos',
      'Licenciatura en Ciencias de la Computación',
      'Ingeniería en Software',
      'Ingeniería Infomática',
      'Ingeniería en Sistemas',
      'Licenciatura en Informática Educativa',
      'Ingeniería en Redes y TIC',
      'Ingeniería en Redes y Telecomunicaciones',
      'Ingeniería en Informática Industrial',
      'Licenciatura en Seguridad de la Información'
    ]
  },
  ins27: {
    title: 'Lenguajes de programación que utiliza la institución',
    options: [
      'Java',
      'C',
      'C#',
      'PHP',
      'Phyton',
      'C++',
      'Visual Basic .NET',
      'JavaScript',
      'Kotlin',
      'Swift',
      'Go',
      'Ruby'
    ]
  },
  ins28: {
    title: 'Gestores de bases de datos que utiliza la institución',
    options: [
      'Oracle',
      'MySQL',
      'SQL Server',
      'Mongo DB',
      'PostgreSQL',
      'SQLite',
      'Access',
      'Maria DB',
      'Informix',
      'DB4O',
      'IBMdb2',
      'Redis'
    ]
  },
  ins29: {
    title: 'Metodologías de desarrollo de sistemas que utiliza la institución',
    options: [
      'Análisis y Diseño Orientado a Objetos',
      'Análisis y Diseño Orientado a Servicios',
      'Desarrollo Rápido de Aplicaciones',
      'Metodología XP'
    ]
  },
  ins30: {
    title: 'Sistemas Operativos que utiliza la institución',
    options: [
      'Microsoft Windows',
      'GNU/Linux',
      'OSX',
      'Android'
    ]
  },
  ins31: {
    title: 'Frameworks que utiliza la institución',
    options: [
      'Spring',
      'Vaadin',
      'Laravel',
      'Django',
      'Angular',
      'React',
      'Vue',
      'Flutter',
      'Hibernate',
      'CodeIgniter',
      'Ionic',
      'Express'
    ]
  },
  ins32: {
    title: '¿Cuáles son las competencias generales que busca la institución del profesional del área de la Informática?',
    options: [
      'Trabajar en un contexto multidisciplinario',
      'Trabajar en un contexto internacional',
      'Comportamiento etico en la profesión y la vida',
      'Capacidad de actualizarse permanentemente',
      'Capacida critica',
      'Capacidad de trabajo en equipo',
      'Capacidad reflexiva',
      'Capacidad creativa',
      'Conocimiento del idioma inglés',
      'Capacidad de emprender proyectos',
      'Capacidad de tomar decisiones',
      'Capacidad de adaptarse a nuevas situaciones',
      'Utilizar metodologías de investigación'
    ]
  },
  ins33: {
    title: '¿Cuáles son las competencias específicas que busca la institución del profecionaldel área de la informática?',
    options: [
      'Diseñar soluciones informáticas a pedido',
      'Aplicar metodologías de desarrollo',
      'Capacidad de diseñar, construir administrar redes',
      'Aplicar el enfoque sitémico para resolver problemas',
      'Documentar proyectos del área',
      'Capacidad de dirigir proyectos informáticos',
      'Capacidad de trabajo en entornos virtuales',
      'Comunicacion escrita en el ámbito académico',
      'Capacidad de proponer alternativas tecnologícas',
      'Capacidad de adaptarse a tecnologías futuras',
      'Capacidad de diseñar e implementar software educativo',
      'Capacidad de impartir docencia e investigar',
      'Capacidad de diseñar e implementar sistemas embebidos'
    ]
  },
  ins34: {
    title: '¿Cuáles son las áreas y tecnologías que tienen y tendrán mayor impacto en el mercado laboral en los siguientes años?',
    options: [
      'Desarrollo de software',
      'Desarrollo web',
      'Aplicaciones móviles',
      'Inteligencia artificial',
      'Robótica y autmomatización',
      'Pensamiento computacional',
      'TIC en educación',
      'Computación cuántica',
      'Bioinformática',
      'Simulación',
      'Seguridad de la información',
      'Data Science',
      'BlockChain',
      'Redes de información',
      'Big data',
      'Machine Learning',
      'Realidad aumentada y virtual',
      'Comunicación digital',
      'Internet de las cosas',
      'Visión artificial',
      'Videojuegos'
    ]
  },
  ins35: { title: 'Mencione alguna(s) sugerencias para mejorar el plan de estudio' },
  ins36: { title: 'Encuestador(es):' },
  ins37: { title: 'Fecha de encuesta:' }
})
