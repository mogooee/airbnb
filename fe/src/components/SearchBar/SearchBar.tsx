import React, { useContext } from 'react';
import styled from 'styled-components';
import { useContentModal, ActiveContext, useSetActiveModal, useSetContentModal } from 'context/ModalProvider';

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

const StyledLi = styled.li`
  padding-left: 10px;
  width: ${({ width }) => width}px;
  max-width: 290px;
  section {
    width: 112px;
  }
  button {
    margin-left: auto;
  }
  position: relative;
  ${({ isActive }) =>
    isActive &&
    `
  background-color:#fff;
  box-shadow: 0px 0px 10px 3px #ebebeb;
  `}
`;

function SearchButton() {
  const isActiveModal = useContext(ActiveContext);
  return (
    <Button style={{ backgroundColor: 'transparent' }}>{isActiveModal ? <SearchTextIcon /> : <SearchIcon />}</Button>
  );
}

export default function SearchBar() {
  const content = useContentModal();

  const setActiveModal = useSetActiveModal();
  const setContent = useSetContentModal();

  const handleModalOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const searchListId = event.currentTarget.id;
    setActiveModal(true);
    setContent(searchListId);
  };

  const isCurrentActive = (id: string): boolean => content === id;
  const searchListArray = [
    { id: 'period', element: Period, width: 361 },
    { id: 'price', element: Price, width: 257 },
    { id: 'personnel', element: Personnel, width: 298 },
  ];

  const searchList = searchListArray.map(({ id, element, width }) => (
    <>
      <StyledLi
        key={`styledLi-${id}`}
        role="button"
        tabIndex={0}
        onClick={handleModalOpen}
        id={id}
        isActive={isCurrentActive(id)}
        width={width}
      >
        <SearchList key={`searchList-${id}`} Element={element} id={id} />
        {id === 'personnel' && <SearchButton key={`searchButton-${id}`} />}
      </StyledLi>
      {id !== 'personnel' && <SplitLine key={`splitLine-${id}`} />}
    </>
  ));

  return (
    <StyledSearchBar isActive={content}>
      <span id="searchLabel">검색 시작하기</span>
      <ul>{searchList}</ul>
    </StyledSearchBar>
  );
}
