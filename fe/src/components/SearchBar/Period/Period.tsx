import React from 'react';
import StyledPeriod from 'components/SearchBar/Period/Period.styled';

function CheckIn() {
  return (
    <section>
      <h3>체크인</h3>
      <p>날짜입력</p>
    </section>
  );
}

function CheckOut() {
  return (
    <section>
      <h3>체크아웃</h3>
      <p>날짜입력</p>
    </section>
  );
}

export default function Period() {
  return (
    <StyledPeriod>
      <CheckIn />
      <CheckOut />
    </StyledPeriod>
  );
}
