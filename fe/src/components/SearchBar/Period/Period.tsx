import React from 'react';
import styled from 'styled-components';

const StyledPeriod = styled.li`
  width: 321px;
  margin-left: 20px;

  section {
    width: 112px;
  }
`;

export default function Period() {
  return (
    <StyledPeriod>
      <section>
        <h3>체크인</h3>
        <p>날짜입력</p>
      </section>
      <section>
        <h3>체크아웃</h3>
        <p>날짜입력</p>
      </section>
    </StyledPeriod>
  );
}
