'next/babel'
"use client";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBasicInformacoes from "../components/card/cardinformacoes";




export default function InfoPage() {
  return (
    <div style={{position:'fixed',top:'0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',zIndex: -2}}>
     <CardBasicInformacoes></CardBasicInformacoes>
    </div>
  )
}
