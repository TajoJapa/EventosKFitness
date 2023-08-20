'next/babel'

import { Grid } from "@mui/material"
import TabelaSearch from "../components/tableLista"
import BotaoAdicionar from "../components/button/buttonAdd"
import CardBotao from "../components/cardButton"


export default function ListaPage() {
  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'black' }}>
      <Grid xs={8}>
        <TabelaSearch></TabelaSearch>
      </Grid>
    </div>
  )
}
