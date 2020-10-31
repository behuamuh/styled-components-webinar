import React from 'react';
import styled, { createGlobalStyle  } from 'styled-components'
import Page from './components/Page';

function App({ className }) {
  return (
    <Wrapper className={className}>
      <StyledPage />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: lightgrey;
  min-height: 100vh;
  display: flex;
`;

const StyledPage = styled(Page)`
  margin-top: 50px;
`;

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;