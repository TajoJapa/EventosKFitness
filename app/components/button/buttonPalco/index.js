import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export default function BotaoPalco() {
  return (
      <Button sx={{backgroundColor:"#06aaee",width:"25%",height:"100%",fontSize:"30px"}}  endIcon={<TheaterComedyIcon sx={{ fontSize: 40 }} />}  variant="contained">Palco</Button>
  );
}