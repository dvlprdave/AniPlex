import React from 'react'
import styled from 'styled-components'
import ProfileSearch from './ProfileSearch';

const Header = () => (
  <Wrapper>
    <HeaderBar>
      <Title>Anidex</Title>
      <SearchField>
        <ProfileSearch />
      </SearchField>
    </HeaderBar>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  background: white;
`

const HeaderBar = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 1rem 0;
  margin: 0 auto;
  background: inherit;
  color: black;
`

const Title = styled.h1`
  /* margin-right: auto; */
`
const SearchField = styled.div`
  padding-right: 1rem;
`

export default Header