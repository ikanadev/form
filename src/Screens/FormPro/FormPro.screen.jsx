import React, { Fragment, useState, useRef } from 'react'
import { withSnackbar } from 'notistack'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

import ActionButton from '../../Components/ActionButton/ActionButton'
import FieldSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import Option from '../../Components/Form/Option'
import CustomOption from '../../Components/Form/CustomOption'
import CustomInputs from '../../Components/Form/CustomInputs'
import Multiple from '../../Components/Form/Multiple'
import Title from '../../Components/Title/Title'

import { axios, endpoints } from '../../utils'
import q from '../../utils/questions/pro'

const FormPro = ({ enqueueSnackbar }) => {
  const firstRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [nro, setNro] = useState('')
  // I. ASPECTOS GENERALES
  const [pro1, setPro1] = useState('')
  const [pro2, setPro2] = useState('')
  const [pro3, setPro3] = useState('')
  const [pro4, setPro4] = useState('')
  const [pro5, setPro5] = useState('')
  const [pro6, setPro6] = useState('')
  const [pro7, setPro7] = useState('0')
  const [pro8, setPro8] = useState('0')
  const [pro9, setPro9] = useState('0')
  const [pro10, setPro10] = useState('0')
  const [pro11, setPro11] = useState('')
  const [pro12, setPro12] = useState('')
  const [pro13, setPro13] = useState('')
  const [pro14, setPro14] = useState('')
  const [pro15, setPro15] = useState('')
  const [pro16, setPro16] = useState('0')
  const [pro17, setPro17] = useState('')
  // II. SITUACION LABORAL
  const [pro18, setPro18] = useState('0')
  const [pro19, setPro19] = useState('')
  const [pro20, setPro20] = useState('')
  const [pro21, setPro21] = useState('0')
  const [pro22, setPro22] = useState('0')
  const [pro23, setPro23] = useState('0')
  const [pro24, setPro24] = useState('0')
  const [pro25, setPro25] = useState('0')
  const [pro26, setPro26] = useState('0')
  const [pro27, setPro27] = useState('0')
  const [pro28, setPro28] = useState('0')
  const [pro29, setPro29] = useState('0')
  const [pro30, setPro30] = useState('')
  const [pro31, setPro31] = useState('')
  // III. PERFIL PROFESIONAL
  const [pro32, setPro32] = useState('')
  const [pro33, setPro33] = useState('')
  // IV. PLAN DE ESTUDIOS CON EL QUE SE FORMO
  const [pro34, setPro34] = useState('')
  const [pro35, setPro35] = useState('')
  const [pro36, setPro36] = useState('')
  const [pro37, setPro37] = useState('')
  const [pro38, setPro38] = useState('')
  // V. GRADOS TITULACION Y MENCIONES
  const [pro39, setPro39] = useState('')
  const [pro40, setPro40] = useState('')
  const [pro41, setPro41] = useState('')
  const [pro42, setPro42] = useState('0')
  const [pro43, setPro43] = useState('0')
  // VI. AREAS DE CONOCIMIENTO
  const [pro44, setPro44] = useState('')
  const [pro45, setPro45] = useState('')
  const [pro46, setPro46] = useState('')
  const [pro47, setPro47] = useState('')
  const [pro48, setPro48] = useState('')
  // VII. COMPETENCIAS DEL PROFESIONAL EN INFO
  const [pro49, setPro49] = useState('')
  const [pro50, setPro50] = useState('')
  const [pro51, setPro51] = useState('')
  // VIII. ASPIRACONES FUTURAS
  const [pro52, setPro52] = useState('')
  const [pro53, setPro53] = useState('')
  const [pro54, setPro54] = useState('')
  const [pro55, setPro55] = useState('')
  const [pro56, setPro56] = useState('')
  // IX. SUGERENCIAS
  const [pro57, setPro57] = useState('')
  // DATOS ENCUESTA
  const [pro58, setPro58] = useState('')
  const [pro59, setPro59] = useState('2000-11-01')

  const scrollToTop = () => window.scrollTo(0, firstRef.current.offsetTop)

  const checkExistence = () => {
    setLoading(true)
    axios.get(endpoints.searchFormPro(nro))
      .then(() => {
        setLoading(false)
        enqueueSnackbar('El formulario ya fue registrado', { variant: 'warning' })
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

  const onSubmit = () => {
    if (nro.charAt(0) === '0') {
      enqueueSnackbar('El NRO de Formulario no debe tener 0\'s (ceros) por delante.')
      return
    }
    setLoading(true)
    const data = {
      nro,
      pro1,
      pro2,
      pro3,
      pro4,
      pro5,
      pro6,
      pro7,
      pro8,
      pro9,
      pro10,
      pro11,
      pro12,
      pro13,
      pro14,
      pro15,
      pro16,
      pro17,
      pro18,
      pro19,
      pro20,
      pro21,
      pro22,
      pro23,
      pro24,
      pro25,
      pro26,
      pro27,
      pro28,
      pro29,
      pro30,
      pro31,
      pro32,
      pro33,
      pro34,
      pro35,
      pro36,
      pro37,
      pro38,
      pro39,
      pro40,
      pro41,
      pro42,
      pro43,
      pro44,
      pro45,
      pro46,
      pro47,
      pro48,
      pro49,
      pro50,
      pro51,
      pro52,
      pro53,
      pro54,
      pro55,
      pro56,
      pro57,
      pro58,
      pro59
    }
    axios.post(endpoints.formPro, data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario Enviado Correctamente.', { variant: 'success' })
        scrollToTop()
        setNro('')
        setPro1('')
        setPro2('')
        setPro3('')
        setPro4('')
        setPro5('')
        setPro6('')
        setPro7('0')
        setPro8('0')
        setPro9('0')
        setPro10('0')
        setPro11('')
        setPro12('')
        setPro13('')
        setPro14('')
        setPro15('')
        setPro16('0')
        setPro17('')
        setPro18('0')
        setPro19('')
        setPro20('')
        setPro21('0')
        setPro22('0')
        setPro23('0')
        setPro24('0')
        setPro25('0')
        setPro26('0')
        setPro27('0')
        setPro28('0')
        setPro29('0')
        setPro30('')
        setPro31('')
        setPro32('')
        setPro33('')
        setPro34('')
        setPro35('')
        setPro36('')
        setPro37('')
        setPro38('')
        setPro39('')
        setPro40('')
        setPro41('')
        setPro42('0')
        setPro43('0')
        setPro44('')
        setPro45('')
        setPro46('')
        setPro47('')
        setPro48('')
        setPro49('')
        setPro50('')
        setPro51('')
        setPro52('')
        setPro53('')
        setPro54('')
        setPro55('')
        setPro56('')
        setPro57('')
        setPro58('')
        setPro59('2000-11-01')
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
      <Title title="Cuestionario para Profesinales" />
      <FieldSet title="I. Aspectos Generales">
        <div ref={firstRef} />
        <Simple width={4} value={nro} text="Nro. Formulario:" setter={setNro} type="number" autoFocus />
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
        <Simple width={8} value={pro1} text={q.pro1.title} setter={setPro1} />
        <Simple width={4} value={pro2} text={q.pro2.title} setter={setPro2} />
        <Simple width={12} value={pro3} text={q.pro3.title} setter={setPro3} />
        <Simple width={8} value={pro4} text={q.pro4.title} setter={setPro4} />
        <Simple width={4} value={pro5} text={q.pro5.title} setter={setPro5} />
        <Simple width={12} value={pro6} text={q.pro6.title} setter={setPro6} />
        <Option width={3} value={pro7} text={q.pro7.title} setter={setPro7} options={q.pro7.options} />
        <Option width={3} value={pro8} text={q.pro8.title} setter={setPro8} options={q.pro8.options} />
        <CustomOption width={3} value={pro9} text={q.pro9.title} setter={setPro9} options={q.pro9.options} />
        <Option width={3} value={pro10} text={q.pro10.title} setter={setPro10} options={q.pro10.options} />
        <CustomInputs width={12} upTo={0} value={pro11} text={q.pro11.title} setter={setPro11} />
        <CustomInputs width={12} upTo={0} value={pro12} text={q.pro12.title} setter={setPro12} />
        <CustomInputs width={12} upTo={0} value={pro13} text={q.pro13.title} setter={setPro13} />
        <CustomInputs width={12} upTo={0} value={pro14} text={q.pro14.title} setter={setPro14} />
        <CustomInputs width={12} upTo={0} value={pro15} text={q.pro15.title} setter={setPro15} />
        <CustomInputs width={5} upTo={9} value={pro16} text={q.pro16.title} setter={setPro16} />
        <CustomInputs width={7} upTo={0} value={pro17} text={q.pro17.title} setter={setPro17} />
      </FieldSet>

      <FieldSet title="II. Situación Laboral">
        <CustomOption width={3} value={pro18} text={q.pro18.title} setter={setPro18} options={q.pro18.options} />
        <Simple width={6} value={pro19} text={q.pro19.title} setter={setPro19} />
        <Simple width={3} value={pro20} text={q.pro20.title} setter={setPro20} type="number" />
        <CustomInputs width={6} upTo={2} value={pro21} text={q.pro21.title} setter={setPro21} />
        <Option width={6} value={pro22} text={q.pro22.title} setter={setPro22} options={q.pro22.options} />
        <Option width={4} value={pro23} text={q.pro23.title} setter={setPro23} options={q.pro23.options} />
        <Option width={4} value={pro24} text={q.pro24.title} setter={setPro24} options={q.pro24.options} />
        <CustomOption width={4} value={pro25} text={q.pro25.title} setter={setPro25} options={q.pro25.options} />
        <CustomOption width={6} value={pro26} text={q.pro26.title} setter={setPro26} options={q.pro26.options} />
        <CustomInputs width={6} upTo={11} value={pro27} text={q.pro27.title} setter={setPro27} />
        <CustomOption width={4} value={pro28} text={q.pro28.title} setter={setPro28} options={q.pro28.options} />
        <CustomOption width={4} value={pro29} text={q.pro29.title} setter={setPro29} options={q.pro29.options} />
        <CustomInputs width={4} upTo={10} value={pro30} text={q.pro30.title} setter={setPro30} />
        <Multiple width={12} value={pro31} title={q.pro31.title} setter={setPro31} options={q.pro31.options} />
      </FieldSet>

      <FieldSet title="III. Perfil Profesional">
        <Multiple width={12} value={pro32} title={q.pro32.title} setter={setPro32} options={q.pro32.options} />
        <Simple width={12} value={pro33} text={q.pro33.title} setter={setPro33} />
      </FieldSet>

      <FieldSet title="IV. Plan de Estudios con el que se Formó">
        <Multiple width={12} value={pro34} title={q.pro34.title} setter={setPro34} options={q.pro34.options} />
        <Simple width={12} value={pro35} text={q.pro35.title} setter={setPro35} />
        <Simple width={12} value={pro36} text={q.pro36.title} setter={setPro36} />
        <CustomInputs width={12} upTo={0} value={pro37} text={q.pro37.title} setter={setPro37} />
        <CustomInputs width={12} upTo={0} value={pro38} text={q.pro38.title} setter={setPro38} />
      </FieldSet>

      <FieldSet title="V. Grados Titulación y Menciones">
        <Multiple width={12} value={pro39} title={q.pro39.title} setter={setPro39} options={q.pro39.options} />
        <Simple width={12} value={pro40} text={q.pro40.title} setter={setPro40} />
        <CustomInputs width={12} upTo={11} value={pro41} text={q.pro41.title} setter={setPro41} />
        <CustomOption width={6} value={pro42} text={q.pro42.title} setter={setPro42} options={q.pro42.options} />
        <CustomOption width={6} value={pro43} text={q.pro43.title} setter={setPro43} options={q.pro43.options} />
      </FieldSet>

      <FieldSet title="VI. Áreas de Conocimiento">
        <CustomInputs width={6} upTo={12} value={pro44} text={q.pro44.title} setter={setPro44} />
        <CustomInputs width={6} upTo={12} value={pro45} text={q.pro45.title} setter={setPro45} />
        <CustomInputs width={6} upTo={5} value={pro46} text={q.pro46.title} setter={setPro46} />
        <CustomInputs width={6} upTo={4} value={pro47} text={q.pro47.title} setter={setPro47} />
        <CustomInputs width={4} upTo={12} value={pro48} text={q.pro48.title} setter={setPro48} />
      </FieldSet>

      <FieldSet title="VII. Competencias del Profesional en el Área de Informática y Sistemas">
        <Multiple width={8} value={pro49} title={q.pro49.title} setter={setPro49} options={q.pro49.options} />
        <Multiple width={8} value={pro50} title={q.pro50.title} setter={setPro50} options={q.pro50.options} />
        <CustomInputs width={12} upTo={21} value={pro51} text={q.pro51.title} setter={setPro51} />
      </FieldSet>

      <FieldSet title="VII. Aspiraciones Futuras">
        <CustomInputs width={12} upTo={15} value={pro52} text={q.pro52.title} setter={setPro52} />
        <CustomInputs width={12} upTo={0} value={pro53} text={q.pro53.title} setter={setPro53} />
        <CustomInputs width={12} upTo={0} value={pro54} text={q.pro54.title} setter={setPro54} />
        <CustomInputs width={12} upTo={0} value={pro55} text={q.pro55.title} setter={setPro55} />
        <CustomInputs width={12} upTo={0} value={pro56} text={q.pro56.title} setter={setPro56} />
      </FieldSet>

      <FieldSet title="IX. Sugerencias">
        <Simple width={12} value={pro57} text={q.pro57.title} setter={setPro57} />
      </FieldSet>

      <FieldSet title="Datos de la Encuesta">
        <Simple width={8} value={pro58} text={q.pro58.title} setter={setPro58} />
        <Simple width={4} value={pro59} text={q.pro59.title} type="date" setter={setPro59} />
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

export default withSnackbar(FormPro)
