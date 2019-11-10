import React from 'react';
import styled from 'styled-components'
import { Cat } from 'react-kawaii'

const SearchIndicator = () => {
  return (
    <IndicatorWrapper>
      <Cat size={320} mood="happy" color="#596881" />
      <p>Grabbing your Anime....</p>
    </IndicatorWrapper>
  )
}

export default SearchIndicator

const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 80vh;

  p { 
    padding-top: 1rem;
  }
`