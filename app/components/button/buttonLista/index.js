import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function BotaoLista() {
  return (
      <Button sx={{backgroundColor:"#06aaee"}}  endIcon={<ListAltIcon sx={{ fontSize: 40 }} />}  variant="contained">Lista de Presença</Button>
  );
}