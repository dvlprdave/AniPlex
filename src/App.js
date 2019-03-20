import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import theme from './config/theme';

import Header from './Components/Header';
import ProfileSearch from './Components/ProfileSearch';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header />
          <ProfileSearch />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

const AppWrapper = styled.div`
  background-color: #473759;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
