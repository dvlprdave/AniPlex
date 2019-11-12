/* -------------------------------------------------------------------------- */
/*           Titles that get displayed when doing a specific search           */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { AnimeContext } from '../store/AnimeContext'
import LoadingIndicator from './LoadingIndicator';

const AnimeCard = () => {
  const { dataItems, animeSearched } = useContext(AnimeContext)

  return (
    <>
      {animeSearched && <LoadingIndicator />}
      <AnimeCardWrapper>
        {dataItems
          .filter(item => item.rated !== 'Rx' && item.score !== 0 && item.type === 'TV') // filter out adult content
          .map(item => {
            return (
              <Card key={item.mal_id}>
                <Link to={`/${item.mal_id}`}>
                  <PosterImg src={item.image_url} alt="poster" />
                </Link>

                <Title>{item.title}</Title>
              </Card>
            )
          })}
      </AnimeCardWrapper>
    </>
  );
}

const AnimeCardWrapper = styled.div`
  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;


  
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 4.5rem;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const PosterImg = styled.img`
  object-fit: cover;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  width: 100%;
  height: 350px;
`

const Title = styled.h5`
  text-align: left;
  justify-self: start;
`

export default AnimeCard;