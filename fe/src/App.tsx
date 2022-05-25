import React from 'react';
import Routers from 'components/Routers/Routers';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routers />
    </div>
  );
}

export default App;
