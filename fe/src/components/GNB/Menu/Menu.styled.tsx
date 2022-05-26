import styled from 'styled-components';

export default styled.ul`
  display: flex;

  li + li {
    margin-left: 24px;
  }
`;
