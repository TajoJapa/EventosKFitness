'next/babel'

import { Box, CardMedia, Grid, Typography } from '@mui/material'

import BotaoInformacoes from './components/button/buttonInfo'
import BotaoLista from './components/button/buttonLista'
import BotaoPalco from './components/button/buttonPalco'
import CardBasico from './components/card'
import CardBotao from './components/cardButton'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Link from 'next/link'



export default function Home() {
  return (
        <div style={{position:'fixed',top:'0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',zIndex: -2}}>

        <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
          <img width={'30%'} height={'40%'} src="logo.jpeg"/>
        </Box>
        <Grid container  >
          <Grid item xs={12} sx={{display:'flex',justifyContent:'space-around',flexDirection:'row',marginTop:'60px'}}>
            <Link href="/palco">
          <CardBotao>
            Palco
            <TheaterComedyIcon sx={{ fontSize: 40 }} ></TheaterComedyIcon>
          </CardBotao>
            </Link>
          <Link href="/info" >
          <CardBotao>
            Informações
            <HelpOutlineIcon sx={{ fontSize: 40 }} ></HelpOutlineIcon>
          </CardBotao>
          </Link>
          <Link href="/lista"> 
          <CardBotao>
            Lista
            <ChecklistIcon sx={{ fontSize: 40 }} ></ChecklistIcon>
          </CardBotao>
          </Link>
          </Grid>
        </Grid>
        <Grid xs={6}>
        </Grid>
        </div>
  )
}
