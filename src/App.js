import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RouterAnimeProvider } from './store/AnimeContext'

import Header from './Components/Header';
import HomePage from './Components/HomePage';
import AnimeDetails from './Components/AnimeDetails';
import AnimeCard from './Components/AnimeCard'


const App = () => {
  return (
    <Router >
      <RouterAnimeProvider>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Header />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/searched-anime' exact component={AnimeCard} />
              <Route path='/:animeId' exact component={AnimeDetails} />
            </Switch>
          </AppWrapper>
        </ThemeProvider>
      </RouterAnimeProvider>
    </Router>
  );
}


const AppWrapper = styled.div`
  text-align: center;
  font-size: calc(10px + 1vmin);
  color: white;
`

export default App;
