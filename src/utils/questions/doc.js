export default ({
  // ASPECTOR GENERALES
  doc1: { title: 'C.I.:' },
  doc2: { title: 'Nombre completo:' },
  doc3: { title: 'Celular:' },
  doc4: { title: 'Correo electrónico:' },
  doc5: {
    title: 'Género:',
    options: ['Mujer', 'Varón']
  },
  doc6: {
    title: 'Residencia Actual:',
    options: ['La Paz (Centro)', 'La Paz (Zona Norte)', 'La Paz (Zona Sur)', 'El Alto', 'Viacha', 'Otro']
  },
  doc7: {
    title: 'Universidad donde estudió:',
    options: ['UMSA', 'UMSS', 'UGRM', 'USFXCH', 'UAJMS', 'UATF', 'UTO', 'UAB', 'UAP', 'UNSXX', 'UPEA', 'UCB', 'EMI', 'UASB', 'UNIPOL', 'Otro']
  },
  doc8: {
    title: 'Procedencia:',
    options: ['Nacional', 'Extrangero']
  },
  doc9: { title: 'Profesión(es):' },
  doc10: { title: 'Formación Postgradual (Especialidad):' },
  doc11: { title: 'Fomarción Postgradual (Maestría):' },
  doc12: { title: 'Formación Postgradual (Doctorado):' },
  doc13: { title: 'Formación Postgradual (Otros):' },
  doc14a: { title: 'Revista locale y/o nacionale (Especifique):', title2: 'Título del artículo:' },
  doc14b: { title: 'Revista locale y/o nacionale (Especifique):', title2: 'Título del artículo:' },
  doc14c: { title: 'Revista indexada (Especifique):', title2: 'Título del artículo:' },
  doc14d: { title: 'Revista indexada (Especifique):', title2: 'Título del artículo:' },
  doc15: { title: 'Otros:' },
  // VINCULACIÓN CON LA CARRERA
  doc16: {
    title: 'Categoría docente:',
    options: ['Invitado', 'Interino', 'Contratado', 'Titular A', 'Titular B', 'Titular C', 'Emérito']
  },
  doc17: { title: 'Área(s) en que se desempeña actualmente:' },
  // PERFIL PROFESIONAL
  doc18: {
    title: 'El licenciado en Informática al concluir la curricula será capaz de:',
    options: [
      'Generar conocimientos para modernizar los procesos de gestión y producción industrial',
      'Organizar y administrar sistemas informáticos',
      'Organizar el trabajo multidisciplinario',
      'Innover  tecnologías para el mercado',
      'Desarrollar y dirigir la investigación'
    ]
  },
  doc19: {
    title: 'Pregunta 2:',
    options: [
      'El perfil profesional en Informática es pertinente (adecuado/oportuno) con la realidad actual',
      'El perfil profesional en Informática expresa con claridad las competencias del futuro profesional'
    ]
  },
  doc20: { title: '¿Qué se debe mejorar del perfil profesional actual?' },
  // PLAN DE ESTUDIOS ACTUAL
  doc21: {
    title: 'Pregunta 1:',
    options: [
      'Las asignaturas del plan de estudios son adecuadas para formar al profesional en Informática',
      'El contenido de las asignaturas del plan de estudios que se ofrece a los estudiantes está actulizado',
      'Las asignaturas del plan de estudios se imparten de manera didáctica',
      'La cantidad de asignaturas del plan de estudios es adecuada para formar al profesional en informática',
      'La proporción de horas teóricas y prácticas de las asignaturas son adecuadas para el proceso de formación',
      'La estructura de materias es adecuada para la formación del profesional en Informática'
    ]
  },
  doc22: { title: '¿Qué debilidades tiene el plan de estudios actual?' },
  doc23: { title: '¿Qué fortalezas tiene el plan de estudios acual?' },
  doc24: { title: 'Mencione al menos 3 materias que considera le hacen falta a la Mención Ingeniería de Sistemas Informáticos:' },
  doc25: { title: 'Mencione al menos 3 materias que considera le hacen falta a la Mención Ciencias de la Computación:' },
  doc26: { title: 'Mencione al menos 3 materias que NO deberían estar en la Mención Ingeniería de Sistemas Informáticos:' },
  doc27: { title: 'Mencione al menos 3 materias que NO deberían estar en la Mención Ciencias de la Computación:' },
  // INFRAESTRUCTURA (AULAS, LABORATORIOS, BIBLIOTECAS, SERVICIOS)
  doc28: {
    title: 'Pregunta 1:',
    options: [
      'La cantidad de aulas es adecuada para atender las necesidades de estudiantes y docentes',
      'El equipamiento de las aulas es suficiente para atender las necesidades de los docentes y estudiantes',
      'La cantidad de laboratorios es adecuada para atender las necesidades de estudiantes y docentes',
      'El equipamineto de los laboratorios es suficientes para atender las necesidades de los docentes y estudiantes',
      'La biblioteca es adecuada para atender las necesidades de estudiantes y docentes',
      'El equipamiento de la biblioteca es soficiente para atender las necesidades de los docentes y estudiantes',
      'La infraestructura tecnológica es adecuada para atender las necesidades de estudiantes y docentes',
      'El servicio de Internet en la Carrera permite desarrollar las actividades académicas satisfactoriamente'
    ]
  },
  doc29: { title: '¿Desde su vivenciaa qué sugiere mejorar de la infraestructura actual de la carrera?' },
  // GRADOS TITULACIÓN Y MENCIONES
  doc30: {
    title: 'Licenciado en Informática:',
    options: [
      'El título de licenciado en Informática es coherente con la demanda del mercado actual',
      'La mención de Ingeniería en Sistemas Informáticos es coherente con la demanda del mercado actual',
      'La mención Ciencias de la Computación es coherente con la demanda del mercado actual'
    ]
  },
  doc31: { title: '¿Qué otros programas le hacen falta al área de la Informática?' },
  doc32: {
    title: '¿Con cúales denominaciones de las carreras o programas del área está de acuerdo?',
    options: [
      'Licenciatura en Informática',
      'Ingeniería en Sistemás Informáticos',
      'Licenciatura en Ciencias de la Computación',
      'Ingeniería de Software',
      'Ingeniería Informática',
      'Ingeniería en Sistemas',
      'Licenciatura en Informática Educativa',
      'Ingeniería en Redes y TIC',
      'Ingeniería en Redes y Telecomunicaciones',
      'Ingeniería en Informática industrial',
      'Licenciatura en seguridad de la información'
    ]
  },
  doc33: {
    title: 'La especialización en el área de Informática debería hacerse:',
    options: ['En el postgrado', 'En el pregrado', 'Otro']
  },
  doc34: {
    title: 'Modalidades de graduación adecuadas para la Carrera:',
    options: ['Tesis de grado', 'Proyectos de grado', 'Por excelencia', 'Examen de grado', 'Trabajo dirigido']
  },
  doc35: {
    title: '¿Aproximadamente cuántos trabajos de grado monitorea semestralmente?',
    options: ['Tesis de grado', 'Proyecto de grado', 'Total']
  },
  doc36: {
    title: '¿Aproximadamente cuánto demora el estudiate en realizar su trabajo de grado?',
    options: ['Dos semestres', 'Tres semestres', 'Cuatro semestres', 'Otro']
  },
  // ÁREAS DE CONOCIMIENTO
  doc37: { title: 'En cuanto a lenguages de programación:' },
  doc38: { title: 'En cuanto a gestores de base de datos:' },
  doc39: { title: 'En cuanto a metodologías de desarrollo de sistemas:' },
  doc40: { title: 'En cuanto a sistemas operativos:' },
  doc41: { title: 'En cuanto a frameworks:' },
  doc42: {
    title: '¿Cuáles considera que son las competencias generales que debe tener el profesional del área de la Informática?',
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
  doc43: {
    title: '¿Cuáles considera que son las competencias específicas que debe tener el profesional del área de la Informática?',
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
  doc44: { title: 'Línea de Investigación:' },
  // SUGERENCIAS
  doc45: { title: 'Mecione algunas sugerencias para desarrollar en el Proyecto de Rediseño y Diseño curricular en la Carrera.' },
  pro46: { title: 'Encuestador:' },
  pro47: { title: 'Fecha de encuesta:' }
})

/**
 * export default ({
  nro: { title: '' },
  doc1: { title: '' },
  doc2: { title: '' },
  doc3: { title: '' },
  doc4: { title: '' },
  doc5: { title: '' },
  doc6: { title: '' },
  doc7: { title: '' },
  doc8: { title: '' },
  doc9: { title: '' },
  doc10: { title: '' },
  doc11: { title: '' },
  doc12: { title: '' },
  doc13: { title: '' },
  doc14: { title: '' },
  doc15: { title: '' },
  doc16: { title: '' },
  doc17: { title: '' },
  doc18: { title: '' },
  doc19: { title: '' },
  doc20: { title: '' },
  doc21: { title: '' },
  doc22: { title: '' },
  doc23: { title: '' },
  doc24: { title: '' },
  doc25: { title: '' },
  doc26: { title: '' },
  doc27: { title: '' },
  doc28: { title: '' },
  doc29: { title: '' },
  doc30: { title: '' },
  doc31: { title: '' },
  doc32: { title: '' },
  doc33: { title: '' },
  doc34: { title: '' },
  doc35: { title: '' },
  doc36: { title: '' },
  doc37: { title: '' },
  doc38: { title: '' },
  doc39: { title: '' },
  doc40: { title: '' },
  doc41: { title: '' },
  doc42: { title: '' },
  doc43: { title: '' },
  doc44: { title: '' },
  doc45: { title: '' },
  doc46: { title: '' },
  doc47: { title: '' },
  doc48: { title: '' },
  doc49: { title: '' },
  doc50: { title: '' },
})
 */
