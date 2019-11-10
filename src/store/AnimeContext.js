import React, { useState, useEffect, createContext } from 'react'
import { withRouter } from 'react-router-dom'

const AnimeContext = createContext()

const API = "https://api.jikan.moe/v3"


const AnimeProvider = (props) => {
  const urls = [
    `${API}/top/anime/1/airing`,
    `${API}/top/anime/1/tv`,
    `${API}/top/anime/1/upcoming`,
  ]

  // State for top Anime 
  const [topTv, setTopTv] = useState([])
  const [topAiring, setTopAiring] = useState([])
  const [topUpcoming, setTopUpcoming] = useState([])

  // State for Anime search form
  const [dataItems, setDataItems] = useState([])
  const [animeSearched, setAnimeSearched] = useState(false)
  const [formError, setFormError] = useState('')

  // Fetch top Anime 
  const fetchTopAnime = async () => {
    return Promise.all(
      urls.map(async url => {
        return await fetch(url); // fetch data from urls
      })
    )
      .then((responses) => Promise.all(responses.map(resp => resp.json())) // turn data into JSON
        .then(data => {
          const topTvFiltered = data[0].top.filter(item => item.rank <= 5) // filter out top 6 
          const topAiringFiltered = data[1].top.filter(item => item.rank <= 5)
          const topUpcomingFiltered = data[2].top.filter(item => item.rank <= 5)

          setTopTv(topTvFiltered)
          setTopAiring(topAiringFiltered)
          setTopUpcoming(topUpcomingFiltered)

          console.log(data)
        })
      )
      .catch(err => console.log("There was an error:" + err))
  }

  useEffect(() => {
    fetchTopAnime()
  }, [])

  // Fetch searched Anime
  async function handleSubmit(e) {
    e.preventDefault()

    setAnimeSearched(true)
    let animeQuery = e.target.elements.anime.value
    const response = await fetch(`${API}/search/anime?q=${animeQuery}&page=1`)
    const animeData = await response.json()

    if (animeQuery) {
      setDataItems(animeData.results)
      setAnimeSearched(false)
      setFormError('')

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
      topUpcoming,
      setTopUpcoming,
      dataItems,
      setDataItems,
      animeSearched,
      fetchTopAnime,
      handleSubmit,
      formError
    }}>
      {props.children}
    </AnimeContext.Provider>
  )
}

const RouterAnimeProvider = withRouter(AnimeProvider)

export { RouterAnimeProvider, AnimeContext }