import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Typography } from '@mui/material';

export default function BotaoCadeirante({ children }) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton  aria-label="Cadeirantes">
        <AccessibleIcon fontSize="small"  />
        <Typography>{ children }</Typography>
      </IconButton>
    </Stack>
  );
}