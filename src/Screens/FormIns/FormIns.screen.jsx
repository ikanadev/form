import React, { Fragment, useState, useRef } from 'react'
import { withSnackbar } from 'notistack'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

import ActionButton from '../../Components/ActionButton/ActionButton'
import FieldSet from '../../Components/FieldSet/FieldSet'
import Simple from '../../Components/Form/Simple'
import Option from '../../Components/Form/Option'
import CustomOption from '../../Components/Form/CustomOption'
import CustomInputs from '../../Components/Form/CustomInputs'
import Multiple from '../../Components/Form/Multiple'
import DobleInput from '../../Components/Form/DobleInput'
import Title from '../../Components/Title/Title'

import { axios, endpoints } from '../../utils'
import q from '../../utils/questions/inst'

const FormIns = ({
  enqueueSnackbar,
  location: { state: { formData } },
  history: { goBack }
}) => {
  const firstRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [nro, setNro] = useState(formData.nro || '')
  const [ins1, setIns1] = useState(formData.ins1 || '')
  const [ins2, setIns2] = useState(formData.ins2 || '')
  const [ins3, setIns3] = useState(formData.ins3 || '')
  const [ins4, setIns4] = useState(formData.ins4 || '')
  const [ins5, setIns5] = useState(formData.ins5 || '')
  const [ins6, setIns6] = useState(formData.ins6 || '')
  const [ins7, setIns7] = useState(formData.ins7 || '')
  const [ins8, setIns8] = useState(formData.ins8 || '0')
  const [ins9, setIns9] = useState(formData.ins9 || '')
  const [ins10, setIns10] = useState(formData.ins10 || '0')
  const [ins11, setIns11] = useState(formData.ins11 || '0')
  const [ins12, setIns12] = useState(formData.ins12 || '')
  const [ins13a, setIns13a] = useState(formData.ins13a || '')
  const [ins13b, setIns13b] = useState(formData.ins13b || '')
  const [ins13c, setIns13c] = useState(formData.ins13c || '')
  const [ins13d, setIns13d] = useState(formData.ins13d || '')
  const [ins13e, setIns13e] = useState(formData.ins13e || '')
  const [ins13f, setIns13f] = useState(formData.ins13f || '')
  const [ins13g, setIns13g] = useState(formData.ins13g || '')
  const [ins13h, setIns13h] = useState(formData.ins13h || '')
  const [ins13i, setIns13i] = useState(formData.ins13i || '')
  const [ins13j, setIns13j] = useState(formData.ins13j || '')
  const [ins13k, setIns13k] = useState(formData.ins13k || '')
  const [ins13l, setIns13l] = useState(formData.ins13l || '')
  const [ins13m, setIns13m] = useState(formData.ins13m || '')
  const [ins14, setIns14] = useState(formData.ins14 || '')
  const [ins15, setIns15] = useState(formData.ins15 || '')
  const [ins15a, setIns15a] = useState(formData.ins15a || '')
  const [ins16, setIns16] = useState(formData.ins16 || '')
  const [ins17, setIns17] = useState(formData.ins17 || '')
  const [ins18, setIns18] = useState(formData.ins18 || '')
  const [ins19, setIns19] = useState(formData.ins19 || '')
  const [ins20, setIns20] = useState(formData.ins20 || '')
  const [ins21, setIns21] = useState(formData.ins21 || '')
  const [ins22, setIns22] = useState(formData.ins22 || '')
  const [ins23, setIns23] = useState(formData.ins23 || '')
  const [ins24, setIns24] = useState(formData.ins24 || '')
  const [ins25, setIns25] = useState(formData.ins25 || '')
  const [ins26, setIns26] = useState(formData.ins26 || '')
  const [ins27, setIns27] = useState(formData.ins27 || '')
  const [ins28, setIns28] = useState(formData.ins28 || '')
  const [ins29, setIns29] = useState(formData.ins29 || '')
  const [ins30, setIns30] = useState(formData.ins30 || '')
  const [ins31, setIns31] = useState(formData.ins31 || '')
  const [ins32, setIns32] = useState(formData.ins32 || '')
  const [ins33, setIns33] = useState(formData.ins33 || '')
  const [ins34, setIns34] = useState(formData.ins34 || '')
  const [ins35, setIns35] = useState(formData.ins35 || '')
  const [ins36, setIns36] = useState(formData.ins36 || '')
  const [ins37, setIns37] = useState(formData.ins37 || '2000-11-01')

  const scrollToTop = () => window.scrollTo(0, firstRef.current.offsetTop)

  const checkExistence = () => {
    setLoading(true)
    axios.get(endpoints.searchFormIns(nro))
      .then(() => {
        setLoading(false)
        enqueueSnackbar(
          'El formulario ya fue registrado',
          { variant: 'warning' }
        )
        setNro('')
      })
      .catch(({ response }) => {
        setLoading(false)
        if (response && response.data && response.data.content) {
          enqueueSnackbar(`${response.data.content}. Puede continuar...`)
          return
        }
        enqueueSnackbar(
          'Hubo un error verificando el formulario',
          { variant: 'error' }
        )
      })
  }

  const isUpdate = Object.keys(formData).length > 0

  const getData = () => ({
    nro,
    ins1,
    ins2,
    ins3,
    ins4,
    ins5,
    ins6,
    ins7,
    ins8,
    ins9,
    ins10,
    ins11,
    ins12,
    ins13a,
    ins13b,
    ins13c,
    ins13d,
    ins13e,
    ins13f,
    ins13g,
    ins13h,
    ins13i,
    ins13j,
    ins13k,
    ins13l,
    ins13m,
    ins14,
    ins15,
    ins15a,
    ins16,
    ins17,
    ins18,
    ins19,
    ins20,
    ins21,
    ins22,
    ins23,
    ins24,
    ins25,
    ins26,
    ins27,
    ins28,
    ins29,
    ins30,
    ins31,
    ins32,
    ins33,
    ins34,
    ins35,
    ins36,
    ins37
  })

  const onSubmit = () => {
    if (nro.charAt(0) === '0') {
      enqueueSnackbar('El NRO de Formulario no debe tener 0\'s (ceros) por delante.')
      return
    }
    setLoading(true)
    const data = getData()
    axios.post(endpoints.formIns, data).then(() => {
      setLoading(false)
      enqueueSnackbar(
        'Formulario enviado correctamente',
        { variant: 'success' }
      )
      scrollToTop()
      setNro('')
      setIns1('')
      setIns2('')
      setIns3('')
      setIns4('')
      setIns5('')
      setIns6('')
      setIns7('')
      setIns8('0')
      setIns9('')
      setIns10('0')
      setIns11('0')
      setIns12('')
      setIns13a('')
      setIns13b('')
      setIns13c('')
      setIns13d('')
      setIns13e('')
      setIns13f('')
      setIns13g('')
      setIns13h('')
      setIns13i('')
      setIns13j('')
      setIns13k('')
      setIns13l('')
      setIns13m('')
      setIns14('')
      setIns15('')
      setIns15a('')
      setIns16('')
      setIns17('')
      setIns18('')
      setIns19('')
      setIns20('')
      setIns21('')
      setIns22('')
      setIns23('')
      setIns24('')
      setIns25('')
      setIns26('')
      setIns27('')
      setIns28('')
      setIns29('')
      setIns30('')
      setIns31('')
      setIns32('')
      setIns33('')
      setIns34('')
      setIns35('')
      setIns36('')
      setIns37('2000-11-01')
    }).catch((e) => {
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
    axios.put(endpoints.formIns, data)
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario Actualizado', { variant: 'success' })
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
    axios.delete(endpoints.formIns, { data })
      .then(() => {
        setLoading(false)
        enqueueSnackbar('Formulario eliminado')
        goBack()
      })
      .catch((err) => {
        setLoading(false)
        enqueueSnackbar(`Error al eliminar formulario: ${err.message}`, { variant: 'error' })
      })
  }

  return (
    <Fragment>
      <Title title="Cuestionario para Instituciones." />
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
        <Simple width={12} value={ins1} text={q.ins1.title} setter={setIns1} />
        <Simple width={6} value={ins2} text={q.ins2.title} setter={setIns2} />
        <Simple width={6} value={ins3} text={q.ins3.title} setter={setIns3} />
        <Simple width={6} value={ins4} text={q.ins4.title} setter={setIns4} />
        <Simple width={6} value={ins5} text={q.ins5.title} setter={setIns5} />
        <Simple width={12} value={ins6} text={q.ins6.title} setter={setIns6} />
        <Simple width={12} value={ins7} text={q.ins7.title} setter={setIns7} />
        <CustomOption width={4} value={ins8} text={q.ins8.title} setter={setIns8} options={q.ins8.options} />
        <CustomInputs width={8} upTo={22} value={ins9} text={q.ins9.title} setter={setIns9} />
        <Option width={4} value={ins10} text={q.ins10.title} setter={setIns10} options={q.ins10.options} />
        <Option width={4} value={ins11} text={q.ins11.title} setter={setIns11} options={q.ins11.options} />
        <Simple width={4} value={ins12} text={q.ins12.title} setter={setIns12} />
      </FieldSet>
      <FieldSet title="II. Aspectos Laborales">
        <Simple width={12} value={ins13a} text={q.ins13a.title} setter={setIns13a} />
        <Simple width={12} value={ins13b} text={q.ins13b.title} setter={setIns13b} />
        <Simple width={12} value={ins13c} text={q.ins13c.title} setter={setIns13c} />
        <Simple width={12} value={ins13d} text={q.ins13d.title} setter={setIns13d} />
        <Simple width={12} value={ins13e} text={q.ins13e.title} setter={setIns13e} />
        <Simple width={12} value={ins13f} text={q.ins13f.title} setter={setIns13f} />
        <Simple width={12} value={ins13g} text={q.ins13g.title} setter={setIns13g} />
        <Simple width={12} value={ins13h} text={q.ins13h.title} setter={setIns13h} />
        <Simple width={12} value={ins13i} text={q.ins13i.title} setter={setIns13i} />
        <Simple width={12} value={ins13j} text={q.ins13j.title} setter={setIns13j} />
        <DobleInput width={12} value={ins13k} text1={q.ins13k.title} text2="Valor" setter={setIns13k} />
        <DobleInput width={12} value={ins13l} text1={q.ins13l.title} text2="Valor" setter={setIns13l} />
        <DobleInput width={12} value={ins13m} text1={q.ins13m.title} text2="Valor" setter={setIns13m} />
        <CustomInputs width={12} upTo={4} value={ins14} text={q.ins14.title} setter={setIns14} />
        <CustomInputs width={6} upTo={0} value={ins15} text1={q.ins15.title} setter={setIns15} />
        <Simple width={6} value={ins15a} text={q.ins15a.title} setter={setIns15a} />
        <CustomInputs width={12} upTo={10} value={ins16} text={q.ins16.title} setter={setIns16} />
      </FieldSet>
      <FieldSet title="III. Perfil Profesional">
        <Multiple width={12} value={ins17} title={q.ins17.title} setter={setIns17} options={q.ins17.options} />
        <Simple width={12} value={ins18} text={q.ins18.title} setter={setIns18} multiline />
      </FieldSet>
      <FieldSet title="IV. Planes de Estudios">
        <Multiple width={12} value={ins19} title={q.ins19.title} setter={setIns19} options={q.ins19.options} />
        <Simple width={12} value={ins20} text={q.ins20.title} setter={setIns20} multiline />
        <Simple width={12} value={ins21} text={q.ins21.title} setter={setIns21} multiline />
        <CustomInputs width={12} upTo={0} value={ins22} text={q.ins22.title} setter={setIns22} />
        <CustomInputs width={12} upTo={0} value={ins23} text={q.ins23.title} setter={setIns23} />
      </FieldSet>
      <FieldSet title="V. Grados, Titulación y Menciones">
        <Multiple width={12} value={ins24} title={q.ins24.title} setter={setIns24} options={q.ins24.options} />
        <Simple width={12} value={ins25} text={q.ins25.title} setter={setIns25} multiline />
        <CustomInputs width={12} upTo={11} value={ins26} text={q.ins26.title} setter={setIns26} />
      </FieldSet>
      <FieldSet title="VI. Áreas de Conocimiento">
        <CustomInputs width={12} upTo={12} value={ins27} text={q.ins27.title} setter={setIns27} />
        <CustomInputs width={12} upTo={12} value={ins28} text={q.ins28.title} setter={setIns28} />
        <CustomInputs width={12} upTo={4} value={ins29} text={q.ins29.title} setter={setIns29} />
        <CustomInputs width={12} upTo={4} value={ins30} text={q.ins30.title} setter={setIns30} />
        <CustomInputs width={12} upTo={12} value={ins31} text={q.ins31.title} setter={setIns31} />
      </FieldSet>
      <FieldSet title="VII. Competencias del profesional en el Área de Informática y Sistemas">
        <Multiple width={12} value={ins32} title={q.ins32.title} setter={setIns32} options={q.ins32.options} />
        <Multiple width={12} value={ins33} title={q.ins33.title} setter={setIns33} options={q.ins33.options} />
        <CustomInputs width={12} upTo={21} value={ins34} text={q.ins34.title} setter={setIns34} />
      </FieldSet>
      <FieldSet title="VIII. Sugerencias">
        <Simple width={12} value={ins35} text={q.ins35.title} setter={setIns35} multiline />
      </FieldSet>
      <FieldSet title="Datos de la Encuesta">
        <Simple width={8} value={ins36} text={q.ins36.title} setter={setIns36} />
        <Simple width={4} value={ins37} text={q.ins37.title} type="date" setter={setIns37} />
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

export default withSnackbar(FormIns)
