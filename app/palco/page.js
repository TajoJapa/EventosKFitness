'next/babel'

import ModalBasico from "../components/modal"
import Palco from "../components/palco"

export default function PalcoPage() {
  return (
    <div style={{position:'fixed',top:'0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',zIndex: -2}}>
      <ModalBasico></ModalBasico>
      <Palco></Palco>
    </div>
  )
}
