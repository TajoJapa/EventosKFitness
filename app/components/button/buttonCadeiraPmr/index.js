import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ChairTwoToneIcon from '@mui/icons-material/ChairTwoTone';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { Typography } from '@mui/material';

export default function BotaoCadeiraPmr({children}) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton fontSize="small"  aria-label="Cadeirantes">
        <EventSeatIcon fontSize="small" />
        <Typography>{children}</Typography>
      </IconButton>
    </Stack>
  );
}