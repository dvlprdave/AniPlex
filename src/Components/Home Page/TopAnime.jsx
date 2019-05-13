import React from "react";
import styled from "styled-components"

export const TopAnime = ({ title, image }) => {
  return (
    <TopAnimeWrapper>
      <TopAniContainer>
        <h3>{title}</h3>
        <img src={image} alt='poster' />
      </TopAniContainer>
    </TopAnimeWrapper>
  );
};

const TopAnimeWrapper = styled.div`
  display: flex;
  
`

const TopAniContainer = styled.div`
  flex: 1;
`