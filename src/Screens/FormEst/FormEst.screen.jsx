import React, { Fragment, useState, useRef } from 'react'
import { withSnackbar } from 'notistack'
import SendIcon from '@material-ui/icons/Send'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import ActionButton from '../../Components/ActionButton/ActionButton'
import FieldSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import Option from '../../Components/Form/Option'
import CustomOption from '../../Components/Form/CustomOption'
import CustomInputs from '../../Components/Form/CustomInputs'
import Multiple from '../../Components/Form/Multiple'
import Title from '../../Components/Title/Title'
import { endpoints, axios } from '../../utils'

const FormEst = ({
  enqueueSnackbar,
  location: { state: { formData } },
  history: { goBack }
}) => {
  const firstRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [nro, setNro] = useState(formData.nro || '')
  // I. ASPECTOS GENERALES
  const [est1, setEst1] = useState(formData.est1 || '')
  const [est2, setEst2] = useState(formData.est2 || '')
  const [est3, setEst3] = useState(formData.est3 || '')
  const [est4, setEst4] = useState(formData.est4 || '')
  const [est5, setEst5] = useState(formData.est5 || '1970-01-01')
  const [est6, setEst6] = useState(formData.est6 || '')
  const [est7, setEst7] = useState(formData.est7 || '')
  const [est8, setEst8] = useState(formData.est8 || '')
  const [est9, setEst9] = useState(formData.est9 || '')

  const [est10, setEst10] = useState(formData.est10 || '0')
  const [est11, setEst11] = useState(formData.est11 || '0')
  const [est12, setEst12] = useState(formData.est12 || '0')
  const [est13, setEst13] = useState(formData.est13 || '0')
  const [est14, setEst14] = useState(formData.est14 || '0')
  const [est15, setEst15] = useState(formData.est15 || '0')

  // II. VINCULACION CON LA CARRERA
  const [est16, setEst16] = useState(formData.est16 || '0')
  const [est17, setEst17] = useState(formData.est17 || '')
  const [est18, setEst18] = useState(formData.est18 || '')
  const [est19, setEst19] = useState(formData.est19 || '')
  const [est20, setEst20] = useState(formData.est20 || '')
  const [est21, setEst21] = useState(formData.est21 || '')

  // III. SITUACION LABORAL
  const [est22, setEst22] = useState(formData.est22 || '0')
  const [est23, setEst23] = useState(formData.est23 || '0')
  const [est24, setEst24] = useState(formData.est24 || '')
  const [est25, setEst25] = useState(formData.est25 || '0')
  const [est26, setEst26] = useState(formData.est26 || '0')
  const [est27, setEst27] = useState(formData.est27 || '0')
  const [est28, setEst28] = useState(formData.est28 || '0')
  const [est29, setEst29] = useState(formData.est29 || '0')
  const [est30, setEst30] = useState(formData.est30 || '0')
  const [est31, setEst31] = useState(formData.est31 || '')
  const [est32, setEst32] = useState(formData.est32 || '')

  // IV. PERFIL PROFESIONAL ACTUAL
  const [est33, setEst33] = useState(formData.est33 || '')
  const [est34, setEst34] = useState(formData.est34 || '')
  const [est35, setEst35] = useState(formData.est35 || '')

  // V. PLAN DE ESTUDIOS ACTUAL
  const [est36, setEst36] = useState(formData.est36 || '')
  const [est37, setEst37] = useState(formData.est37 || '')
  const [est38, setEst38] = useState(formData.est38 || '')
  const [est39, setEst39] = useState(formData.est39 || '')
  const [est40, setEst40] = useState(formData.est40 || '')
  const [est41, setEst41] = useState(formData.est41 || '')
  const [est42, setEst42] = useState(formData.est42 || '')

  // VI INFRAESTRUCTURA
  const [est43, setEst43] = useState(formData.est43 || '')
  const [est44, setEst44] = useState(formData.est44 || '')

  // VII GRADOS TITULACION Y MENCIONES
  const [est45, setEst45] = useState(formData.est45 || '')
  const [est46, setEst46] = useState(formData.est46 || '')
  const [est47, setEst47] = useState(formData.est47 || '')
  const [est48, setEst48] = useState(formData.est48 || '1')
  const [est49, setEst49] = useState(formData.est49 || '')

  // VIII AREAS DE CONOCIMIENTO
  const [est50, setEst50] = useState(formData.est50 || '')
  const [est51, setEst51] = useState(formData.est51 || '')
  const [est52, setEst52] = useState(formData.est52 || '')
  const [est53, setEst53] = useState(formData.est53 || '')
  const [est54, setEst54] = useState(formData.est54 || '')

  // IX COMPOETENCIAS DEL PROFESIONAL EN EL AREA
  const [est55, setEst55] = useState(formData.est55 || '')
  const [est56, setEst56] = useState(formData.est56 || '')
  const [est57, setEst57] = useState(formData.est57 || '')

  // X ASPIRACIONES FUTURAS
  const [est58, setEst58] = useState(formData.est58 || '0')
  const [est59, setEst59] = useState(formData.est59 || '')
  const [est60, setEst60] = useState(formData.est60 || '')
  const [est61, setEst61] = useState(formData.est61 || '')
  const [est62, setEst62] = useState(formData.est62 || '')
  const [est63, setEst63] = useState(formData.est63 || '')
  const [est64, setEst64] = useState(formData.est64 || '')
  const [est65, setEst65] = useState(formData.est65 || '')
  const [est66, setEst66] = useState(formData.est66 || '')

  // DATOS DE LA ENCUESTA
  const [est67, setEst67] = useState(formData.est67 || '')
  const [est68, setEst68] = useState(formData.est68 || '2019-05-01')

  const scrollToTop = () => window.scrollTo(0, firstRef.current.offsetTop)

  const searchStudent = () => {
    setLoading(true)
    axios.post(endpoints.student, { ci: est1 })
      .then(({ data }) => {
        setLoading(false)
        if (data.content) {
          const {
            student: {
              apmat, appat, cel, email, email2, fecNac, genero, modIngreso, nombre, perIngreso, telf
            }
          } = data.content
          let modalidad = '0'
          switch (modIngreso) {
            case 'Curso prefacultativo':
              modalidad = '1'
              break
            case 'Prueba de suficiencia':
              modalidad = '2'
              break
            case 'Traspaso interno UMSA':
              modalidad = '4'
              break
            case 'Paralela':
              modalidad = '5'
              break
            case 'Carrera Paralela':
              modalidad = '5'
              break
            default:
              break
          }
          setEst2(`${appat} ${apmat} ${nombre}`)
          setEst3(perIngreso)
          setEst5(fecNac)
          setEst7(telf)
          setEst8(cel)
          setEst9(email === '' ? email2 : email)
          setEst10(genero === 'M' ? '2' : '1')
          setEst16(modalidad)
          return
        }
        enqueueSnackbar(`No se econtró un estudiante con ci: ${est1}`)
      }).catch(() => {
        setLoading(false)
        enqueueSnackbar(`No se econtró un estudiante con ci: ${est1}`)
      })
  }
  const checkExistence = () => {
    setLoading(true)
    axios.get(endpoints.searchFormEst(nro))
      .then(() => {
        setLoading(false)
        enqueueSnackbar('El formulario ya fue REGISTRADO', { variant: 'warning' })
        setNro('')
      })
      .catch(({ response }) => {
        setLoading(false)
        if (response && response.data && response.data.content) {
          enqueueSnackbar(`${response.data.content}. Puede continuar con el llenado`)
          return
        }
        enqueueSnackbar('Hubo un error verificando el formulario', { variant: 'error' })
      })
  }

  const isUpdate = Object.keys(formData).length > 0

  const getData = () => ({
    nro,
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
  })

  const onSubmit = () => {
    if (nro.charAt(0) === '0') {
      enqueueSnackbar('El NRO de Formulario no debe tener 0\'s (ceros) por delante.')
      return
    }
    setLoading(true)
    const data = getData()
    // everithing works fine, but need some refactor to manage tokens
    axios.post(endpoints.formEst, data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario Enviado Correctamente.', { variant: 'success' })
        scrollToTop()
        setNro('')
        setEst1('')
        setEst2('')
        setEst3('')
        setEst4('')
        setEst5('1970-01-01')
        setEst6('')
        setEst7('')
        setEst8('')
        setEst9('')
        setEst10('0')
        setEst11('0')
        setEst12('0')
        setEst13('0')
        setEst14('0')
        setEst15('0')
        setEst16('0')
        setEst17('')
        setEst18('')
        setEst19('')
        setEst20('')
        setEst21('')
        setEst22('0')
        setEst23('0')
        setEst24('')
        setEst25('0')
        setEst26('0')
        setEst27('0')
        setEst28('0')
        setEst29('0')
        setEst30('0')
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
        setEst48('0')
        setEst49('')
        setEst50('')
        setEst51('')
        setEst52('')
        setEst53('')
        setEst54('')
        setEst55('')
        setEst56('')
        setEst57('')
        setEst58('')
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

  const onUpdate = () => {
    setLoading(true)
    const data = getData()
    data.id = formData.id
    axios.put(endpoints.formEst, data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario actualizado.', { variant: 'success' })
        goBack()
      })
      .catch((err) => {
        setLoading(false)
        enqueueSnackbar(`Error al guardar formulario: ${err.message}`, { variant: 'error' })
      })
  }

  const onDelete = () => {
    setLoading(true)
    const data = getData()
    data.id = formData.id
    axios.delete(endpoints.formEst, { data })
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario eliminado.')
        goBack()
      })
      .catch((err) => {
        setLoading(false)
        enqueueSnackbar(`Error al eliminar formulario: ${err.message}`, { variant: 'error' })
      })
  }

  return (
    <Fragment>
      <Title title="Cuestionario para Estudiantes" />
      <FieldSet title="I. Aspectos Generales">
        <div ref={firstRef} />
        <Simple width={3} value={nro} text="Nro. Formulario:" setter={setNro} type="number" autoFocus />
        <Grid
          item
          lg={3}
          style={{
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 6
          }}
        >
          <Button onClick={checkExistence} variant="contained" color="primary" disabled={loading} fullWidth>
            Verificar Existencia
          </Button>
        </Grid>
        <Simple width={3} value={est1} text="C.I.:" setter={setEst1} />
        <Grid
          item
          lg={3}
          style={{
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 6
          }}
        >
          <Button onClick={searchStudent} variant="contained" color="primary" disabled={loading} fullWidth>
            Buscar Estudiante
          </Button>
        </Grid>
        <Simple width={12} value={est2} text="Nombre Completo:" setter={setEst2} />
        <Simple width={4} value={est3} text="Gestión que Ingresó:" setter={setEst3} />
        <Simple width={4} value={est4} text="Semestre que Cursa:" setter={setEst4} />
        <Simple width={4} value={est5} text="Fecha de Nacimiento:" type="date" setter={setEst5} />
        <Simple width={4} value={est6} text="Lugar de Nacimiento:" setter={setEst6} />
        <Simple width={4} value={est7} text="Teléfono:" type="number" setter={setEst7} />
        <Simple width={4} value={est8} text="Celular/Whatsapp:" type="number" setter={setEst8} />
        <Simple width={12} value={est9} text="Correo Electrónico:" setter={setEst9} />

        <Option
          width={3}
          value={est10}
          setter={setEst10}
          text="Género:"
          options={['Mujer', 'Varon']}
        />
        <Option
          width={3}
          value={est11}
          setter={setEst11}
          text="Tipo Unidad Educativa:"
          options={['Fiscal', 'Particular', 'Convenio']}
        />
        <CustomOption
          width={3}
          value={est12}
          setter={setEst12}
          text="Ubicación Unidad Educativa:"
          options={['La Paz', 'El Alto', 'Viacha', 'Otro']}
        />
        <CustomOption
          width={3}
          value={est13}
          setter={setEst13}
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
          setter={setEst14}
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
          setter={setEst15}
          text="Estado Civil:"
          options={['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a']}
        />
      </FieldSet>

      <FieldSet title="II. Vinculación con la Carrera">
        <Option
          width={6}
          value={est16}
          setter={setEst16}
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
          value={est17}
          setter={setEst17}
          text="Motivos por que eligió la carrera"
        />
        <CustomInputs
          width={6}
          upTo={8}
          value={est18}
          setter={setEst18}
          text="Área de preferencia en la Carrera:"
        />
        <CustomInputs
          width={6}
          upTo={4}
          value={est19}
          setter={setEst19}
          text="Razones por las que Abandonó Materias:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          value={est20}
          setter={setEst20}
          text="Materias que prefiere cursar en verano y/o invierno"
        />
        <CustomInputs
          width={6}
          upTo={4}
          value={est21}
          setter={setEst21}
          text="Razones por las que Abandonó la Carrera:"
        />
      </FieldSet>

      <FieldSet title="III. Situación Laboral">
        <CustomOption
          width={6}
          text="Actualmente"
          value={est22}
          setter={setEst22}
          options={[
            'Trabajo a tiempo completo',
            'Trabajo a medio tiempo',
            'Trabajo de forma eventual',
            'Trabajo en un emprendimiento propio',
            'No trabajo',
            'Otro'
          ]}
        />
        {
          est22 !== '5' && (
            <Fragment>
              <Option
                width={6}
                text="Relación de su trabajo con la Carrera"
                value={est23}
                setter={setEst23}
                options={[
                  'Mi trabajo está muy relacionado con la Carrera',
                  'Mi trabajo tienen poca relación con la Carrera',
                  'Mi trabajo no está relacionado con la Carrera'
                ]}
              />
              <CustomInputs
                width={4}
                upTo={3}
                value={est24}
                setter={setEst24}
                text="Razones por las que trabaja:"
              />
              <CustomOption
                width={4}
                text="Tipo de empleo"
                value={est25}
                setter={setEst25}
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
                setter={setEst26}
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
                setter={setEst27}
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
                setter={setEst28}
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
                setter={setEst29}
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
                setter={setEst30}
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
                value={est31}
                setter={setEst31}
                text="Principales actividades que desarrolla durante su trabajo:"
              />
              <Multiple
                title="Aspectos en su formacion"
                width={6}
                value={est32}
                setter={setEst32}
                options={[
                  'Materias de servicio (Mat-Fis)',
                  'Materias de la carrera (Prog-BD-Redes)',
                  'Materias con laboratorios',
                  'Prestigio de la universidad'
                ]}
              />
            </Fragment>
          )
        }
      </FieldSet>

      <FieldSet title="IV. Perfil Profesional Actual">
        <Multiple
          title="El licenciado en Informática, al concluir la curricula será capaz de:"
          width={12}
          value={est33}
          setter={setEst33}
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
          value={est34}
          setter={setEst34}
          options={[
            'El perfil del profesional en Informática es pertinente con la realidad actual',
            'El perfil del profesional en Informática expresa con claridad las competencias del futuro profesional'
          ]}
        />
        <Simple width={12} value={est35} text="Qué se debe mejorar del perfil profesional actual?" setter={setEst35} />
      </FieldSet>

      <FieldSet title="V. Plan de Estudios Actual">
        <Multiple
          title="Asignaturas y plan de estudio."
          width={12}
          value={est36}
          setter={setEst36}
          options={[
            'Las asignaturas del plan de estudios son adecuadas para formar al profesional en Informática',
            'Los contenidos de las asignaturas del plan de estudios están actualizados',
            'Las asignaturas del plan de estudios se imparten de manera didáctica.',
            'La cantidad de asignaturas del plan de estudios es adecuada para formar al profesional en informática',
            'La proporción de horas teóricas y práctica de las adsignaturas son adecuadas para el proceso de formación',
            'La estructura de materias es adecuada para la formación del profesional en Informática'
          ]}
        />
        <Simple width={12} value={est37} text="Qué debilidades tiene el plan de estudios actual?" setter={setEst37} />
        <Simple width={12} value={est38} text="Qué fortalezas tiene el plan de estudios actual?" setter={setEst38} />
        <CustomInputs
          width={12}
          upTo={0}
          value={est39}
          setter={setEst39}
          text="Mencione al menos 3 materias que considera le hacen falta a la Mención Ingeniería de Sistemas Informáticos"
        />
        <CustomInputs
          width={12}
          upTo={0}
          value={est40}
          setter={setEst40}
          text="Mencione al menos 3 materias que considera le hacen falta a la Mención de Ciencias de la Computación"
        />
        <CustomInputs
          width={12}
          upTo={0}
          value={est41}
          setter={setEst41}
          text="Mencione al menos 3 materias que NO debería estar en la Mención Ingeniería de sistemas informáticos."
        />
        <CustomInputs
          width={12}
          upTo={0}
          value={est42}
          setter={setEst42}
          text="Mencione al menos 3 materias que NO deberían estar en la Mención Ciencias de la Computación"
        />
      </FieldSet>

      <FieldSet title="VI. Infraestructura (Aulas, Laboratorios, Biblioteca, Servicios).">
        <Multiple
          title="Aulas y Equipamiento"
          width={12}
          value={est43}
          setter={setEst43}
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
          setter={setEst44}
        />
      </FieldSet>

      <FieldSet title="VII. Grados, Titulación y Menciones">
        <Multiple
          title="Licenciado en Informática"
          width={12}
          value={est45}
          setter={setEst45}
          options={[
            'El título de licenciado en Informática es coherente con la demanda del mercado acutal',
            'La meción Ingeniería en Sistemas Informáticos es coherente con la demanda del mercado actual',
            'La Mención Ciencias de la Computación es coherente con la demanda del mercado actual'
          ]}
        />
        <Simple width={12} value={est46} text="¿Qué otros programas se deben implementar en Informática?" setter={setEst46} />
        <Multiple
          title="Carreras o Programas"
          width={12}
          value={est47}
          setter={setEst47}
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
          setter={setEst48}
          options={[
            'En el postgrado',
            'En el pregrado',
            'Otro'
          ]}
        />
        <CustomInputs
          width={6}
          upTo={5}
          value={est49}
          setter={setEst49}
          text="¿Qué modalidades de graduación elegiría?"
        />
      </FieldSet>

      <FieldSet title="VIII. Áreas de Conocimiento">
        <CustomInputs
          width={6}
          upTo={12}
          value={est50}
          setter={setEst50}
          text="En cuanto a lenguajes de programación"
        />
        <CustomInputs
          width={6}
          upTo={12}
          value={est51}
          setter={setEst51}
          text="En cuanto a gestores de bases de datos"
        />
        <CustomInputs
          width={4}
          upTo={4}
          value={est52}
          setter={setEst52}
          text="En cuanto a metodologías de desarrollo"
        />
        <CustomInputs
          width={4}
          upTo={4}
          value={est53}
          setter={setEst53}
          text="En cuanto a sistemas operativos"
        />
        <CustomInputs
          width={4}
          upTo={12}
          value={est54}
          setter={setEst54}
          text="En cuanto a Frameworks"
        />
      </FieldSet>

      <FieldSet title="IX. Competencias del Profesional en el ÁREA DE INFORMÁTICA Y SISTEMAS">
        <Multiple
          title="¿Cuáles considera que son las competencias generales que debe tener un Informático?"
          width={12}
          value={est55}
          setter={setEst55}
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
          value={est56}
          setter={setEst56}
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
          value={est57}
          setter={setEst57}
          text="Líneas de Investigación"
        />
      </FieldSet>

      <FieldSet title="X. Aspiraciones Futuras">
        <CustomInputs
          width={6}
          text="Cuando termine la carrera, me gustaría trabajar en:"
          upTo={15}
          value={est58}
          setter={setEst58}
        />
        {/*
          <CustomOption
            width={6}
            text="Cuando termine la carrera, me gustaría trabajar en:"
            value={est58}
            setter={setEst58}
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
        */}
        <Simple width={6} value={est59} text="¿Dónde te gustaría trabajar?" setter={setEst59} />
        <CustomInputs
          width={12}
          upTo={7}
          value={est60}
          setter={setEst60}
          text="¿Que certificaciones consideras importantes?"
        />
        <CustomInputs
          width={6}
          upTo={0}
          value={est61}
          setter={setEst61}
          text="Diplomado:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          value={est62}
          setter={setEst62}
          text="Maestría:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          value={est63}
          setter={setEst63}
          text="Doctorado:"
        />
        <CustomInputs
          width={6}
          upTo={0}
          value={est64}
          setter={setEst64}
          text="Otro:"
        />
        <Simple width={8} value={est65} text="¿Qué cargo te gustaría tener cuando te titules?" setter={setEst65} />
      </FieldSet>

      <FieldSet title="XI. Sugerencias">
        <Simple
          width={12}
          value={est66}
          text="Mencione alguna sugerencia para mejorar el plan de estudios de la Carrera"
          setter={setEst66}
        />
      </FieldSet>
      <FieldSet title="Datos de la Encuesta">
        <Simple width={8} value={est67} text="Encuestador:" setter={setEst67} />
        <Simple width={4} value={est68} text="Fecha de Encuesta:" type="date" setter={setEst68} />
      </FieldSet>
      <div style={{ width: '100%' }}>
        <ActionButton
          loading={loading}
          text={isUpdate ? 'Guardar' : 'Enviar'}
          onClick={isUpdate ? onUpdate : onSubmit}
          iconRight={isUpdate ? <SaveIcon /> : <SendIcon />}
          full
        />
        {
          isUpdate && (
            <ActionButton
              loading={loading}
              text="Eliminar"
              onClick={onDelete}
              iconRight={<DeleteIcon />}
              secondary
              full
            />
          )
        }
      </div>
    </Fragment>
  )
}

export default withSnackbar(FormEst)
