import React, { Component } from 'react'
import styled from 'styled-components'

class AnimeCard extends Component {
  render() {
    const { animeTitle, animeTitleJp, animeRating, imageUrl, dataItems } = this.props
    return (
      <AnimeCardWrapper>
        <ul>
          {dataItems.map((item) => {
            return <h1>{item.attributes.titles.en}</h1>
          })}
        </ul>
        <PosterImg src={imageUrl} alt="poster" />
        <h4>{animeTitle}</h4>
        <h4>{animeTitleJp}</h4>
        <p>Score: {animeRating}</p>
      </AnimeCardWrapper>
    )
  }
}

const AnimeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 500px;
  margin: 0 auto;
  padding: 2rem 2rem;
  border-radius: 1rem;
  /* background: ${props => props.theme.colors.inputBackground}; */

  text-align: justify;
`
const PosterImg = styled.img`
  object-fit: cover;
  height: 450px;
  width: 350px;
  border-radius: 1rem;
`
export default AnimeCard
