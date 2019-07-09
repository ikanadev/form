export default ({
  // ASPECTOR GENERALES
  doc1: { title: 'C.I.:' },
  doc2: { title: 'Nombre completo:' },
  doc3: { title: 'Celular:' },
  doc4: { title: 'Correo electrónico:' },
  doc5: { title: 'Género:', options: ['Mujer', 'Varón'] },
  doc6: {
    title: 'Residencia Actual:',
    options: ['La Paz (Centro)', 'La Paz (Zona Norte)', 'La Paz (Zona Sur)', 'El Alto', 'Viacha', 'Otro']
  },
  doc7: {
    title: 'Universidad donde estudió:',
    options: ['UMSA', 'UMSS', 'UGRM', 'USFXCH', 'UAJMS', 'UATF', 'UTO', 'UAB', 'UAP', 'UNSXX', 'UPEA', 'UCB', 'EMI', 'UASB', 'UNIPOL', 'Otro']
  },
  doc8: { title: 'Procedencia:', options: ['Nacional', 'Extrangero'] },
  doc9: { title: 'Profesión(es):' },
  doc10: { title: 'Formación Postgradual (Especialidad):' },
  doc11: { title: 'Fomarción Postgradual (Maestría):' },
  doc12: { title: 'Formación Postgradual (Doctorado):' },
  doc13: { title: 'Formación Postgradual (Otros):' },
  doc14: { title: 'Revistal locales y nacionales (Especifique):', title2: 'Título del artículo:' },
  doc15: { title: 'Revistar indexadas (Especifique):', title2: 'Título del artículo:' },
  // VINCULACIÓN CON LA CARRERA
  doc16: {
    title: 'Categoría docente:',
    options: ['Invitado', 'Interino', 'Contratado', 'Titular A', 'Titular B', 'Titular C', 'Emérito']
  },
  doc17: { title: 'Área(s) en que se desempeña actualmente:' },
  // PERFIL PROFESIONAL
  doc18: { title: 'El licenciado en Informática al concluir la curricula será capaz de:' },
  doc19: { title: 'Pregunta 2:' },
  doc20: { title: '¿Qué se debe mejorar del perfil profesional actual?' },
  // PLAN DE ESTUDIOS ACTUAL
  doc21: { title: 'Pregunta 1:' },
  doc22: { title: '¿Qué debilidades tiene el plan de estudios actual?' },
  doc23: { title: '¿Qué fortalezas tiene el plan de estudios acual?' },
  doc24: { title: 'Mencione al menos 3 materias que considera le hacen falta a la Mención Ingeniería de Sistemas Informáticos:' },
  doc25: { title: 'Mencione al menos 3 materias que considera le hacen falta a la Mención Ciencias de la Computación:' },
  doc26: { title: 'Mencione al menos 3 materias que NO deberían estar en la Mención Ingeniería de Sistemas Informáticos:' },
  doc27: { title: 'Mencione al menos 3 materias que NO deberían estar en la Mención Ciencias de la Computación:' },
  // INFRAESTRUCTURA (AULAS, LABORATORIOS, BIBLIOTECAS, SERVICIOS)
  doc28: { title: 'Pregunta 1:' },
  doc29: { title: '¿Desde su vivenciaa qué sugiere mejorar de la infraestructura actual de la carrera?' },
  // GRADOS TITULACIÓN Y MENCIONES
  doc30: { title: 'Licenciado en Informática:' },
  doc31: { title: '¿Qué otros programas le hacen falta al área de la Informática?' },
  doc32: { title: '¿Con cúales denominaciones de las carreras o programas del área está de acuerdo?' },
  doc33: { title: 'La especialización en el área de Informática debería hacerse:', options: ['En el postgrado', 'En el pregrado', 'Otro'] },
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
  doc42: { title: '¿Cuáles considera que son las competencias generales que debe tener el profesional del área de la Informática?' },
  doc43: { title: '¿Cuáles considera que son las competencias específicas que debe tener el profesional del área de la Informática?' },
  doc44: { title: 'Línea de Investigación:' },
  // SUGERENCIAS
  doc45: { title: 'Mecione algunas sugerencias para desarrollar en el Proyecto de Rediseño y Diseño curricular en la Carrera.' }
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
