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
    <Card xs={12} sx={{ width: '80%',height:'80%',display:'flex',flexDirection:'column' }}>
      <CardContent>
          <Typography> Nome da Sessão !!!!!</Typography>
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
  );
}