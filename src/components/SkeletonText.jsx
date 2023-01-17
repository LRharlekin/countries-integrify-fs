import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function Variants() {
  return (
    {/* Wrap inside a Stack mui component */}
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </Stack>
  );
}