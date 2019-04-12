import React, { Component } from 'react'
import styled from 'styled-components'

class AnimeCardGallery extends Component {
  render() {
    const { dataItems, topAnime } = this.props
    return (
      <AnimeCardWrapper>
        {dataItems
          // .filter(item => item.rated !== 'Rx' && item.score !== 0 && item.type === 'TV') // Remove adult content and un-scored titles
          .map((item) => {
            return (
              <AnimeCardItem key={item.mal_id}>
                <PosterWrap>
                  <PosterImg src={item.image_url} alt="poster" />
                </PosterWrap>

                <CardTitle>{item.title}</CardTitle>

                <Article>
                  <CardScore>{item.score}</CardScore>
                  <p>{item.rated}</p>
                </Article>
              </AnimeCardItem>
            )
          })}
        {/* <p>{topAni.top.score}</p> */}
      </AnimeCardWrapper>
    )
  }
}

const AnimeCardWrapper = styled.div`
  max-width: 1200px;

  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2rem;

  margin: 0 auto;
  padding-top: 2rem 2rem;
  border-radius: 1rem;
`
const AnimeCardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`

const PosterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PosterImg = styled.img`
  width: 100%;
  height: 350px;
  object-fit: contain;
  border-radius: 1rem;
`

const CardTitle = styled.h5`
  padding: .5rem;
`

const Article = styled.article`
  display: flex;
`

const CardScore = styled.p`
  border: 1px solid orange;
  padding: 10px;
  width: 2rem;
  font-size: .9rem;
  font-weight: bold;
`

export default AnimeCardGallery