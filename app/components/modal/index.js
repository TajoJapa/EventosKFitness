'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';
import { FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import BotaoAdicionar from '../button/buttonAdd';
import BotaoCancelar from '../button/buttonCancel';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: 4,
  p: 4,

};

export default function ModalBasico() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>AbrirModal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" color={'dark'} component="h2">
            Adicionar 
          </Typography>
          <Grid container sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}>
              <TextField id="outlined-basic" label="Nome" variant="outlined" />
              <TextField id="outlined-basic" label="Cadeira" variant="outlined" />
            </Grid>
            <Grid item xs={12}  sx={{display:'flex',justifyContent:'space-between', alignItems:'center',marginTop:'20px'}}>
              <FormControlLabel  xs={10} sx={{marginLeft:"50px"}}control={<Switch defaultChecked />} label="Pago?" />
              <TextField xs={2} id="outlined-multiline-static" rows={2} multiline label="Observação" variant="outlined" marginTop={'20px'} /> 
            </Grid>

            <Grid item xs={12} sx={{display:'flex',justifyContent:'space-around',alignItems:'center',marginTop:'20px'}}>
             <BotaoAdicionar></BotaoAdicionar>
              <BotaoCancelar></BotaoCancelar>
            </Grid>
          </Grid>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Alguma outra descrição condizente se precisar
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}