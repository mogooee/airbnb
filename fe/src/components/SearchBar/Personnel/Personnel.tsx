import React from 'react';
import { Button } from '@mui/material';
import { ReactComponent as SearchIcon } from 'img/svg/search-icon.svg';
import StyledPersonnel from 'components/SearchBar/Personnel/Personnel.styled';

function PersonnelArea() {
  return (
    <section>
      <h3>인원</h3>
      <p>게스트 추가</p>
    </section>
  );
}

function SearchButton() {
  return (
    <Button style={{ backgroundColor: 'transparent' }}>
      <SearchIcon />
    </Button>
  );
}

export default function Personnel() {
  return (
    <StyledPersonnel>
      <PersonnelArea />
      <SearchButton />
    </StyledPersonnel>
  );
}
