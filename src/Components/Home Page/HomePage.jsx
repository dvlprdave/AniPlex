import React, { Component } from 'react'
import styled from 'styled-components'
import { TopAnime } from './TopAnime';



class HomePage extends Component {
  state = {
    topTv: [],
    topAiring: [],
    topUpcoming: []
  }

  async getData() {
    const api = "https://api.jikan.moe/v3";
    const urls = [
      `${api}/top/anime/1/tv`,
      `${api}/top/anime/1/airing`,
      `${api}/top/anime/1/upcoming`
    ];

    return Promise.all(
      urls.map(async url => {
        return await fetch(url); // fetch data from urls
      })
    )
      .then((responses) => Promise.all(responses.map(resp => resp.json())) // turn data into JSON
        .then(data => {
          const topTvFiltered = data[0].top.filter(item => item.rank <= 6); // filter out top 6 
          const topAiringFiltered = data[1].top.filter(item => item.rank <= 6);
          const topUpcomingFiltered = data[2].top.filter(item => item.rank <= 6);

          this.setState({
            topTv: topTvFiltered,
            topAiring: topAiringFiltered,
            topUpcoming: topUpcomingFiltered
          });
        })
      )
      .catch(err => console.log("There was an error:" + err));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { topTv, topAiring, topUpcoming } = this.state;
    return (
      <HomeWrapper>
        <h2>Top TV</h2>
        <TopAni>
          {/* {topTv.length > 0 ? <h2>Top TV</h2> : null} */}
          {topTv.map((item, index) => (
            <TopAnime key={index} title={item.title} image={item.image_url} />
          ))}
        </TopAni>

        <h2>Top Airing</h2>
        <TopAni>
          {/* {topAiring.length > 0 ? <h2>Top airing</h2> : null} */}
          {topAiring.map((item, index) => (
            <TopAnime key={index} title={item.title} image={item.image_url} />
          ))}
        </TopAni>

        <h2>Top Upcoming</h2>
        <TopAni>
          {topUpcoming.map((item, index) => (
            <TopAnime key={index} title={item.title} image={item.image_url} />
          ))}
        </TopAni>

      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  height: 100%;
`

const TopAni = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
`
export default HomePage