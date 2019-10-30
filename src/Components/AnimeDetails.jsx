import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const AnimeDetails = (props) => {
  const API = 'https://api.jikan.moe/v3/anime'

  const [anime, setAnime] = useState([])

  useEffect(() => {
    const getAnime = async () => {
      const response = await fetch(`${API}/${props.match.params.animeId}`)
      const data = await response.json()

      console.log(data);
      setAnime(data) // set initial state to hold data from our API call
    }
    getAnime()
  }, []) // [] prevents useEffect from running in an infinite loop

  return (
    <> {anime &&
      <AnimeDetailsWrapper>
        <Poster src={anime.image_url} />
        <Details>
          <Title>{anime.title}</Title>
          <TitleJpn>{anime.title_japanese}</TitleJpn>
        </Details>
      </AnimeDetailsWrapper>
    }
    </>
  )

}

export default AnimeDetails

const AnimeDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  height: 90vh;
  color: white;
`

const Poster = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
`

const Title = styled.h2`
`

const TitleJpn = styled.h2`
`
const Details = styled.ul`
  list-style: none;
`