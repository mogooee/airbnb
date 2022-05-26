import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { ReactComponent as SearchIcon } from 'img/svg/search-icon.svg';

const StyledPersonnel = styled.li`
  width: 274px;
  section {
    width: 194px;
  }
`;

export default function Personnel() {
  return (
    <StyledPersonnel>
      <section>
        <h3>인원</h3>
        <p>게스트 추가</p>
      </section>
      <Button style={{ backgroundColor: 'transparent' }}>
        <SearchIcon />
      </Button>
    </StyledPersonnel>
  );
}
