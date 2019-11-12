import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { MdGrade } from "react-icons/md";
import LoadingIndicator from './LoadingIndicator';

const AnimeDetails = (props) => {
  const API = 'https://api.jikan.moe/v3/anime'

  const [animeReq, setAnimeReq] = useState({
    fetching: false,
    anime: []
  })

  useEffect(() => {
    const getAnime = async () => {
      setAnimeReq({ fetching: true })

      const response = await fetch(`${API}/${props.match.params.animeId}`)
      const data = await response.json()

      console.log(data);
      setAnimeReq({ fetching: false, anime: data }) // set initial state to hold data from our API call
    }

    getAnime()
  }, [])

  const { fetching, anime } = animeReq;

  return (
    <>
      {fetching && <LoadingIndicator />}
      {anime &&
        <AnimeDetailsWrapper>
          <AnimeDetailsContainer>
            <Poster src={anime.image_url} />
            {/* Details */}
            <Details>
              <Title>{anime.title}</Title>
              <TitleJpn>{anime.title_japanese}</TitleJpn>
              {/* If no score then display N/A */}
              {/* <SongList>
                <h3>Opening Themes</h3>
                {anime.opening_themes ? // Make sure data is fully loaded before component renders
                  anime.opening_themes
                  .map((song, index) => (
                    <li key={index}><p>- {song}</p></li>
                    )) : null
                  }
                </SongList> */}
              <IframeContainer>
                {/* <iframe
                  src={anime.trailer_url}
                  frameBorder='0'
                  allow='encrypted-media'
                  autoplay='0'
                  allowFullScreen
                  title='video'
                  aria-label="Video"
                /> */}
                <video src={anime.trailer_url}
                  autoPlay='false'
                ></video>
              </IframeContainer>
            </Details>
            {/* Info Bar */}
            <ScoreWrapper>
              <Star><MdGrade /></Star>
              <Score>{anime.score || 'N/A'}</Score>
            </ScoreWrapper>
            <InfoBar>
              {<li>Epiosdes: <span className='info-span'>{anime.episodes}</span></li>}
              {<li>Duration: <span className='info-span'>{anime.duration}</span></li>}
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
    color: ${props => props.theme.colors.firstLetter};
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

const ScoreWrapper = styled.div`
  
`

const Star = styled.span`
  color: yellow;
  padding-right: 1rem;
`

const Score = styled.p`
  display: inline-block;
  grid-column: 1;
  grid-row: 2;
  width: 40px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.darkGrey};
  padding: 0.3rem;
  margin: 0;
  border-radius: 3px;
`

const Details = styled.ul`
  list-style: none;
  margin: 0;

  @media screen and (max-width: 676px) {
    grid-template-columns: 1fr;
    grid-column: 1;
    grid-row: 2;
    margin-bottom: 0;
  }
`

const IframeContainer = styled.div`
  /* position: relative;
  overflow: hidden;
  padding-top: 46.25%;
  

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 810px) {
    iframe {
      width: 350px;
    }
  } */

  video {
    width: 100%;
    height: 100%;
  }
`

const InfoBar = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  grid-column: 1 / -1;
  /* grid-row: 2; */

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
  max-height: 200px;
  overflow: auto;
`

const Synopsis = styled.div`
  grid-column: 1 / -1;
  grid-row: 4;
  /* padding-top: 2rem; */
  font-size: 1.2rem;

  @media screen and (max-width: 676px) {
    grid-column: 1;
    grid-row: 4;
    font-size: 1rem;
    padding-top: 0;
  }
`