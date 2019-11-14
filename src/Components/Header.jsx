import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = () => (
  <HeaderWrapper>
    <Link to='/'>
      <Title>AniPlex</Title>
    </Link>
    <SearchForm />
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
  color: black;
  background: inherit;

  a {
    text-decoration: none; 
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.cursive};

  @media screen and (max-width: 560px) {
    font-size: 3rem;
    margin-bottom: 0;
  }
`

export default Header