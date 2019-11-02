import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import AnimeCard from './AnimeCard/AnimeCard';

// import Form from './Form'

const API = 'https://api.jikan.moe/v3'
class AnimeSearchForm extends Component {
  state = {
    dataItems: [],
    animeSearched: false,
    topAni: null
  }

  handleButtonSearch = async (e) => {
    e.preventDefault()

    const animeQuery = e.target.elements.anime.value
    const response = await fetch(`${API}/search/anime?q=${animeQuery}&page=1`)
    const response2 = await fetch(`${API}/top/anime/1/movie`)

    const animeData = await response.json()
    const topAnime = await response2.json()


    this.setState({
      anime: !this.state.animeSearched,
      dataItems: animeData.results,
      topAni: topAnime.top
    })

    this.props.history.push('dashboard')
  }

  render() {
    const { dataItems, anime } = this.state

    return (
      <div>
        <Form onSubmit={this.handleButtonSearch}>
          <Input
            type="text"
            name="anime"
            placeholder="Enter title"
            ref={value => this.myValue = value}
          />
          <FormButton type='submit'>Search</FormButton>
        </ Form>
        {anime
          ?
          <AnimeCard
            dataItems={dataItems}
          // topAni={topAnime}
          />
          : null}
      </div>
    )
  }
}

export default withRouter(AnimeSearchForm)

const Form = styled.form`
  display: flex;
  margin-top: 1rem;
`

const Input = styled.input`
  font-size: 1.2rem;
  padding: .3em;
  border-radius: ${props => props.theme.formStyle.borderRadius};
`

const FormButton = styled.button`
  border: ${props => props.theme.buttonStyle.border};
  border-radius: ${props => props.theme.formStyle.borderRadius};
  background: ${props => props.theme.colors.inputBackground};
  padding: .8rem 1.8rem;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin-left: .5rem;
`