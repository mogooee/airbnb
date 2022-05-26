import React from 'react';
import StyledSearchBar from 'components/SearchBar/SearchBar.styled';
import Period from 'components/SearchBar/Period/Period';
import Price from 'components/SearchBar/Price/Price';
import Personnel from 'components/SearchBar/Personnel/Personnel';
import SplitLine from 'components/SearchBar/SplitLine';

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <span id="searchLabel">검색 시작하기</span>
      <ul>
        <Period />
        <SplitLine />
        <Price />
        <SplitLine />
        <Personnel />
      </ul>
    </StyledSearchBar>
  );
}
