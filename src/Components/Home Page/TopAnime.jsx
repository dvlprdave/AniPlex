/* -------------------------------------------------------------------------- */
/*            Individual Anime cards that appear on the home page            */
/* -------------------------------------------------------------------------- */

import React from "react";
import styled from "styled-components"

export const TopAnime = ({ title, image }) => {
  return (
    <TopAnimeWrapper>
      <TopAniContainer>
        <AnimeLink href="#">
          <AnimeImage src={image} alt='poster' />
        </AnimeLink>
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
const AnimeLink = styled.a`
  
`

const AnimeImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 3px;
`
const AnimeTitle = styled.h4`
  text-align: left;
  margin-top: 5px;
`