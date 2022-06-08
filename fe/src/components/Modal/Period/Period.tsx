import React from 'react';
import styled from 'styled-components';
import Callendar from 'components/common/Callendar';
import { ModalProps, PeriodType } from 'components/SearchBar/types';

const StyledCallendarModal = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit,minmax(50%,auto));
  ${({ callendarNum }) => {
    const maxNumOfLine = 2;
    return (
      callendarNum > maxNumOfLine &&
      `
  overflow-y: scroll;
  height: 35vh;
  `
    );
  }}

  button {
  padding: 0;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }

`;

export default function Period({ search, addSearch }: ModalProps<PeriodType>): JSX.Element {
  const checkIn = Number(search.checkIn);
  const checkOut = Number(search.checkOut);
  const callendarNum = 2;

  return (
    <StyledCallendarModal callendarNum={callendarNum}>
      <Callendar callendarNum={callendarNum} checkIn={checkIn} checkOut={checkOut} addSearch={addSearch} />
    </StyledCallendarModal>
  );
}
