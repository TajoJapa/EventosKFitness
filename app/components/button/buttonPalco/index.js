import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

export default function BotaoPalco() {
  return (
      <Button sx={{backgroundColor:"#06aaee"}}  endIcon={<TheaterComedyIcon sx={{ fontSize: 40 }} />}  variant="contained">Palco</Button>
  );
}