import React, { Component } from 'react'
import styled from 'styled-components'

class AnimeCard extends Component {
  render() {
    const { dataItems } = this.props
    return (
      <AnimeCardWrapper>
        {dataItems
          .filter(item => item.rated !== 'Rx' && item.score !== 0 && item.type === 'TV') // Remove adult content and un-scored titles
          .map((item, index) => {
            return (
              <AnimeCardItem>
                <PosterImg src={item.image_url} alt="poster" />
                <CardTitle key={index}>{item.title}</CardTitle>
                <p>{item.score}</p>
                <p>{item.rated}</p>
              </AnimeCardItem>
            )
          })}
      </AnimeCardWrapper>
    )
  }
}

const AnimeCardWrapper = styled.div`
  max-width: 1200px;

  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1rem;

  margin: 0 auto;
  padding: 2rem 2rem;
  border-radius: 1rem;
  text-align: center;
`
const AnimeCardItem = styled.div`
  padding: 0;
  margin: 0;
`

const PosterImg = styled.img`
  object-fit: contain;
  height: 300px;
  width: 250px;
  margin-bottom: 1rem;
  border-radius: 1rem;
`

const CardTitle = styled.div`
  /* width: 250px; */
  padding: .5rem;
  word-wrap: break-word;
`
export default AnimeCard
