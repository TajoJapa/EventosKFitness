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
    <>
    <Card xs={15} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
          <Typography>A</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >A</Typography>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraGordo>10</BotaoCadeiraGordo>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >B</Typography>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >C</Typography>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >D</Typography>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >E</Typography>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >F</Typography>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >G</Typography>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >H</Typography>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >I</Typography>
          <BotaoCadeiraSimples>38</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>36</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >J</Typography>
          <BotaoCadeiraSimples>38</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>36</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >K</Typography>
          <BotaoCadeiraSimples>40</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>38</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>36</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >L</Typography>
          <BotaoCadeiraSimples>42</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>40</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>38</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>36</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraPmr>16</BotaoCadeiraPmr>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >M</Typography>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
        </Grid>
        </CardContent>
        </Card>
        <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>B</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >A</Typography>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11 </BotaoCadeiraSimples>
          
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >B</Typography>
           <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11 </BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >C</Typography>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >D</Typography>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >E</Typography>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >F</Typography>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >G</Typography>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >H</Typography>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >I</Typography>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >J</Typography>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >K</Typography>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >L</Typography>
          <BotaoCadeiraGordo>14</BotaoCadeiraGordo>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraGordo>15</BotaoCadeiraGordo>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >M</Typography>
          <BotaoCadeiraPmr>16</BotaoCadeiraPmr>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }}>N</Typography>
          <BotaoCadeiraPmr>16</BotaoCadeiraPmr>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
       </Grid>
       </CardContent>
       </Card> 
       <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>C</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >A</Typography>
          <BotaoCadeiraGordo>13</BotaoCadeiraGordo>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >B</Typography>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >C</Typography>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >D</Typography>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >E</Typography>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >F</Typography>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >G</Typography>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>35</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >H</Typography>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>35</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>37</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >I</Typography>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>35</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>37</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>39</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >J</Typography>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>35</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>37</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>39</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >K</Typography>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>35</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>37</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>39</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>41</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>43</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >L</Typography>
          <BotaoCadeiraGordo>17</BotaoCadeiraGordo>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>35</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>37</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>39</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>41</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >M</Typography>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeirante></BotaoCadeirante>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraPmr>27</BotaoCadeiraPmr>
        </Grid>
       </CardContent>
       </Card> 
       <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>D</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >P</Typography>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >O</Typography>
          <BotaoCadeiraSimples>36</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>34</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>32</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>30</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>28</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>26</BotaoCadeiraSimples>
        </Grid>
       </CardContent>
       </Card> 
       <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>E</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }}>P</Typography>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraGordo>14</BotaoCadeiraGordo>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >O</Typography>
          <BotaoCadeiraSimples>24</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>22</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>20</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>18</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>16</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>14</BotaoCadeiraSimples>
        </Grid>
       </CardContent>
       </Card> 
       <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>F</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }}>P</Typography>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >O</Typography>
          <BotaoCadeiraSimples>12</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>10</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>08</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>06</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>04</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>02</BotaoCadeiraSimples>
        </Grid>
       </CardContent>
       </Card> 
       <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>G</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }}>P</Typography>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >O</Typography>
          <BotaoCadeiraSimples>01</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>03</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>05</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>07</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>09</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>11</BotaoCadeiraSimples>
        </Grid>
       </CardContent>
       </Card> 
       <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>H</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }}>P</Typography>
          <BotaoCadeiraGordo>13</BotaoCadeiraGordo>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >O</Typography>
          <BotaoCadeiraSimples>13</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>15</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>17</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>19</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>21</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
        </Grid>
       </CardContent>
       </Card> 
       <Card xs={12} sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
        <Typography>I</Typography>
        <Grid container>
          <Typography sx={{ fontSize: 30 }}>P</Typography>
          <BotaoCadeiraSimples>23</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
        </Grid>
        <Grid container>
          <Typography sx={{ fontSize: 30 }} >O</Typography>
          <BotaoCadeiraSimples>25</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>27</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>29</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>31</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>33</BotaoCadeiraSimples>
          <BotaoCadeiraSimples>35</BotaoCadeiraSimples>
        </Grid>
       </CardContent>
       </Card> 
  </> 
);
}
       

    
