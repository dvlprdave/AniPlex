import React, { Component } from 'react';
import Form from './Form'
import AnimeCard from './AnimeCard';

class ProfileSearch extends Component {
  state = {
    dataItems: [],
    animeSearched: false
  }

  // componentDidMount() {
  //   this.handleButtonSearch()
  // }

  handleButtonSearch = async (e) => {
    e.preventDefault()

    const animeQuery = e.target.elements.anime.value
    const url = 'https://api.jikan.moe/v3'
    const response = await fetch(`${url}/search/anime?q=${animeQuery}&page=1`)
    const animeData = await response.json()

    this.setState({
      anime: !this.state.animeSearched,
      dataItems: animeData.results,
    })
  }


  render() {
    const { dataItems } = this.state
    return (
      <div>
        <Form handleButtonSearch={this.handleButtonSearch} />
        {this.state.anime
          ?
          <AnimeCard
            dataItems={dataItems}
          />
          : null}
      </div>
    )
  }
}

export default ProfileSearch