import React from 'react';
import styled from 'styled-components';
import AccountMenu from 'components/GNB/AccountMenu/AccountMenu';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';

const StyledGNB = styled.div`
  display: flex;
  justify-conents: center;
  align-items: center;
`;

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
