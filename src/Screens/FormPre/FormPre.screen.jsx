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
import q from '../../utils/questions/pre'

const FormPre = ({ enqueueSnackbar }) => {
  const firstRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [nro, setNro] = useState('')
  // I. ASPECTOS GENERALES
  const [pre1, setPre1] = useState('')
  const [pre2, setPre2] = useState('')
  const [pre3, setPre3] = useState('')
  const [pre4, setPre4] = useState('')
  const [pre5, setPre5] = useState('2000-11-01')
  const [pre6, setPre6] = useState('')
  const [pre7, setPre7] = useState('')
  const [pre8, setPre8] = useState('')
  const [pre9, setPre9] = useState('0')
  const [pre10, setPre10] = useState('0')
  const [pre11, setPre11] = useState('0')
  const [pre12, setPre12] = useState('0')
  const [pre13, setPre13] = useState('0')
  const [pre14, setPre14] = useState('0')
  // II. VINCULACION CON LA CARRERA
  const [pre15, setPre15] = useState('')
  const [pre16, setPre16] = useState('')
  const [pre17, setPre17] = useState('')
  const [pre18, setPre18] = useState('')
  const [pre19, setPre19] = useState('')
  const [pre20, setPre20] = useState('')
  const [pre21, setPre21] = useState('')
  const [pre22, setPre22] = useState('')
  const [pre23, setPre23] = useState('')
  const [pre24, setPre24] = useState('')
  const [pre25, setPre25] = useState('')
  const [pre26, setPre26] = useState('0')
  const [pre26a, setPre26a] = useState('')
  const [pre27, setPre27] = useState('0')
  const [pre27a, setPre27a] = useState('')
  const [pre28, setPre28] = useState('')
  const [pre29, setPre29] = useState('')
  const [pre30, setPre30] = useState('')
  const [pre31, setPre31] = useState('')
  const [pre32, setPre32] = useState('')
  // III. SITUACION LABORAL
  const [pre33, setPre33] = useState('0')
  const [pre34, setPre34] = useState('0')
  const [pre35, setPre35] = useState('0')
  const [pre36, setPre36] = useState('0')
  // IV. GRADOS TITULACION Y MENCIONES
  const [pre37, setPre37] = useState('')
  const [pre38, setPre38] = useState('')
  // V. ASPIRACIONES FUTURAS
  const [pre39, setPre39] = useState('')
  // VI. SUGERENCIAS
  const [pre40, setPre40] = useState('')
  // DATOS ENCUESTA
  const [pre41, setPre41] = useState('')
  const [pre42, setPre42] = useState('2000-11-01')

  const scrollToTop = () => window.scrollTo(0, firstRef.current.offsetTop)

  const checkExistence = () => {
    setLoading(true)
    axios.get(endpoints.searchFormPre(nro))
      .then(() => {
        setLoading(false)
        enqueueSnackbar('El formulario ya fue registrado', { variant: 'warning' })
        setNro('')
      })
      .catch(({ response }) => {
        setLoading(false)
        if (response && response.data && response.data.content) {
          enqueueSnackbar(`${response.data.content}. Puede continuar.`)
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
      pre1,
      pre2,
      pre3,
      pre4,
      pre5,
      pre6,
      pre7,
      pre8,
      pre9,
      pre10,
      pre11,
      pre12,
      pre13,
      pre14,
      pre15,
      pre16,
      pre17,
      pre18,
      pre19,
      pre20,
      pre21,
      pre22,
      pre23,
      pre24,
      pre25,
      pre26,
      pre26a,
      pre27,
      pre27a,
      pre28,
      pre29,
      pre30,
      pre31,
      pre32,
      pre33,
      pre34,
      pre35,
      pre36,
      pre37,
      pre38,
      pre39,
      pre40,
      pre41,
      pre42
    }
    axios.post(endpoints.formPre, data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario enviado.', { variant: 'success' })
        scrollToTop()
        /*
        setNro('')
        setPre1('')
        setPre2('')
        setPre3('')
        setPre4('')
        setPre5('2000-11-01')
        setPre6('')
        setPre7('')
        setPre8('')
        setPre9('0')
        setPre10('0')
        setPre11('0')
        setPre12('0')
        setPre13('0')
        setPre14('0')
        setPre15('')
        setPre16('')
        setPre17('')
        setPre18('')
        setPre19('')
        setPre20('')
        setPre21('')
        setPre22('')
        setPre23('')
        setPre24('')
        setPre25('')
        setPre26('0')
        setPre26a('')
        setPre27('0')
        setPre27a('')
        setPre28('')
        setPre29('')
        setPre30('')
        setPre31('')
        setPre32('')
        setPre33('0')
        setPre34('0')
        setPre35('0')
        setPre36('0')
        setPre37('')
        setPre38('')
        setPre39('')
        setPre40('')
        setPre41('')
        setPre42('2000-11-01') */
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
      <Title title="Cuestionario para Estudiantes del Curso Preuniversitario" />
      <FieldSet title="I. Aspectos Generales">
        <div ref={firstRef} />
        <Simple width={5} value={nro} text="Nro. Formulario:" setter={setNro} type="number" autoFocus />
        <Grid
          item
          lg={4}
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
        <Simple width={4} value={pre1} setter={setPre1} text={q.pre1.title} />
        <Simple width={8} value={pre2} setter={setPre2} text={q.pre2.title} />
        <Simple width={4} value={pre3} setter={setPre3} text={q.pre3.title} />
        <Simple width={4} value={pre4} setter={setPre4} text={q.pre4.title} type="number" />
        <Simple width={4} value={pre5} setter={setPre5} text={q.pre5.title} type="date" />
        <Simple width={4} value={pre6} setter={setPre6} text={q.pre6.title} />
        <Simple width={4} value={pre7} setter={setPre7} text={q.pre7.title} />
        <Simple width={4} value={pre8} setter={setPre8} text={q.pre8.title} />
        <Option width={4} value={pre9} setter={setPre9} text={q.pre9.title} options={q.pre9.options} />
        <CustomOption width={4} value={pre10} setter={setPre10} text={q.pre10.title} options={q.pre10.options} />
        <CustomOption width={4} value={pre11} setter={setPre11} text={q.pre11.title} options={q.pre11.options} />
        <CustomOption width={4} value={pre12} setter={setPre12} text={q.pre12.title} options={q.pre12.options} />
        <CustomOption width={4} value={pre13} setter={setPre13} text={q.pre13.title} options={q.pre13.options} />
        <Option width={4} value={pre14} setter={setPre14} text={q.pre14.title} options={q.pre14.options} />
      </FieldSet>

      <FieldSet title="II. VINCULACIÓN CON LA CARRERA">
        <CustomInputs width={12} upTo={0} value={pre15} setter={setPre15} text={q.pre15.title} />
        <CustomInputs width={4} upTo={8} value={pre16} setter={setPre16} text={q.pre16.title} />
        <CustomInputs width={4} upTo={10} value={pre17} setter={setPre17} text={q.pre17.title} />
        <CustomInputs width={4} upTo={5} value={pre18} setter={setPre18} text={q.pre18.title} />
        <CustomInputs width={12} upTo={0} value={pre19} setter={setPre19} text={q.pre19.title} />
        <CustomInputs width={12} upTo={0} value={pre20} setter={setPre20} text={q.pre20.title} />
        <CustomInputs width={12} upTo={0} value={pre21} setter={setPre21} text={q.pre21.title} />
        <CustomInputs width={12} upTo={0} value={pre22} setter={setPre22} text={q.pre22.title} />
        <CustomInputs width={12} upTo={0} value={pre23} setter={setPre23} text={q.pre23.title} />
        <CustomInputs width={12} upTo={0} value={pre24} setter={setPre24} text={q.pre24.title} />
        <Multiple width={12} value={pre25} title={q.pre25.title} setter={setPre25} options={q.pre25.options} />
        <Option width={4} value={pre26} setter={setPre26} text={q.pre26.title} options={q.pre26.options} />
        <Simple width={8} value={pre26a} setter={setPre26a} text={q.pre26a.title} />
        <Option width={4} value={pre27} setter={setPre27} text={q.pre27.title} options={q.pre27.options} />
        <Simple width={8} value={pre27a} setter={setPre27a} text={q.pre27a.title} />
        <CustomInputs width={12} upTo={0} value={pre28} setter={setPre28} text={q.pre28.title} />
        <CustomInputs width={12} upTo={0} value={pre29} setter={setPre29} text={q.pre29.title} />
        <CustomInputs width={12} upTo={0} value={pre30} setter={setPre30} text={q.pre30.title} />
        <CustomInputs width={12} upTo={0} value={pre31} setter={setPre31} text={q.pre31.title} />
        <CustomInputs width={12} upTo={0} value={pre32} setter={setPre32} text={q.pre32.title} />
      </FieldSet>

      <FieldSet title="III. SITUACIÓN LABORAL">
        <CustomOption width={6} value={pre33} setter={setPre33} text={q.pre33.title} options={q.pre33.options} />
        {
          pre33 !== '1' && (
            <Fragment>
              <Option width={6} value={pre34} setter={setPre34} text={q.pre34.title} options={q.pre34.options} />
              <CustomOption width={6} value={pre35} setter={setPre35} text={q.pre35.title} options={q.pre35.options} />
              <CustomOption width={6} value={pre36} setter={setPre36} text={q.pre36.title} options={q.pre36.options} />
            </Fragment>
          )
        }
      </FieldSet>

      <FieldSet title="IV. GRADOS TITULACIÓN Y MENCIONES">
        <Multiple width={12} value={pre37} title={q.pre37.title} setter={setPre37} options={q.pre37.options} />
        <CustomInputs width={12} upTo={11} value={pre38} text={q.pre38.title} setter={setPre38} />
      </FieldSet>

      <FieldSet title="V. ASPIRACIONES FUTURAS">
        <CustomInputs width={12} upTo={15} value={pre39} setter={setPre39} text={q.pre39.title} />
      </FieldSet>

      <FieldSet title="VI. SUGERENCIAS">
        <Simple width={12} value={pre40} setter={setPre40} text={q.pre40.title} multiline />
      </FieldSet>

      <FieldSet title="Datos de la Encuesta">
        <Simple width={8} value={pre41} text={q.pre41.title} setter={setPre41} />
        <Simple width={4} value={pre42} text={q.pre42.title} type="date" setter={setPre42} />
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

export default withSnackbar(FormPre)
