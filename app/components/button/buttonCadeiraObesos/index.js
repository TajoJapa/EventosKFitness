import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ChairIcon from '@mui/icons-material/Chair';

export default function BotaoCadeiraGordo() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Cadeirantes">
        <ChairIcon/>
      </IconButton>
    </Stack>
  );
}