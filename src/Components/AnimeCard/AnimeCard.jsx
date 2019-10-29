/* -------------------------------------------------------------------------- */
/*           Titles that get displayed when doing a specific search           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components'

const AnimeCard = ({ dataItems }) => {
  return (
    <AnimeCardWrapper>
      {dataItems
        .filter(item => item.rated !== 'Rx' && item.score !== 0 && item.type === 'TV') // filter out adult content
        .map(item => {
          return (
            <Card key={item.mal_id}>
              <Poster>
                <PosterImg src={item.image_url} alt="poster" />
              </Poster>

              <Title>{item.title}</Title>

              <Info>
                <Score>{item.score}</Score>
                <Rating>{item.rated}</Rating>
              </Info>
            </Card>
          )
        })}
    </AnimeCardWrapper>
  );
}

const AnimeCardWrapper = styled.div`
  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2rem;
  
  max-width: 1200px;
  margin: 2rem auto;
  padding-top: 2rem 2rem;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`

const Poster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-position: center;
  width: 100%;
`

const PosterImg = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 1rem;
`

const Title = styled.h5`
  padding: .5rem;
`

const Info = styled.div`
  display: flex;

  &:hover {
    background-color: transparent;
    color: green;
  }
`

const Score = styled.p`
  border: 1px solid orange;
  padding: 10px;
  width: 2rem;
  font-size: .9rem;
  font-weight: bold;
`

const Rating = styled.p`
  color: red;
`

export default AnimeCard;

