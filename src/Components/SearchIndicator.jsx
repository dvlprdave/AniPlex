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
  margin: 0 auto;

  p { 
    padding-top: 1rem;
  }
`