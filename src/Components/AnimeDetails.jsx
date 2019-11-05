import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';

import { AnimeContext } from '../store/AnimeContext'

const AnimeDetails = () => {
  // const API = 'https://api.jikan.moe/v3/anime'

  // const [animeReq, setAnimeReq] = useState({
  //   fetching: false,
  //   anime: []
  // })

  const { fetching, anime, fetchAnimeDetails } = useContext(AnimeContext)

  useEffect(() => {
    fetchAnimeDetails()
  })

  // useEffect(() => {
  //   const getAnime = async () => {
  //     setAnimeReq({ fetching: true })

  //     const response = await fetch(`${API}/${props.match.params.animeId}`)
  //     const data = await response.json()

  //     console.log(data);
  //     setAnimeReq({ fetching: false, anime: data }) // set initial state to hold data from our API call
  //   }

  //   getAnime()
  // }, []) // [] prevents useEffect from running in an infinite loop

  // const { fetching, anime } = animeReq;

  return (
    <>
      {fetching && 'Fetching...'}
      {anime &&
        <AnimeDetailsWrapper>
          <AnimeDetailsContainer>
            <Poster src={anime.image_url} />
            {/* Details */}
            <Details>
              <Title>{anime.title}</Title>
              <TitleJpn>{anime.title_japanese}</TitleJpn>
              <Score>{anime.score || 'N/A'}</Score>
              {/* If no score then display N/A */}
              <SongList>
                <h3>Opening Themes</h3>
                {anime.opening_themes ? // Make sure data is fully loaded before component renders
                  anime.opening_themes
                    .map((song, index) => (
                      <li key={index}>{song}</li>
                    )) : null
                }
              </SongList>
            </Details>
            {/* Info Bar */}
            <InfoBar>
              {<li>Epiosdes: <span className='info-span'>{anime.episodes}</span></li>}
              {<li>Duration: <span className='info-span'>{anime.duration}</span></li>}
              {<li><a href={anime.trailer_url} rel='external noopener noreferrer' target="_blank">View Trailer</a></li>}
            </InfoBar>
            {/* Synopsis */}
            <Synopsis>
              {anime.synopsis}
            </Synopsis>
          </AnimeDetailsContainer>
        </AnimeDetailsWrapper>
      }
    </>
  )
}

export default AnimeDetails

const AnimeDetailsWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 561px) {
    margin-top: 3rem;
  }

`

const AnimeDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: min-content;
  grid-gap: 1rem;
  align-items: end;
  max-width: 900px;
  padding: 3rem;
  color: white;
  text-align: left;

  @media screen and (max-width: 676px) {
    grid-template-columns: 1fr;
  }
`

const Poster = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  justify-self: end;

  @media screen and (max-width: 676px) {
    justify-self: center;
  }
`

const Title = styled.h2`

  &:first-letter {
    color: red;
    font-size: 4.2rem;
  }

  @media screen and (max-width: 676px) {
    font-size: 1.4rem;

    &:first-letter {
    font-size: 4rem;
  }
  }
`

const TitleJpn = styled.h2`
  @media screen and (max-width: 676px) {
    font-size: 1.4rem;
  }
`
const Score = styled.p`
  display: inline;
  color: black;
  background: ${props => props.theme.colors.buttonBg};
  padding: 0.3rem;
  border-radius: 3px;
`

const Details = styled.ul`
  list-style: none;

  @media screen and (max-width: 676px) {
    grid-template-columns: 1fr;
    grid-column: 1;
    grid-row: 2;
    margin-bottom: 0;
  }
`

const InfoBar = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  grid-column: 1 / -1;
  grid-row: 2;

  li {
    padding-right: 1rem;
    font-size: 1.4rem;

    .info-span {
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    &:last-of-type {
      color: black;
      background: ${props => props.theme.colors.buttonBg};
      padding: .2rem .4rem;
      border-radius: 3px;
    }
  }

  @media screen and (max-width: 676px) {
    grid-template-columns: 1fr;
    grid-column: 1;
    grid-row: 3;

    li {
      font-size: 1.2rem;

      &:last-of-type {
        margin-top: 10px;
      }
    }

  }
`

const SongList = styled.div`
  margin-top: 1rem;
`

const Synopsis = styled.div`
  grid-column: 1 / -1;
  grid-row: 3;
  padding-top: 2rem;
  font-size: 1.2rem;

  @media screen and (max-width: 676px) {
    /* grid-template-columns: 1fr; */
    grid-column: 1;
    grid-row: 4;
    font-size: 1rem;
    padding-top: 0;
  }
`