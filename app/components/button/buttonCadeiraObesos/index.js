import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ChairIcon from '@mui/icons-material/Chair';
import { Typography } from '@mui/material';

export default function BotaoCadeiraGordo({ children }) {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton size="small" aria-label="Cadeirantes">
        <ChairIcon fontSize="small" />
        <Typography>{children}</Typography>
      </IconButton>
    </Stack>
  );
}