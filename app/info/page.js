'next/babel'
"use client";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBasico from "../components/card";



export default function InfoPage() {
  return (
    <div style={{position:'fixed',top:'0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',zIndex: -2}}>
      <CardBasico>
        Informações de :

        Links da Academia,contatos,consulta geral de dados da academia !
        nome de funcionários e etc...
      </CardBasico>
    </div>
  )
}
