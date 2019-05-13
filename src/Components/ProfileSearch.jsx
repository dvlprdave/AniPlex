import React, { Component } from 'react';
import styled from 'styled-components'

import Form from './Form'
import AnimeCard from './Anime Card/AnimeCard'

const url = 'https://api.jikan.moe/v3'
class ProfileSearch extends Component {
  state = {
    dataItems: [],
    animeSearched: false,
    title: null,
    topAni: null
  }

  handleButtonSearch = async (e) => {
    e.preventDefault()

    const animeQuery = e.target.elements.anime.value
    const response = await fetch(`${url}/search/anime?q=${animeQuery}&page=1`)
    const response2 = await fetch(`${url}/top/anime/1/movie`)

    const animeData = await response.json()
    const topAnime = await response2.json()

    console.log(animeData)
    console.log(topAnime)

    this.setState({
      anime: !this.state.animeSearched,
      dataItems: animeData.results,
      topAni: topAnime.top
    })
  }


  render() {
    const { dataItems, topAnime } = this.state
    return (
      <AnimeSearchForm>
        <Form handleButtonSearch={this.handleButtonSearch} />
        {this.state.anime
          ?
          <AnimeCard
            dataItems={dataItems}
            topAni={topAnime}
          />
          : null}
      </AnimeSearchForm>
    )
  }
}

const AnimeSearchForm = styled.div`
  margin: 0 auto;
`

export default ProfileSearch