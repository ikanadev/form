export default ({
  // ASPECTOS GENERALES
  pro1: { title: 'Nombre y Ap.:' },
  pro2: { title: 'Celular:' },
  pro3: { title: 'Correo electrónico:' },
  pro4: { title: 'Título que obtuvo:' },
  pro5: { title: 'Gestión en que se tituló:' },
  pro6: { title: 'Mención y Especialidad' },
  pro7: { title: 'Género:', options: ['Mujer', 'Varon'] },
  pro8: {
    title: 'Estado civil:',
    options: ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a']
  },
  pro9: {
    title: 'Universidad donde se tituló',
    options: ['UMSA', 'UMSS', 'UGRM', 'USFXCH', 'UAJMS', 'UATF', 'UTO', 'UAB', 'UAP', 'UNSXX', 'UPEA', 'UCB', 'EMI', 'UASB', 'UNIPOL', 'Otro']
  },
  pro10: {
    title: 'Rango de edad:',
    options: ['Menos de 25', '26-35', '36-45', '46-55', 'Más de 55']
  },
  pro11: { title: 'Diplomado(s):' },
  pro12: { title: 'Especialidad(es):' },
  pro13: { title: 'Maestría(s):' },
  pro14: { title: 'Doctorado(s):' },
  pro15: { title: 'Otro(s):' },
  pro16: {
    title: 'Certificaciones con las que cuenta:',
    options: ['ORACLE', 'ISACA', 'SCRUM', 'COBIT', 'SAP', 'CISCO', 'AGILE', 'PMP', 'ITIL', 'Otro(s):']
  },
  pro17: { title: 'Mencione al menos 3 cursos que realizó como formación complementaria:' },
  // SITUACIÓN LABORAL
  pro18: {
    title: 'Actualmente trabaja:',
    options: ['A tiempo completo', 'A medio tiempo', 'De forma eventual', 'En emprendimiento propio', 'Como freelance', 'Otro:']
  },
  pro19: { title: 'Nombre de la institución:' },
  pro20: { title: 'Año de ingreso a la institución:' },
  pro21: { title: 'Prestaciones laborales:', options: ['Seguro de salud', 'Aportes para la jubilación', 'Otros:'] },
  pro22: { title: 'Relación de su trabajo con la carrera:', options: ['Muy relacionado', 'Poco relacionado', 'No está relacionado'] },
  pro23: {
    title: 'Salario mensual en Bs.',
    options: ['Menos de 3000', '3001-6000', '6001-9000', '9001-12000', '12001-15000', '15001-18000', '18001-21000', '21001-24000', 'Más de 24000']
  },
  pro24: { title: 'Alcance de la institución:', options: ['Local', 'Nacional', 'Internacional'] },
  pro25: { title: 'Tipo de empleo:', options: ['Empleo de planta', 'Empleo eventual', 'Consultoría', 'Otros:'] },
  pro26: {
    title: 'Rubro o actividad de la institución',
    options: [
      'Banca',
      'Educación regular',
      'Educación superior',
      'Adminstración pública',
      'Telecomunicaciones',
      'Desarrollo de software',
      'Prensa',
      'Salud',
      'Transporte',
      'Turismo',
      'Exportación de software',
      'Hotelería',
      'Agropecuaria',
      'Minería',
      'Gastronomía',
      'Construcción',
      'Comercio',
      'Automotores',
      'Publicidad',
      'Entreterimiento',
      'Comercio',
      'Servicios',
      'Otro:'
    ]
  },
  pro27: {
    title: 'Cargo que ocupa',
    options: [
      'Operador de computadoras',
      'Transcriptor',
      'Programador',
      'Analista de sistemas',
      'Jefe de proyecto',
      'Administrador de base de datos',
      'Administrador de redes',
      'Jefe de sistemas',
      'Jefe de TI',
      'Administrador de sistemas',
      'Encargado de riesgo',
      'Otro:'
    ]
  },
  pro28: {
    title: 'Forma de ingreso a la institución',
    options: ['Independiente', 'Pasantía', 'Beca trabajo', 'Convocatoria pública', 'Invitación', 'Otro:']
  },
  pro29: { title: 'Tipo de institución', options: ['Estatal', 'Privada', 'ONG', 'Otro'] },
  pro30: { title: 'Actividades que desarrolla en su trabajo' },
  pro31: {
    title: 'Aspectos en su formación académica que son útiles en su desempeño laboral',
    options: [
      'Materias de servicio (Mat-Est-Fis)',
      'Materias de carrera (Prog-BD-Redes)',
      'Materias con laboratorios',
      'Prestigio de la universidad'
    ]
  },
  // PERFIL PROFESIONAL
  pro32: {
    title: 'Pregunta 1:',
    options: [
      'El perfil profesional con el que me formé es adecuado para desenvolverme en el mercado laboral',
      'El perfil profesional que oferta mi universidad base es aceptado en el mercado laboral',
      'Los profesionales de mi universidad son altamente valorados en el mercado laboral'
    ]
  },
  pro33: { title: '¿Qué características debe tener un profesional del área de la informática para responder a las necesidades del mercado laboral?' },
  // PLAN DE ESTUDIOS CONEL QUE SE FORMÓ
  pro34: {
    title: 'Pregunta 1:',
    options: [
      'Las asignaturas del plan de estudios fueron adecuadas apra mi formación profesional',
      'Los contenidos de las asignaturas del paln de estudios fueron actualizados y aún son vigentes',
      'Las asignaturas del plan de estudios se impartieron de manera didáctica',
      'La cantidad de adignaturas del plan de estudios fue adecuada para mi proceso de formación profesional',
      'La proporción de hotas teóricas y prácticas de las asignaturas fueron adecuadas para mi proceso de formación',
      'La estructura de materias (malla curricular) fue adecuada para mi formación profesional'
    ]
  },
  pro35: { title: '¿Qué debilidades tiene el plan de estudios con que se formó?' },
  pro36: { title: '¿Qué fortalezas tuvo el plan de estudios con que se formó?' },
  pro37: { title: 'Mencione al menos 3 materias que considera debe incluirse en el plan de estudios de la carrera' },
  pro38: { title: 'Mencione al menos 3 materias que considera ya NO deberían ser parte de los planes de estudio de la carrera' },
  // GRADOS TITULACIÓN Y MENCIONES
  pro39: {
    title: 'Pregunta 1:',
    options: [
      'El título que obtuve en mi formación profesional es coherente con la demanda del mercado laboral',
      'El título que obtuve en mi formación profesional es altamente valorado en el mercado laboral del área',
      'El mercado laboral actual demanda formación postgradual'
    ]
  },
  pro40: { title: '¿Qué otros programas y/o carreras considera se deben implementar en el área de Informática?' },
  pro41: { title: '¿Cuáles de las siguientes denominaciones considera que son y serán requeridas en el mercado laboral futuro?' },
  pro42: { title: 'La especialización en el área de Informática debería hacerse', options: ['En el postgrado', 'En el pregrado', 'Otro:'] },
  pro43: {
    title: '¿Con cúal de las siguientes modalidades se tituló?',
    options: ['Tesis de grado', 'Proyecto de grado', 'Por excelencia', 'Examen de grado', 'Trabajo dirigido', 'Otro:']
  },
  // ÁREAS DE CONOCIMIENTO
  pro44: { title: 'Lenguajes de programación que utiliza en el trabajo' },
  pro45: { title: 'Gestores de base de datos que utiliza en su trabajo' },
  pro46: { title: 'Metodologías de desarrollo de sistemas que utiliza en su trabajo' },
  pro47: { title: 'Sistemas operativos que utiliza en su trabajo' },
  pro48: { title: 'Frameworks que utiliza en si trabajo' },
  // COMPETENCIAS DEL PROFESIONAL EN EL ÁREA DE INFORMÁTICA Y SISTEMAS
  pro49: {
    title: '¿Cuáles son las competencias generales que se busca en el mercado laboral?',
    options: [
      'Trabajar en un cotexto multidisciplinario',
      'Trabajar en el contexto internacional',
      'Comportamiento ético en la profesión y la vida',
      'Capacidad de actualizarse permanentemente',
      'Capacidad crítica',
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
  pro50: {
    title: '¿Cuáles son las competencias específicas que se busca en el mercado laboral?',
    options: [
      'Diseñar soluciones informáticas a pedido',
      'Aplicar metodologías de desarrollo',
      'Capacidad de diseñar, contruir y administrar redes',
      'Aplicar el enfoque sistémico para resolver problemas',
      'Documentar proyectos del área',
      'Capacidad de dirigir proyectos informáticos',
      'Capacidad de trabajo en entornos virtuales',
      'Comunicación escrita en el ámbito académico',
      'Capacidad de proponer alternativas tecnológicas',
      'Capacidad de adaptarse a tecnologías futuras',
      'Capacidad de diseñar e implementar software educativo',
      'Capacidad de impartir docencia e investigar',
      'Capacidad de diseñar e implementar sistemas embebidos'
    ]
  },
  pro51: { title: '¿Cuáles son las áreas y tecnologías que tienen y tendrán mayor impacto en los siguientes años?' },
  // ASPIRACIONES FUTURAS
  pro52: { title: 'En los siguientes 5 años te gustaría trabajar en:' },
  pro53: { title: '¿Qué estudios de postgrado te interesaría seguir en los siguientes años? (Diplomado)' },
  pro54: { title: '¿Qué estudios de postgrado te interesaría seguir en los siguientes años? (Maestría)' },
  pro55: { title: '¿Qué estudios de postgrado te interesaría seguir en los siguientes años? (Doctorado)' },
  pro56: { title: '¿Qué estudios de postgrado te interesaría seguir en los siguientes años? (Otros)' },
  pro57: { title: 'Mencione algunas sugerencias para mejorar el plan de estudios de la carrera de Informática:' }
})
