'next/babel'

import ModalBasico from "../components/modal"

export default function PalcoPage() {
  return (
    <div style={{position:'fixed',top:'0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',zIndex: -2}}>
      <ModalBasico></ModalBasico>
    </div>
  )
}
