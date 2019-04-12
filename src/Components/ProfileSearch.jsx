import React, { Component } from 'react';
import Form from './Form'
import AnimeCardGallery from './Anime Card/AnimeCardGallery';
import HomePage from './HomePage';

const url = 'https://api.jikan.moe/v3'
class ProfileSearch extends Component {
  state = {
    dataItems: [],
    animeSearched: false,
    title: null,
    topAni: null
  }

  // async componentDidMount() {
  //   const response2 = await fetch(`${url}/top/anime/1/movie`)
  //   const topAnime = await response2.json()

  //   this.setState({ top: topAnime.top });
  // }

  //INCASE OF HEADER USE

  // const response = await fetch(`${url}/search/anime?q=${animeQuery}&page=1`, {
  //   headers: {
  //     'Accept': application/vnd.api+json,
  //     'Content-Type': application/vnd.api+json
  //   }
  // })
  // const response = await fetch(`${url}/anime?filter[text]=${animeQuery}`)

  handleButtonSearch = async (e) => {
    e.preventDefault()

    const animeQuery = e.target.elements.anime.value
    // const url = 'https://kitsu.io/api/edge'
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
      <div>
        <Form handleButtonSearch={this.handleButtonSearch} />
        {this.state.anime
          ?
          <AnimeCardGallery
            dataItems={dataItems}
            topAni={topAnime}
          />
          : null}

        <HomePage />
      </div>
    )
  }
}

export default ProfileSearch