import React, { Component } from 'react';

import Form from './Form'
import AnimeCard from './AnimeCard/AnimeCard'

const api = 'https://api.jikan.moe/v3'
class AnimeSearchForm extends Component {
  state = {
    dataItems: [],
    animeSearched: false,
    title: null,
    topAni: null
  }

  handleButtonSearch = async (e) => {
    e.preventDefault()

    const animeQuery = e.target.elements.anime.value
    const response = await fetch(`${api}/search/anime?q=${animeQuery}&page=1`)
    const response2 = await fetch(`${api}/top/anime/1/movie`)

    const animeData = await response.json()
    const topAnime = await response2.json()

    this.setState({
      anime: !this.state.animeSearched,
      dataItems: animeData.results,
      topAni: topAnime.top
    })
  }

  render() {
    const { dataItems, topAnime, anime } = this.state
    return (
      <div>
        <Form handleButtonSearch={this.handleButtonSearch} />
        {anime
          ?
          <AnimeCard
            dataItems={dataItems}
            topAni={topAnime}
          />
          : null}
      </div>
    )
  }
}

export default AnimeSearchForm