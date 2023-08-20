import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardBotao(props) {
  return (
    <Card sx={{ maxWidth: 600 , backgroundColor:"#06aaee" ,display:'flex',justifyContent:'center',alignItems:'center' }}>
      <CardActionArea>
        <CardMedia/>
        <CardContent >
          <Typography  variant="h2" sx={{color:"black",fontWeight:'bold'}} >
            {props.children}
            
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}