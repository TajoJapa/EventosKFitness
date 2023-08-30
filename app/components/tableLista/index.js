
'next/babel'
"use client";

import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import BotaoAdicionar from "../button/buttonAdd";
import CardBasico from "../card";


const originalRows = [
  { name: "Michael Jackson", cadeira: 'a22', pago: 6.0, obs: 'Alguma informação da pessoa ' },
  { name: "Thiago Leão", cadeira: 300, pago: 6.0, obs: 'Alguma informação da pessoa ' },
  { name: "Karina Leão", cadeira: 400, pago: 6.0, obs: 'Alguma informação da pessoa ' },
  { name: "Jonas Brothers", cadeira: 500, pago: 6.0, obs: 'Alguma informação da pessoa ' },
  { name: "Bia Da Recepção", cadeira: 600, pago: 6.0, obs: 'Alguma informação da pessoa ' },
  { name: "Sei la", cadeira: 700, pago: 6.0, obs: 'Alguma informação da pessoa ' },
  { name: "Qualquer Nome", cadeira: 600, pago: 6.0, obs: 'Alguma informação da pessoa ' },
  
 
];

export default function TabelaSearch() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
      const filteredRows = originalRows.filter((row) => {
          return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };
    
    const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
};

  return (
    <>
    <div xs={6} style={{ justifyContent:'start',margin:'60px'}}>

      <Paper   >
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
          />
        <TableContainer >
          <Table   aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell >Nome</TableCell>
                <TableCell  align="center">Cadeira</TableCell>
                <TableCell align="center">Pago</TableCell>
                <TableCell align="center">Observação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.cadeira}</TableCell>
                  <TableCell align="center">{row.pago}</TableCell>
                  <TableCell align="center">{row.obs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

    </div>
   
    </>
  );
}
