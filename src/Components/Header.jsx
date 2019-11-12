import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = () => (
  <HeaderBar>
    <Link to='/'>
      <Title>AniPlex</Title>
    </Link>
    <SearchForm />
  </HeaderBar>
)

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  height: 10vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  color: black;
  background: inherit;

  a {
    /* Remove text decoration from Router Link */
    text-decoration: none; 
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.cursive};
`

export default Header