import React from 'react';
import { Button } from '@mui/material';
import { ReactComponent as DeleteIcon } from 'img/svg/delete.svg';

export default function Delete() {
  return (
    <Button disableRipple disableFocusRipple>
      <DeleteIcon />
    </Button>
  );
}
