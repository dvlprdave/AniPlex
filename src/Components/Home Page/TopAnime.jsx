/* -------------------------------------------------------------------------- */
/*            Individual Anime cards that appear on the home page            */
/* -------------------------------------------------------------------------- */

import React from "react";
import styled from "styled-components"
import { Link } from 'react-router-dom'

export const TopAnime = ({ item, title, image }) => {
  return (
    <TopAnimeWrapper>
      <TopAniContainer>
        <Link to={`/${item.mal_id}`}>
          {/* props for data and link to route /:animeId */}
          <AnimeImage src={image} alt='poster' />
        </Link>
        <AnimeTitle>{title}</AnimeTitle>
      </TopAniContainer>
    </TopAnimeWrapper>
  );
};

const TopAnimeWrapper = styled.div`
  display: flex;
`

const TopAniContainer = styled.div`
  flex: 1;
  line-height: 1.4;
`

const AnimeImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 350px;
  border-radius: 3px;
`

const AnimeTitle = styled.h4`
  text-align: left;
  margin-top: 5px;
`