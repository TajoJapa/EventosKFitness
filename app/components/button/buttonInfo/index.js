import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import CardBasico from '../../card';

export default function BotaoInformacoes() {
  return (

      <Button sx={{backgroundColor:"#06aaee",width:"25%",height:"100%",fontSize:"30px"}}  variant="contained" endIcon={<HelpCenterIcon sx={{ fontSize: 40 }} />}>Informações</Button>
  );
}