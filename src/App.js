import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Components/Header';
import HomePage from './Components/Home Page/HomePage';
import AnimeDetails from './Components/AnimeDetails';
import AnimeCard from './Components/AnimeCard/AnimeCard'


class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Header />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/dashboard' exact component={AnimeCard} />
              <Route path='/:animeId' component={AnimeDetails} />
            </Switch>
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

const AppWrapper = styled.div`
  text-align: center;
  font-size: calc(10px + 1vmin);
  color: white;
        `

export default App;
