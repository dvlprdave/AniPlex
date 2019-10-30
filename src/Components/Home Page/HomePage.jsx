import React, { Component } from 'react'
import styled from 'styled-components'
import { TopAnime } from './TopAnime';
class HomePage extends Component {
  state = {
    topTv: [],
    topAiring: [],
    topUpcoming: [],
  }


  async getData() {
    const api = "https://api.jikan.moe/v3";
    const urls = [
      `${api}/top/anime/1/tv`,
      `${api}/top/anime/1/airing`,
      `${api}/top/anime/1/upcoming`,
    ];

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

          this.setState({
            topTv: topTvFiltered,
            topAiring: topAiringFiltered,
            topUpcoming: topUpcomingFiltered,
          });
          console.log(data)
        })
      )
      .catch(err => console.log("There was an error:" + err))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { topTv, topAiring, topUpcoming } = this.state
    return (
      <HomeWrapper>
        <TopAni>
          {topTv.length > 0 ? <TopAniTitle>Top TV</TopAniTitle> : null}
          {topTv.map((item, index) => (
            <TopAnime
              key={index}
              image={item.image_url}
              title={item.title}
              item={item}
            />
          ))}
        </TopAni>

        <TopAni>
          {topAiring.length > 0 ? <TopAniTitle>Top airing</TopAniTitle> : null}
          {topAiring.map((item, index) => (
            <TopAnime
              key={index}
              image={item.image_url}
              title={item.title}
              item={item}
            />
          ))}
        </TopAni>

        <TopAni>
          {topUpcoming.length > 0 ? <TopAniTitle>Top Upcoming</TopAniTitle> : null}
          {topUpcoming.map((item, index) => (
            <TopAnime
              key={index}
              image={item.image_url}
              title={item.title}
              item={item}
            />
          ))}
        </TopAni>

      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  height: 100%;
  padding: 6rem 4.5rem;
  color: ${props => props.theme.colors.white};
`

const TopAni = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  padding: 1rem;
`

const TopAniTitle = styled.h2`
  grid-column: 1 / -1;
  justify-self: start;
`

export default HomePage