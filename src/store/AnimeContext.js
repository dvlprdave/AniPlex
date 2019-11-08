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
  const [toAnimeSearched, setToAnimeSearched] = useState(false)

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

    const animeQuery = e.target.elements.anime.value
    const response = await fetch(`${API}/search/anime?q=${animeQuery}&page=1`)
    const animeData = await response.json()

    setDataItems(animeData.results)
    setAnimeSearched(!animeSearched)
    setToAnimeSearched(false)

    props.history.push('/searched-anime')
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
      setAnimeSearched,
      fetchTopAnime,
      handleSubmit,
      toAnimeSearched,
    }}>
      {props.children}
    </AnimeContext.Provider>
  )
}

const RouterAnimeProvider = withRouter(AnimeProvider)

export { RouterAnimeProvider, AnimeContext }