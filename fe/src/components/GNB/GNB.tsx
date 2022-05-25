import React from 'react';
import StyledGNB from 'components/GNB/GNB.styled';
import Logo from 'components/GNB/Logo/Logo';
import Menu from 'components/GNB/Menu/Menu';
import AccountMenu from 'components/GNB/AccountMenu/AccountMenu';

function GNB() {
  return (
    <StyledGNB>
      <Logo />
      <Menu />
      <AccountMenu />
    </StyledGNB>
  );
}

export default GNB;
