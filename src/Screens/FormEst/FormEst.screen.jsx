import React, { Fragment, useState, useRef } from 'react'
import axios from 'axios'
import { withSnackbar } from 'notistack'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'

import ActionButton from '../../Components/ActionButton/ActionButton'
import FieldSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import Option from '../../Components/Form/Option'
import CustomOption from '../../Components/Form/CustomOption'
import CustomInputs from '../../Components/Form/CustomInputs'
import Multiple from '../../Components/Form/Multiple'
import { endpoints } from '../../utils'

const FormEst = ({ enqueueSnackbar }) => {
  const firstRef = useRef(0)
  const [loading, setLoading] = useState(false)
  // I. ASPECTOS GENERALES
  const [est1, setEst1] = useState('')
  const [est2, setEst2] = useState('')
  const [est3, setEst3] = useState('')
  const [est4, setEst4] = useState('')
  const [est5, setEst5] = useState('1970-01-01')
  const [est6, setEst6] = useState('')
  const [est7, setEst7] = useState('')
  const [est8, setEst8] = useState('')
  const [est9, setEst9] = useState('')

  const [est10, setEst10] = useState('1')
  const [est11, setEst11] = useState('1')
  const [est12, setEst12] = useState('1')
  const [est13, setEst13] = useState('1')
  const [est14, setEst14] = useState('1')
  const [est15, setEst15] = useState('1')

  // II. VINCULACION CON LA CARRERA
  const [est16, setEst16] = useState('1')
  const [est17, setEst17] = useState('')
  const [est18, setEst18] = useState('')
  const [est19, setEst19] = useState('')
  const [est20, setEst20] = useState('')
  const [est21, setEst21] = useState('')

  // III. SITUACION LABORAL
  const [est22, setEst22] = useState('1')
  const [est23, setEst23] = useState('1')
  const [est24, setEst24] = useState('')
  const [est25, setEst25] = useState('1')
  const [est26, setEst26] = useState('1')
  const [est27, setEst27] = useState('1')
  const [est28, setEst28] = useState('1')
  const [est29, setEst29] = useState('1')
  const [est30, setEst30] = useState('1')
  const [est31, setEst31] = useState('')
  const [est32, setEst32] = useState('')

  // IV. PERFIL PROFESIONAL ACTUAL
  const [est33, setEst33] = useState('')
  const [est34, setEst34] = useState('')
  const [est35, setEst35] = useState('')

  // V. PLAN DE ESTUDIOS ACTUAL
  const [est36, setEst36] = useState('')
  const [est37, setEst37] = useState('')
  const [est38, setEst38] = useState('')
  const [est39, setEst39] = useState('')
  const [est40, setEst40] = useState('')
  const [est41, setEst41] = useState('')
  const [est42, setEst42] = useState('')

  // VI INFRAESTRUCTURA
  const [est43, setEst43] = useState('')
  const [est44, setEst44] = useState('')

  // VII GRADOS TITULACION Y MENCIONES
  const [est45, setEst45] = useState('')
  const [est46, setEst46] = useState('')
  const [est47, setEst47] = useState('')
  const [est48, setEst48] = useState('1')
  const [est49, setEst49] = useState('')

  // VIII AREAS DE CONOCIMIENTO
  const [est50, setEst50] = useState('')
  const [est51, setEst51] = useState('')
  const [est52, setEst52] = useState('')
  const [est53, setEst53] = useState('')
  const [est54, setEst54] = useState('')

  // IX COMPOETENCIAS DEL PROFESIONAL EN EL AREA
  const [est55, setEst55] = useState('')
  const [est56, setEst56] = useState('')
  const [est57, setEst57] = useState('')

  // X ASPIRACIONES FUTURAS
  const [est58, setEst58] = useState('1')
  const [est59, setEst59] = useState('')
  const [est60, setEst60] = useState('')
  const [est61, setEst61] = useState('')
  const [est62, setEst62] = useState('')
  const [est63, setEst63] = useState('')
  const [est64, setEst64] = useState('')
  const [est65, setEst65] = useState('')
  const [est66, setEst66] = useState('')

  // DATOS DE LA ENCUESTA
  const [est67, setEst67] = useState('')
  const [est68, setEst68] = useState('2019-05-01')

  const handleValue = setter => (e) => {
    const { value } = e.target
    // console.log(value)
    setter(value)
  }
  const handleFlatValue = setter => (value) => {
    setter(value)
  }

  const scrollToTop = () => window.scrollTo(0, firstRef.current.offsetTop)

  const onSubmit = () => {
    setLoading(true)
    const data = {
      est1,
      est2,
      est3,
      est4,
      est5,
      est6,
      est7,
      est8,
      est9,
      est10,
      est11,
      est12,
      est13,
      est14,
      est15,
      est16,
      est17,
      est18,
      est19,
      est20,
      est21,
      est22,
      est23,
      est24,
      est25,
      est26,
      est27,
      est28,
      est29,
      est30,
      est31,
      est32,
      est33,
      est34,
      est35,
      est36,
      est37,
      est38,
      est39,
      est40,
      est41,
      est42,
      est43,
      est44,
      est45,
      est46,
      est47,
      est48,
      est49,
      est50,
      est51,
      est52,
      est53,
      est54,
      est55,
      est56,
      est57,
      est58,
      est59,
      est60,
      est61,
      est62,
      est63,
      est64,
      est65,
      est66,
      est67,
      est68
    }
    const config = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    // everithing works fine, but need some refactor to manage tokens
    axios.post(endpoints.formEst, data, config)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario Enviado Correctamente.', { variant: 'success' })
        scrollToTop()
        setEst1('')
        setEst2('')
        setEst3('')
        setEst4('')
        setEst5('1970-01-01')
        setEst6('')
        setEst7('')
        setEst8('')
        setEst9('')
        setEst10('1')
        setEst11('1')
        setEst12('1')
        setEst13('1')
        setEst14('1')
        setEst15('1')
        setEst16('1')
        setEst17('')
        setEst18('')
        setEst19('')
        setEst20('')
        setEst21('')
        setEst22('1')
        setEst23('1')
        setEst24('')
        setEst25('1')
        setEst26('1')
        setEst27('1')
        setEst28('1')
        setEst29('1')
        setEst30('1')
        setEst31('')
        setEst32('')
        setEst33('')
        setEst34('')
        setEst35('')
        setEst36('')
        setEst37('')
        setEst38('')
        setEst39('')
        setEst40('')
        setEst41('')
        setEst42('')
        setEst43('')
        setEst44('')
        setEst45('')
        setEst46('')
        setEst47('')
        setEst48('1')
        setEst49('')
        setEst50('')
        setEst51('')
        setEst52('')
        setEst53('')
        setEst54('')
        setEst55('')
        setEst56('')
        setEst57('')
        setEst58('1')
        setEst59('')
        setEst60('')
        setEst61('')
        setEst62('')
        setEst63('')
        setEst64('')
        setEst65('')
        setEst66('')
        setEst67('')
        setEst68('2019-05-01')
      })
      .catch((e) => {
        setLoading(false)
        if (e.response && e.response.data.content) {
          enqueueSnackbar(e.response.data.content, { variant: 'error' })
          return
        }
        enqueueSnackbar(e.message, { variant: 'error' })
      })
  }
  return (
    <Fragment>
      <Typography color="primary" variant="h4">
        Cuestionario para Estudiantes
      </Typography>
      <FieldSet title="I. Aspectos Generales" innerRef={firstRef}>
        <Simple width={4} value={est1} text="C.I.:" onChange={handleValue(setEst1)} autoFocus />
        <Simple width={8} value={est2} text="Nombre Completo:" onChange={handleValue(setEst2)} />
        <Simple width={4} value={est3} text="Gestión que Ingresó:" type="number" onChange={handleValue(setEst3)} />
        <Simple width={4} value={est4} text="Semestre que Cursa:" onChange={handleValue(setEst4)} />
        <Simple width={4} value={est5} text="Fecha de Nacimiento:" type="date" onChange={handleValue(setEst5)} />
        <Simple width={4} value={est6} text="Lugar de Nacimiento:" onChange={handleValue(setEst6)} />
        <Simple width={4} value={est7} text="Teléfono:" type="number" onChange={handleValue(setEst7)} />
        <Simple width={4} value={est8} text="Celular/Whatsapp:" type="number" onChange={handleValue(setEst8)} />
        <Simple width={12} value={est9} text="Correo Electrónico:" onChange={handleValue(setEst9)} />

        <Option
          width={3}
          value={est10}
          onChange={handleValue(setEst10)}
          text="Género:"
          options={['Mujer', 'Varon']}
        />
        <Option
          width={3}
          value={est11}
          onChange={handleValue(setEst11)}
          text="Tipo Unidad Educativa:"
          options={['Fiscal', 'Particular', 'Convenio']}
        />
        <CustomOption
          width={3}
          value={est12}
          onChange={handleValue(setEst12)}
          text="Ubicación Unidad Educativa:"
          options={['La Paz', 'El Alto', 'Viacha', 'Otro']}
        />
        <CustomOption
          width={3}
          value={est13}
          onChange={handleValue(setEst13)}
          text="Lugar de Residencia:"
          options={[
            'La Paz - Centro',
            'La Paz - Zona Sur',
            'La Paz - Zona Norte',
            'El Alto',
            'Viacha',
            'Otro'
          ]}
        />
        <CustomOption
          width={6}
          value={est14}
          onChange={handleValue(setEst14)}
          text="Desde su Hogar Accede a Internet por:"
          options={[
            'Telefonía Móvil',
            'Fibra Óptica',
            'ASDL',
            'Otro'
          ]}
        />
        <Option
          width={3}
          value={est15}
          onChange={handleValue(setEst15)}
          text="Estado Civil:"
          options={['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a']}
        />
      </FieldSet>

      <FieldSet title="II. Vinculación con la Carrera">
        <Option
          width={6}
          value={est16}
          onChange={handleValue(setEst16)}
          text="Modalidad de Ingreso:"
          options={[
            'Curso Prefacultativo',
            'Examen de Dispensación',
            'Admisión Directa',
            'Traspaso',
            'Carrera Paralela'
          ]}
        />
        <CustomInputs
          width={6}
          upTo={0}
          onChange={handleFlatValue(setEst17)}
          text="Motivos por que eligió la carrera"
        />
        <CustomInputs
          width={6}
          upTo={8}
          onChange={handleFlatValue(setEst18)}
          text="Área de preferencia en la Carrera:"
        />
        <CustomInputs
          width={6}
          upTo={4}
          onChange={handleFlatValue(setEst19)}
          text="Razones por las que Abandonó Materias:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          onChange={handleFlatValue(setEst20)}
          text="Materias que prefiere cursar en verano y/o invierno"
        />
        <CustomInputs
          width={6}
          upTo={4}
          onChange={handleFlatValue(setEst21)}
          text="Razones por las que Abandonó la Carrera:"
        />
      </FieldSet>

      <FieldSet title="III. Situación Laboral">
        <CustomOption
          width={6}
          text="Actualmente"
          value={est22}
          onChange={handleValue(setEst22)}
          options={[
            'Trabajo a tiempo completo',
            'Trabajo a medio tiempo',
            'Trabajo de forma eventual',
            'Trabajo en un emprendimiento propio',
            'No trabajo',
            'Otro'
          ]}
        />
        <Option
          width={6}
          text="Relación de su trabajo con la Carrera"
          value={est23}
          onChange={handleValue(setEst23)}
          options={[
            'Mi trabajo está muy relacionado con la Carrera',
            'Mi trabajo tienen poca relación con la Carrera',
            'Mi trabajo no está relacionado con la Carrera'
          ]}
        />
        <CustomInputs
          width={4}
          upTo={3}
          onChange={handleFlatValue(setEst24)}
          text="Razones por las que trabaja:"
        />
        <CustomOption
          width={4}
          text="Tipo de empleo"
          value={est25}
          onChange={handleValue(setEst25)}
          options={[
            'Empleo de planta',
            'Empleo Eventual',
            'Empleo por consultoría',
            'Otro'
          ]}
        />
        <Option
          width={4}
          text="Alcance de la institución"
          value={est26}
          onChange={handleValue(setEst26)}
          options={[
            'Local',
            'Nacional',
            'Internacional'
          ]}
        />
        <CustomOption
          width={4}
          text="Rubro o actividad de la institución"
          value={est27}
          onChange={handleValue(setEst27)}
          options={[
            'Banca',
            'Educación regular',
            'Educación superior',
            'Dministración publica',
            'Telecomunicaciones',
            'Desarrollo de software',
            'Prensa',
            'Salud',
            'Transporte',
            'Turismo',
            'Hoteleria',
            'Agropecuaria',
            'Minería',
            'Gastronomía',
            'Contrucción',
            'Comercio',
            'Automotores',
            'Publicidad',
            'Entretenimiento',
            'Comercio',
            'Otro'
          ]}
        />
        <CustomOption
          width={4}
          text="Cargo que ocupa"
          value={est28}
          onChange={handleValue(setEst28)}
          options={[
            'Operador de Computadoras',
            'Transcriptor',
            'Programador',
            'Analista de sistemas',
            'Jefe de proyecto',
            'Administrador de base de datos',
            'Administrador de redes',
            'Jefe de sistemas',
            'Jefe de TI',
            'Administrador de Sistemas',
            'Otro'
          ]}
        />
        <CustomOption
          width={4}
          text="Forma de ingreo a la institución"
          value={est29}
          onChange={handleValue(setEst29)}
          options={[
            'Independiente',
            'Pasantia',
            'Beca trabajo',
            'Convocatoria publica',
            'Invitación',
            'Otro'
          ]}
        />
        <CustomOption
          width={4}
          text="Tipo de institución"
          value={est30}
          onChange={handleValue(setEst30)}
          options={[
            'Estatal',
            'Privada',
            'Empredimiento propio',
            'Otro'
          ]}
        />
        <CustomInputs
          width={6}
          upTo={10}
          onChange={handleFlatValue(setEst31)}
          text="Principales actividades que desarrolla durante su trabajo:"
        />
        <Multiple
          title="Aspectos en su formacion"
          width={6}
          onChange={handleFlatValue(setEst32)}
          options={[
            'Materias de servicio (Mat-Fis)',
            'Materias de la carrera (Prog-BD-Redes)',
            'Materias con laboratorios',
            'Prestigio de la universidad'
          ]}
        />
      </FieldSet>

      <FieldSet title="IV. Perfil Profesional Actual">
        <Multiple
          title="El licenciado en Informática, al concluir la curricula será capaz de:"
          width={12}
          onChange={handleFlatValue(setEst33)}
          options={[
            'Generar conocieminetos para modernizar los procesos de gestión y producción industrial.',
            'Organizar y administrar sistemas informáticos',
            'Organizar trabajo multidiciplinario',
            'Innovar tecnologías para el mercado',
            'Desarrollar y dirigir la investigación'
          ]}
        />
        <Multiple
          title="Pregunta 34, Pagina 3"
          width={12}
          onChange={handleFlatValue(setEst34)}
          options={[
            'El perfil del profesional en Informática es pertinente con la realidad actual',
            'El perfil del profesional en Informática expresa con claridad las competencias del futuro profesional'
          ]}
        />
        <Simple width={12} value={est35} text="Qué se debe mejorar del perfil profesional actual?" onChange={handleValue(setEst35)} />
      </FieldSet>

      <FieldSet title="V. Plan de Estudios Actual">
        <Multiple
          title="Asignaturas y plan de estudio."
          width={12}
          onChange={handleFlatValue(setEst36)}
          options={[
            'Las asignaturas del plan de estudios son adecuadas para formar al profesional en Informática',
            'Los contenidos de las asignaturas del plan de estudios están actualizados',
            'Las asignaturas del plan de estudios se imparten de manera didáctica.',
            'La cantidad de asignaturas del plan de estudios es adecuada para formar al profesional en informática',
            'La proporción de horas teóricas y práctica de las adsignaturas son adecuadas para el proceso de formación',
            'La estructura de materias es adecuada para la formación del profesional en Informática'
          ]}
        />
        <Simple width={12} value={est37} text="Qué debilidades tiene el plan de estudios actual?" onChange={handleValue(setEst37)} />
        <Simple width={12} value={est38} text="Qué fortalezas tiene el plan de estudios actual?" onChange={handleValue(setEst38)} />
        <CustomInputs
          width={12}
          upTo={0}
          onChange={handleFlatValue(setEst39)}
          text="Mencione al menos 3 materias que considera le hacen falta a la Mención Ingeniería de Sistemas Informáticos"
        />
        <CustomInputs
          width={12}
          upTo={0}
          onChange={handleFlatValue(setEst40)}
          text="Mencione al menos 3 materias que considera le hacen falta a la Mención de Ciencias de la Computación"
        />
        <CustomInputs
          width={12}
          upTo={0}
          onChange={handleFlatValue(setEst41)}
          text="Mencione al menos 3 materias que NO debería estar en la Mención Ingeniería de sistemas informáticos."
        />
        <CustomInputs
          width={12}
          upTo={0}
          onChange={handleFlatValue(setEst42)}
          text="Mencione al menos 3 materias que NO deberían estar en la Mención Ciencias de la Computación"
        />
      </FieldSet>

      <FieldSet title="VI. Infraestructura (Aulas, Laboratorios, Biblioteca, Servicios).">
        <Multiple
          title="Aulas y Equipamiento"
          width={12}
          onChange={handleFlatValue(setEst43)}
          options={[
            'La cantidad de aulas es adecuada para atender las necesidades de estudiantes y docentes',
            'El equipamiento de las aulaas es suficiente para atender las necesidades de los docentes y estudiantes.',
            'La cantidad de laboratorios es adecuada para atender las necesidades de estudiantes y docentes.',
            'El equipamiento de los laboratorios es suficiente para atender las nececidades de estudiantes y docentes.',
            'La biblioteca es adecuada para atender las necesidades de docentes y estudiantes.',
            'El equipamiento de la biblioteca es suficiente para atender las necesidades de docentes y estudiantes.',
            'La infraestructura tecnológica es adecuada para atender las necesidades de estudiantes y docentes.',
            'El servicio de Internet en la carrera permite desarrollar las actividades académicas satisfactoriamente.'
          ]}
        />
        <Simple
          width={12}
          value={est44}
          text="¿Desde su vivencia, qué sugiere mejorar de la infraestructura actual de la carrera?"
          onChange={handleValue(setEst44)}
        />
      </FieldSet>

      <FieldSet title="VII. Grados, Titulación y Menciones">
        <Multiple
          title="Licenciado en Informática"
          width={12}
          onChange={handleFlatValue(setEst45)}
          options={[
            'El título de licenciado en Informática es coherente con la demanda del mercado acutal',
            'La meción Ingeniería en Sistemas Informáticos es coherente con la demanda del mercado actual',
            'La Mención Ciencias de la Computación es coherente con la demanda del mercado actual'
          ]}
        />
        <Simple width={12} value={est46} text="¿Qué otros programas se deben implementar en Informática?" onChange={handleValue(setEst46)} />
        <Multiple
          title="Carreras o Programas"
          width={12}
          onChange={handleFlatValue(setEst47)}
          options={[
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
          ]}
        />
        <CustomOption
          width={6}
          text="La especialización debería hacerse:"
          value={est48}
          onChange={handleValue(setEst48)}
          options={[
            'En el postgrado',
            'En el pregrado',
            'Otro'
          ]}
        />
        <CustomInputs
          width={6}
          upTo={5}
          onChange={handleFlatValue(setEst49)}
          text="¿Qué modalidades de graduación elegiría?"
        />
      </FieldSet>

      <FieldSet title="VIII. Áreas de Conocimiento">
        <CustomInputs
          width={6}
          upTo={12}
          onChange={handleFlatValue(setEst50)}
          text="En cuanto a lenguajes de programación"
        />
        <CustomInputs
          width={6}
          upTo={12}
          onChange={handleFlatValue(setEst51)}
          text="En cuanto a gestores de bases de datos"
        />
        <CustomInputs
          width={4}
          upTo={4}
          onChange={handleFlatValue(setEst52)}
          text="En cuanto a metodologías de desarrollo"
        />
        <CustomInputs
          width={4}
          upTo={4}
          onChange={handleFlatValue(setEst53)}
          text="En cuanto a sistemas operativos"
        />
        <CustomInputs
          width={4}
          upTo={12}
          onChange={handleFlatValue(setEst54)}
          text="En cuanto a Frameworks"
        />
      </FieldSet>

      <FieldSet title="IX. Competencias del Profesional en el ÁREA DE INFORMÁTICA Y SISTEMAS">
        <Multiple
          title="¿Cuáles considera que son las competencias generales que debe tener un Informático?"
          width={12}
          onChange={handleFlatValue(setEst55)}
          options={[
            'Trabajar en un contexto multidisciplinario',
            'Trabajar en el contexto internaciones',
            'Comportamineto ético enla profesión y la vida',
            'Capacidad de actualizarse permanentemente',
            'Capacidad crítica',
            'Capacidad de trabajo en equipo',
            'Capacidad reflexiva',
            'Capacidad Creativa',
            'Conocimiento del idioma Inglés',
            'Capacidad de emprender proyectos',
            'Capacidad de tomar decisiones',
            'Capacidad de adaptarse a nuevas situaciones',
            'Utilizar metodologías de investigación'
          ]}
        />
        <Multiple
          title="¿Cuáles considera que son las competencias específicas que debe tener un Informático?"
          width={12}
          onChange={handleFlatValue(setEst56)}
          options={[
            'Diseñar soluciones informáticas a pedido',
            'Aplicar metodologías de desarrollo',
            'Capacidad de siseñar construir y administar redes',
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
          ]}
        />
        <CustomInputs
          width={12}
          upTo={21}
          onChange={handleFlatValue(setEst57)}
          text="Líneas de Investigación"
        />
      </FieldSet>

      <FieldSet title="X. Aspiraciones Futuras">
        <CustomOption
          width={6}
          text="Cuando termine la carrera, me gustaría trabajar en:"
          value={est58}
          onChange={handleValue(setEst58)}
          options={[
            'Emprendimiento propio',
            'Educación regular',
            'Sector público',
            'Banca',
            'ONG s',
            'Empresas de desarrollo de software',
            'Empresas de telecomunicaciones',
            'Empresas de seguridad Informática',
            'Empresas de monitoreo',
            'Institutos de investigación',
            'Educación superior',
            'Freelance',
            'Marketing digital',
            'Auditoría de sistemas',
            'Análisis de riesgo',
            'Otro'
          ]}
        />
        <Simple width={6} value={est59} text="¿Dónde te gustaría trabajar?" onChange={handleValue(setEst59)} />
        <CustomInputs
          width={12}
          upTo={7}
          onChange={handleFlatValue(setEst60)}
          text="¿Que certificaciones consideras importantes?"
        />
        <CustomInputs
          width={6}
          upTo={0}
          onChange={handleFlatValue(setEst61)}
          text="Diplomado:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          onChange={handleFlatValue(setEst62)}
          text="Maestría:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          onChange={handleFlatValue(setEst63)}
          text="Doctorado:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          onChange={handleFlatValue(setEst64)}
          text="Otro:"
        />
        <Simple width={8} value={est65} text="¿Qué cargo te gustaría tener cuando te titules?" onChange={handleValue(setEst65)} />
      </FieldSet>

      <FieldSet title="XI. Sugerencias">
        <Simple
          width={12}
          value={est66}
          text="Mencione alguna sugerencia para mejorar el plan de estudios de la Carrera"
          onChange={handleValue(setEst66)}
        />
      </FieldSet>
      <FieldSet title="Datos de la Encuesta">
        <Simple width={8} value={est67} text="Encuestador:" onChange={handleValue(setEst67)} />
        <Simple width={4} value={est68} text="Fecha de Encuesta:" type="date" onChange={handleValue(setEst68)} />
      </FieldSet>
      <div style={{ width: '100%' }}>
        <ActionButton
          loading={loading}
          text="Enviar"
          onClick={onSubmit}
          iconRight={<SendIcon />}
          full
        />
      </div>
    </Fragment>
  )
}

export default withSnackbar(FormEst)
