import React, { Component } from 'react'
import styled from 'styled-components'

class HomePage extends Component {
  render() {
    // const { topAni } = this.props
    return (
      <HomeWrapper>
        {/* {topAni.map((anime) => {
          return (
            <div key={anime.top.mal_id}>
              <h2>{anime.top.title}</h2>
            </div>
          )
        })} */}
        <p>This is just a test</p>
      </HomeWrapper>
    )
  }
}

export default HomePage


const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
`

