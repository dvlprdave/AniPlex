import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import AnimeSearchForm from './AnimeSearchForm';

const Header = () => (
  <HeaderBar>
    <Link to='/'>
      <Title>Anidex</Title>
    </Link>
    <AnimeSearchForm />
  </HeaderBar>
)

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 10vh;
  padding: 0 3rem;
  background: inherit;
  color: black;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
`

export default Header