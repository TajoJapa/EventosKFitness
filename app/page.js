'next/babel'

import { Box, CardMedia, Grid, Typography } from '@mui/material'

import BotaoInformacoes from './components/button/buttonInfo'
import BotaoLista from './components/button/buttonLista'
import BotaoPalco from './components/button/buttonPalco'
import CardBasico from './components/card'

export default function Home() {
  return (
      <div style={{position:'fixed',top:'0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',zIndex: -2}} >

        <Grid container >
          <Grid item xs={12} sx={{display:'flex',justifyContent:'space-around',marginTop:'80px'}}>
            <BotaoInformacoes ></BotaoInformacoes>
            <BotaoPalco></BotaoPalco>
            <BotaoLista></BotaoLista>
          </Grid>
        </Grid>
        <Box>
        </Box>
      </div>
  )
}
