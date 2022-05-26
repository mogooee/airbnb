import styled from 'styled-components';

export default styled.nav`
  ul {
    display: flex;
  }

  li + li {
    margin-left: 24px;
  }
`;
