import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BotaoCadeiraGordo from '../button/buttonCadeiraObesos';
import BotaoCadeiraPmr from '../button/buttonCadeiraPmr';
import BotaoCadeiraSimples from '../button/buttonCadeira';
import BotaoCadeirante from '../button/buttonAlejado';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function Palco() {
  return (
    <Card xs={12} sx={{ width: '100%',height:'100%',display:'flex',flexDirection:'column' }}>
      <CardContent>
        <Grid container>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeiraGordo>adds</BotaoCadeiraGordo>
          <BotaoCadeiraGordo>adddds</BotaoCadeiraGordo>
          <BotaoCadeiraPmr >d</BotaoCadeiraPmr>
        </Grid>
      </CardContent>
    </Card>
  );
}