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
import q from '../../utils/questions/doc'

const FormDoc = ({
  enqueueSnackbar,
  location: { state: { formData } },
  history: { goBack }
}) => {
  const firstRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [nro, setNro] = useState(formData.nro || '')
  // I. ASPECTOS GENERALES
  const [doc1, setDoc1] = useState(formData.doc1 || '')
  const [doc2, setDoc2] = useState(formData.doc2 || '')
  const [doc3, setDoc3] = useState(formData.doc3 || '')
  const [doc4, setDoc4] = useState(formData.doc4 || '')
  const [doc5, setDoc5] = useState(formData.doc5 || '0')
  const [doc6, setDoc6] = useState(formData.doc6 || '0')
  const [doc7, setDoc7] = useState(formData.doc7 || '0')
  const [doc8, setDoc8] = useState(formData.doc8 || '0')
  const [doc9, setDoc9] = useState(formData.doc9 || '')
  const [doc10, setDoc10] = useState(formData.doc10 || '')
  const [doc11, setDoc11] = useState(formData.doc11 || '')
  const [doc12, setDoc12] = useState(formData.doc12 || '')
  const [doc13, setDoc13] = useState(formData.doc13 || '')
  const [doc14a, setDoc14a] = useState(formData.doc14a || '')
  const [doc14b, setDoc14b] = useState(formData.doc14b || '')
  const [doc14c, setDoc14c] = useState(formData.doc14c || '')
  const [doc14d, setDoc14d] = useState(formData.doc14d || '')
  const [doc15, setDoc15] = useState(formData.doc15 || '')
  // II. VINCULACIÓN CON LA CARRERA
  const [doc16, setDoc16] = useState(formData.doc16 || '0')
  const [doc17, setDoc17] = useState(formData.doc17 || '')
  // III. PERFIL PROFESIONAL
  const [doc18, setDoc18] = useState(formData.doc18 || '')
  const [doc19, setDoc19] = useState(formData.doc19 || '')
  const [doc20, setDoc20] = useState(formData.doc20 || '')
  // IV. PLAN DE ESTUDIOS ACTUAL
  const [doc21, setDoc21] = useState(formData.doc21 || '')
  const [doc22, setDoc22] = useState(formData.doc22 || '')
  const [doc23, setDoc23] = useState(formData.doc23 || '')
  const [doc24, setDoc24] = useState(formData.doc24 || '')
  const [doc24a, setDoc24a] = useState(formData.doc24a || '')
  const [doc25, setDoc25] = useState(formData.doc25 || '')
  const [doc25a, setDoc25a] = useState(formData.doc25a || '')
  const [doc26, setDoc26] = useState(formData.doc26 || '')
  const [doc26a, setDoc26a] = useState(formData.doc26a || '')
  const [doc27, setDoc27] = useState(formData.doc27 || '')
  const [doc27a, setDoc27a] = useState(formData.doc27a || '')
  // V. INFRAESTRUCTURA
  const [doc28, setDoc28] = useState(formData.doc28 || '')
  const [doc29, setDoc29] = useState(formData.doc29 || '')
  // VI. GRADOS, TITULACION Y MENCIONES
  const [doc30, setDoc30] = useState(formData.doc30 || '')
  const [doc31, setDoc31] = useState(formData.doc31 || '')
  const [doc32, setDoc32] = useState(formData.doc32 || '')
  const [doc33, setDoc33] = useState(formData.doc33 || '0')
  const [doc34, setDoc34] = useState(formData.doc34 || '')
  const [doc35, setDoc35] = useState(formData.doc35 || '')
  const [doc36, setDoc36] = useState(formData.doc36 || '0')
  // VII. AREAS DE CONOCIMIENTO
  const [doc37, setDoc37] = useState(formData.doc37 || '')
  const [doc38, setDoc38] = useState(formData.doc38 || '')
  const [doc39, setDoc39] = useState(formData.doc39 || '')
  const [doc40, setDoc40] = useState(formData.doc40 || '')
  const [doc41, setDoc41] = useState(formData.doc41 || '')
  // VIII. COMPETENCIAS DEL PROFESIONAL EN EL ÁREA DE LA INFORMÁTICA Y SIST.
  const [doc42, setDoc42] = useState(formData.doc42 || '')
  const [doc43, setDoc43] = useState(formData.doc43 || '')
  const [doc44, setDoc44] = useState(formData.doc44 || '')
  // IX. SUGERENCIAS
  const [doc45, setDoc45] = useState(formData.doc45 || '')
  // DATOS DE LA ENCUESTA
  const [doc46, setDoc46] = useState(formData.doc46 || '')
  const [doc47, setDoc47] = useState(formData.doc47 || '2000-11-01')

  const scrollToTop = () => window.scrollTo(0, firstRef.current.offsetTop)

  const checkExistence = () => {
    setLoading(true)
    axios.get(endpoints.searchFormDoc(nro))
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
    doc1,
    doc2,
    doc3,
    doc4,
    doc5,
    doc6,
    doc7,
    doc8,
    doc9,
    doc10,
    doc11,
    doc12,
    doc13,
    doc14a,
    doc14b,
    doc14c,
    doc14d,
    doc15,
    doc16,
    doc17,
    doc18,
    doc19,
    doc20,
    doc21,
    doc22,
    doc23,
    doc24,
    doc24a,
    doc25,
    doc25a,
    doc26,
    doc26a,
    doc27,
    doc27a,
    doc28,
    doc29,
    doc30,
    doc31,
    doc32,
    doc33,
    doc34,
    doc35,
    doc36,
    doc37,
    doc38,
    doc39,
    doc40,
    doc41,
    doc42,
    doc43,
    doc44,
    doc45,
    doc46,
    doc47
  })

  const onSubmit = () => {
    if (nro.charAt(0) === '0') {
      enqueueSnackbar('El NRO de Formulario no debe tener 0\'s (ceros) por delante.')
      return
    }
    setLoading(true)
    const data = getData()
    axios.post(endpoints.formDoc, data).then(() => {
      setLoading(false)
      enqueueSnackbar(
        'Formulario enviado correctamente',
        { variant: 'success' }
      )
      scrollToTop()
      setNro('')
      setDoc1('')
      setDoc2('')
      setDoc3('')
      setDoc4('')
      setDoc5('0')
      setDoc6('0')
      setDoc7('0')
      setDoc8('0')
      setDoc9('')
      setDoc10('')
      setDoc11('')
      setDoc12('')
      setDoc13('')
      setDoc14a('')
      setDoc14b('')
      setDoc14c('')
      setDoc14d('')
      setDoc15('')
      setDoc16('0')
      setDoc17('')
      setDoc18('')
      setDoc19('')
      setDoc20('')
      setDoc21('')
      setDoc22('')
      setDoc23('')
      setDoc24('')
      setDoc24a('')
      setDoc25('')
      setDoc25a('')
      setDoc26('')
      setDoc26a('')
      setDoc27('')
      setDoc27a('')
      setDoc28('')
      setDoc29('')
      setDoc30('')
      setDoc31('')
      setDoc32('')
      setDoc33('0')
      setDoc34('')
      setDoc35('')
      setDoc36('0')
      setDoc37('')
      setDoc38('')
      setDoc39('')
      setDoc40('')
      setDoc41('')
      setDoc42('')
      setDoc43('')
      setDoc44('')
      setDoc45('')
      setDoc46('')
      setDoc47('2000-11-01')
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
    axios.put(endpoints.formDoc, data)
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
    axios.delete(endpoints.formDoc, { data })
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
      <Title title="Cuestionario para Docentes" />
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
        <Simple width={6} value={doc1} text={q.doc1.title} setter={setDoc1} />
        <Simple width={6} value={doc2} text={q.doc2.title} setter={setDoc2} />
        <Simple width={6} value={doc3} text={q.doc3.title} setter={setDoc3} />
        <Simple width={6} value={doc4} text={q.doc4.title} setter={setDoc4} />
        <Option width={4} value={doc5} text={q.doc5.title} setter={setDoc5} options={q.doc5.options} />
        <CustomOption width={4} value={doc6} text={q.doc6.title} setter={setDoc6} options={q.doc6.options} />
        <CustomOption width={4} value={doc7} text={q.doc7.title} setter={setDoc7} options={q.doc7.options} />
        <Option width={6} value={doc8} text={q.doc8.title} setter={setDoc8} options={q.doc8.options} />
        <CustomInputs width={6} upTo={6} value={doc9} text={q.doc9.title} setter={setDoc9} />
        <CustomInputs width={12} upTo={0} value={doc10} text={q.doc10.title} setter={setDoc10} />
        <CustomInputs width={12} upTo={0} value={doc11} text={q.doc11.title} setter={setDoc11} />
        <CustomInputs width={12} upTo={0} value={doc12} text={q.doc12.title} setter={setDoc12} />
        <CustomInputs width={12} upTo={0} value={doc13} text={q.doc13.title} setter={setDoc13} />
        <DobleInput width={12} value={doc14a} setter={setDoc14a} text1={q.doc14a.title} text2={q.doc14a.title2} />
        <DobleInput width={12} value={doc14b} setter={setDoc14b} text1={q.doc14b.title} text2={q.doc14b.title2} />
        <DobleInput width={12} value={doc14c} setter={setDoc14c} text1={q.doc14c.title} text2={q.doc14c.title2} />
        <DobleInput width={12} value={doc14d} setter={setDoc14d} text1={q.doc14d.title} text2={q.doc14d.title2} />
        <Simple width={12} value={doc15} text={q.doc15.title} setter={setDoc15} />
      </FieldSet>
      <FieldSet title="II. Vinculación con la Carrera">
        <Option width={6} value={doc16} text={q.doc16.title} setter={setDoc16} options={q.doc16.options} />
        <CustomInputs width={6} upTo={8} value={doc17} text={q.doc17.title} setter={setDoc17} />
      </FieldSet>
      <FieldSet title="III. Perfil Profesional">
        <Multiple width={12} value={doc18} title={q.doc18.title} setter={setDoc18} options={q.doc18.options} />
        <Multiple width={12} value={doc19} title={q.doc19.title} setter={setDoc19} options={q.doc19.options} />
        <Simple width={12} value={doc20} text={q.doc20.title} setter={setDoc20} multiline />
      </FieldSet>
      <FieldSet title="IV. Plan de Estudios Actual">
        <Multiple width={12} value={doc21} title={q.doc21.title} setter={setDoc21} options={q.doc21.options} />
        <Simple width={12} value={doc22} text={q.doc22.title} setter={setDoc22} multiline />
        <Simple width={12} value={doc23} text={q.doc23.title} setter={setDoc23} multiline />
        <CustomInputs width={12} upTo={0} value={doc24} text={q.doc24.title} setter={setDoc24} />
        <Simple width={12} value={doc24a} text={q.doc24a.title} setter={setDoc24a} />
        <CustomInputs width={12} upTo={0} value={doc25} text={q.doc25.title} setter={setDoc25} />
        <Simple width={12} value={doc25a} text={q.doc25a.title} setter={setDoc25a} />
        <CustomInputs width={12} upTo={0} value={doc26} text={q.doc26.title} setter={setDoc26} />
        <Simple width={12} value={doc26a} text={q.doc26a.title} setter={setDoc26a} />
        <CustomInputs width={12} upTo={0} value={doc27} text={q.doc27.title} setter={setDoc27} />
        <Simple width={12} value={doc27a} text={q.doc27a.title} setter={setDoc27a} />
      </FieldSet>
      <FieldSet title="V. Infraestructura">
        <Multiple width={12} value={doc28} title={q.doc28.title} setter={setDoc28} options={q.doc28.options} />
        <Simple width={12} value={doc29} text={q.doc29.title} setter={setDoc29} multiline />
      </FieldSet>
      <FieldSet title="VI. Grados, Titulación y Menciones">
        <Multiple width={12} value={doc30} title={q.doc30.title} setter={setDoc30} options={q.doc30.options} />
        <Simple width={12} value={doc31} text={q.doc31.title} setter={setDoc31} multiline />
        <Multiple width={12} value={doc32} title={q.doc32.title} setter={setDoc32} options={q.doc32.options} />
        <CustomOption width={6} value={doc33} text={q.doc33.title} setter={setDoc33} options={q.doc33.options} />
        <CustomInputs width={6} upTo={5} value={doc34} text={q.doc34.title} setter={setDoc34} />
        <CustomOption width={6} value={doc36} text={q.doc36.title} setter={setDoc36} options={q.doc36.options} />
        <DobleInput width={12} value={doc35} setter={setDoc35} text1={q.doc35.title} text2={q.doc35.title2} />
      </FieldSet>
      <FieldSet title="VII. Áreas de Conocimiento">
        <CustomInputs width={6} upTo={12} value={doc37} text={q.doc37.title} setter={setDoc37} />
        <CustomInputs width={6} upTo={12} value={doc38} text={q.doc38.title} setter={setDoc38} />
        <CustomInputs width={4} upTo={4} value={doc39} text={q.doc39.title} setter={setDoc39} />
        <CustomInputs width={3} upTo={4} value={doc40} text={q.doc40.title} setter={setDoc40} />
        <CustomInputs width={5} upTo={12} value={doc41} text={q.doc41.title} setter={setDoc41} />
      </FieldSet>
      <FieldSet title="VIII. Competencias Generales en el Área de la Informática y Sistemas">
        <Multiple width={12} value={doc42} title={q.doc42.title} setter={setDoc42} options={q.doc42.options} />
        <Multiple width={12} value={doc43} title={q.doc43.title} setter={setDoc43} options={q.doc43.options} />
        <CustomInputs width={12} upTo={21} value={doc44} text={q.doc44.title} setter={setDoc44} />
      </FieldSet>
      <FieldSet title="IX. Sugerencias">
        <Simple width={12} value={doc45} text={q.doc45.title} setter={setDoc45} multiline />
      </FieldSet>
      <FieldSet title="Datos de la Encuesta">
        <Simple width={8} value={doc46} text={q.doc46.title} setter={setDoc46} />
        <Simple width={4} value={doc47} text={q.doc47.title} type="date" setter={setDoc47} />
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

export default withSnackbar(FormDoc)
