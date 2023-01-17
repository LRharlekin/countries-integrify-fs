import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function Variants() {
  return (
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
  );
}
