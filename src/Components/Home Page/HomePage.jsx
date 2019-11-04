import React, { useContext } from 'react'
import styled from 'styled-components'

import { TopAnime } from './TopAnime';
import { AnimeContext } from '../../store/AnimeContext'

const HomePage = () => {
  const { topTv, topAiring, topUpcoming } = useContext(AnimeContext)

  return (
    <HomeWrapper>
      <h1>AniPlex</h1>
      <TopAni>
        {topTv.length > 0 ? <TopAniTitle>Top TV</TopAniTitle> : null}
        {topTv.map((item, index) => (
          <TopAnime
            key={index}
            image={item.image_url}
            title={item.title}
            item={item}
          />
        ))}
      </TopAni>

      <TopAni>
        {topAiring.length > 0 ? <TopAniTitle>Top Airing</TopAniTitle> : null}
        {topAiring.map((item, index) => (
          <TopAnime
            key={index}
            image={item.image_url}
            title={item.title}
            item={item}
          />
        ))}
      </TopAni>

      <TopAni>
        {topUpcoming.length > 0 ? <TopAniTitle>Top Upcoming</TopAniTitle> : null}
        {topUpcoming.map((item, index) => (
          <TopAnime
            key={index}
            image={item.image_url}
            title={item.title}
            item={item}
          />
        ))}
      </TopAni>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100%;
  padding: 6rem 4.5rem;
  color: ${props => props.theme.colors.white};
`

const TopAni = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  padding: 1rem;
`

const TopAniTitle = styled.h2`
  grid-column: 1 / -1;
  justify-self: start;
`

export default HomePage