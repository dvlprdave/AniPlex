import React, { Component } from 'react';
import Form from './Form'
import AnimeCard from './AnimeCard';

class ProfileSearch extends Component {
  state = {
    dataItems: [],
    search: '',
    animeSearched: false,
    imageUrl: '',
    animeTitle: null,
    animeRating: null,
    synopsis: null
  }

  componentDidMount() {
    this.handleButtonSearch()
  }

  handleButtonSearch = async (e) => {
    e.preventDefault()

    const animeQuery = e.target.elements.anime.value
    const url = 'https://api.jikan.moe/v3'
    const response = await fetch(`${url}/search/anime?q=${animeQuery}&page=1`)
    const animeData = await response.json()

    this.setState({
      anime: !this.state.animeSearched,
      dataItems: animeData.results,
      animeTitle: animeData.results.title,
      animeRating: animeData.results.score,
      imageUrl: animeData.results.image_url,
      synopsis: animeData.results.synopsis
    })
  }


  render() {
    const { animeRating, imageUrl, animeTitle, dataItems, synopsis } = this.state
    return (
      <div>
        <Form handleButtonSearch={this.handleButtonSearch} />
        {this.state.anime
          ?
          <AnimeCard
            // animeRating={animeRating}
            // imageUrl={imageUrl}
            // animeTitle={animeTitle}
            dataItems={dataItems}
          // synopsis={synopsis}
          />
          : null}
      </div>
    )
  }
}

export default ProfileSearch