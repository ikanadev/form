import React, { Fragment, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import FieldSet from '../../Components/FieldSet/FieldSet'

import Simple from '../../Components/Form/Simple'
import Option from '../../Components/Form/Option'
import CustomOption from '../../Components/Form/CustomOption'
import CustomInputs from '../../Components/Form/CustomInputs'
import MultiOption from '../../Components/Form/MultiOption'

export default () => {
  // ASPECTOS GENERALES
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

  // VINCULACION CON LA CARRERA
  const [est16, setEst16] = useState('1')
  const [est17, setEst17] = useState('')
  const [est18, setEst18] = useState('')

  const handleValue = setter => (e) => {
    const { value } = e.target
    // console.log(value)
    setter(value)
  }
  const handleFlatValue = setter => (value) => {
    console.log('CHIPS', est17, est18)
    setter(value)
  }
  return (
    <Fragment>
      <Typography color="primary" variant="h4">
        Cuestionario para Estudiantes
      </Typography>
      <FieldSet title="I. Aspectos Generales">
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
          width={3}
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
          width={4}
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
          width={4}
          onChange={handleFlatValue(setEst17)}
          text="Motivos por que eligió la carrera"
        />
        <MultiOption
          width={4}
          onChange={handleFlatValue(setEst18)}
          title="Área de preferencia en la Carrera:"
          options={[
            'Programación',
            'Desarrollo de Sistemas',
            'Algorítmica',
            'Redes',
            'Inteligencia Artificial',
            'Big Data',
            'Desarrollo Web',
            'Robótica',
            'Otros'
          ]}
        />
      </FieldSet>
    </Fragment>
  )
}
