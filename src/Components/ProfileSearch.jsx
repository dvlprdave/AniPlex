import React, { Component } from 'react';
import Form from './Form'
import AnimeCard from './AnimeCard';

class ProfileSearch extends Component {
  state = {
    search: '',
    animeSearched: false,
    dataItems: [],
    imageUrl: '',
    animeTitle: null,
    animeTitleJp: null,
    animeRating: null,
    synopsis: null,
  }

  componentDidMount(e) {
    this.handleButtonSearch()
  }

  handleButtonSearch = async (e) => {
    e.preventDefault()
    const animeQuery = e.target.elements.anime.value
    const url = 'https://kitsu.io/api/edge'
    const response = await fetch(`${url}/anime?filter[text]=${animeQuery}`)
    const animeData = await response.json()
    // const animeDataArray = await animeData => this.setState({ dataItems: animeData })
    console.log(animeData)
    // animeData.results.sort((a, b) => a.episodes - b.episodes).forEach(anime => console.log(anime))

    this.setState({
      dataItems: animeData.data,
      anime: !this.state.animeSearched,
      animeTitle: animeData.data[0].attributes.titles.en,
      animeTitleJp: animeData.data[0].attributes.titles.ja_jp,
      animeRating: animeData.data[0].attributes.averageRating,
      imageUrl: animeData.data[0].attributes.posterImage.small
    })

    console.log(animeData.data);
  }


  render() {
    const { animeRating, imageUrl, animeTitle, animeTitleJp, dataItems } = this.state
    return (
      <div>
        <Form handleButtonSearch={this.handleButtonSearch} />
        {this.state.anime
          ?
          <AnimeCard
            animeRating={animeRating}
            imageUrl={imageUrl}
            animeTitle={animeTitle}
            animeTitleJp={animeTitleJp}
            dataItems={dataItems}
          />
          : null}
      </div>
    )
  }
}

export default ProfileSearch