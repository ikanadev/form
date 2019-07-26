import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import SaveIcon from '@material-ui/icons/Save'
import SendIcon from '@material-ui/icons/Send'
import DeleteIcon from '@material-ui/icons/Delete'

import ActionButton from '../ActionButton/ActionButton'

const FormActions = ({
  loading,
  onUpdate,
  onDelete,
  onSubmit,
  isUpdate
}) => {
  const [open, setOpen] = useState(false)

  const toggleDialog = () => {
    setOpen(!open)
  }

  return (
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
            onClick={toggleDialog}
            iconRight={<DeleteIcon />}
            secondary
            full
          />
        )
      }
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirmaci&oacute;n
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Est&aacute; seguro que desea eliminar este formulario?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={onDelete}
            color="secondary"
            variant="contained"
            disabled={loading}
            autoFocus
          >
            Si, Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormActions
