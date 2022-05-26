import React from 'react';
import styled from 'styled-components';

const StyledPrice = styled.li`
  width: 233px;
`;

export default function Price() {
  return (
    <StyledPrice>
      <section>
        <h3>요금</h3>
        <p>금액대 설정</p>
      </section>
    </StyledPrice>
  );
}
