import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Components/Header';
import HomePage from './Components/Home Page/HomePage';
import RoutePage from './Components/RoutePage'
import AnimeDetails from './Components/AnimeDetails';


class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <Header />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/route page' component={RoutePage} />
              <Route path='/:animeId' exact component={AnimeDetails} />
            </Switch>
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

const AppWrapper = styled.div`
  /* background-color: #000000; */
  /* background-image: linear-gradient(147deg, #000000 0%, #04619f 74%); */
  /* height: 100vh; */
  text-align: center;
  /* font-size: calc(10px + 1vmin); */
  color: white;
        `

export default App;
