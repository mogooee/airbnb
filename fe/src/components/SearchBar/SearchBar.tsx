import React, { useContext } from 'react';
import { useContentModal, ActiveContext } from 'context/ModalProvider';
import styled from 'styled-components';

import StyledSearchBar from 'components/SearchBar/SearchBar.styled';
import Period from 'components/SearchBar/Period/Period';
import Price from 'components/SearchBar/Price/Price';
import Personnel from 'components/SearchBar/Personnel/Personnel';
import SearchList from 'components/SearchBar/SearchList/SearchList';

import { Button } from '@mui/material';
import { ReactComponent as SearchIcon } from 'img/svg/search-icon.svg';
import { ReactComponent as SearchTextIcon } from 'img/svg/search-text-icon.svg';

const SplitLine = styled.div`
  width: 1px;
  height: 44px;
  background: #e0e0e0;
`;

function SearchButton() {
  const isActiveModal = useContext(ActiveContext);
  return (
    <Button style={{ backgroundColor: 'transparent' }}>{isActiveModal ? <SearchTextIcon /> : <SearchIcon />}</Button>
  );
}

export default function SearchBar() {
  const content = useContentModal();

  return (
    <StyledSearchBar isActive={content}>
      <span id="searchLabel">검색 시작하기</span>
      <ul>
        <SearchList Element={Period} id="period" />
        <SplitLine />
        <SearchList Element={Price} id="price" />
        <SplitLine />
        <SearchList Element={Personnel} id="personnel" />
        <SearchButton />
      </ul>
    </StyledSearchBar>
  );
}
