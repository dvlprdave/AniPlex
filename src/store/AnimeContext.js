import React, { useState, useEffect, createContext } from 'react'
import { withRouter } from 'react-router-dom'

const AnimeContext = createContext()

const API = "https://api.jikan.moe/v3"

const AnimeProvider = (props) => {
  const urls = [
    `${API}/top/anime/1/airing`,
    `${API}/top/anime/1/tv`,
    `${API}/top/anime/1/movie`
  ]

  // State for top Anime 
  const [topTv, setTopTv] = useState([])
  const [topAiring, setTopAiring] = useState([])
  const [topMovie, setTopMovie] = useState([])
  const [fetchingTop, setFetchingTop] = useState(false)

  // State for Anime search form
  const [dataItems, setDataItems] = useState([])
  const [animeSearched, setAnimeSearched] = useState(false)
  const [formError, setFormError] = useState('')
  const [inputField, setInputField] = useState('')


  // Fetch top Anime / HomePage component
  async function fetchTopAnime() {
    setFetchingTop(true)
    return Promise.all(
      urls.map(async url => {
        return await fetch(url); // fetch data from urls
      })
    )
      .then((responses) => Promise.all(responses.map(resp => resp.json())) // turn data into JSON
        .then(data => {
          const topTvFiltered = data[0].top.filter(item => item.rank <= 5) // filter out top 6 
          const topAiringFiltered = data[1].top.filter(item => item.rank <= 5)
          const topMovieFiltered = data[2].top.filter(item => item.rank <= 5)

          setTopTv(topTvFiltered)
          setTopAiring(topAiringFiltered)
          setTopMovie(topMovieFiltered)
          setFetchingTop(false)
        })
      )
      .catch(err => console.log("There was an error:" + err))
  }

  useEffect(() => {
    fetchTopAnime()
  }, [])

  // Handle changes to input
  function handleInputChange(e) {
    setInputField(e.target.value)

    // Input validation for alphanumeric only
    const regex = /[a-zA-Z\s]/
    if (regex.test(inputField) === false) {
      setFormError('Please use correct character')
    } else {
      setFormError('')
    }
  }

  // Fetch searched Anime
  async function handleSubmit(e) {
    e.preventDefault()

    setAnimeSearched(true)
    let animeQuery = e.target.elements.anime.value
    const response = await fetch(`${API}/search/anime?q=${animeQuery}&page=1`)
    const animeData = await response.json()

    // Validation for empty input submission
    if (animeQuery) {
      setDataItems(animeData.results)
      setAnimeSearched(false)
      setFormError('')
      setInputField('')

      props.history.push('/searched-anime')
    } else {
      setFormError('Please enter Anime title')
    }
  }

  return (
    <AnimeContext.Provider value={{
      topTv,
      setTopTv,
      topAiring,
      setTopAiring,
      topMovie,
      setTopMovie,
      dataItems,
      setDataItems,
      animeSearched,
      fetchTopAnime,
      handleSubmit,
      handleInputChange,
      inputField,
      formError,
      fetchingTop
    }}>
      {props.children}
    </AnimeContext.Provider>
  )
}

const RouterAnimeProvider = withRouter(AnimeProvider)

export { RouterAnimeProvider, AnimeContext }