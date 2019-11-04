import React, { useState, useEffect, createContext } from 'react'

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

  // State for Anime details
  const [animeReq, setAnimeReq] = useState({
    fetching: false,
    anime: []
  })

  // State for Anime search form
  const [dataItems, setDataItems] = useState([])
  const [animeSearched, setAnimeSearched] = useState(false)


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

  // Fetch Anime details
  const fetchAnimeDetails = async () => {
    setAnimeReq({ fetching: true })

    const response = await fetch(`${API}/${props.match.params.animeId}`)
    const data = await response.json()

    console.log(data);
    setAnimeReq({ fetching: false, anime: data }) // set initial state to hold data from our API call
  }


  // Fetch searched Anime
  const handleSubmit = async (e) => {
    e.preventDefault()

    const animeQuery = e.target.elements.anime.value
    const response = await fetch(`${API}/search/anime?q=${animeQuery}&page=1`)
    // const response2 = await fetch(`${API}/top/anime/1/movie`)

    const animeData = await response.json()
    // const topAnime = await response2.json()

    setDataItems(animeData.results)
    setAnimeSearched(!animeSearched)

    props.history.push('dashboard')
  }

  const { fetching, anime } = animeReq;

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
      fetching,
      anime,
      fetchTopAnime,
      fetchAnimeDetails,
      handleSubmit
    }}>
      {props.childen}
    </AnimeContext.Provider>
  )
}

export { AnimeProvider, AnimeContext }