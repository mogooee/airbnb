import React from 'react';
import { Button } from '@mui/material';
import { ReactComponent as LoginIcon } from 'img/svg/login.svg';

export default function AccountMenu() {
  return (
    <Button disableRipple disableFocusRipple>
      <LoginIcon className="loginIcon" />
    </Button>
  );
}
