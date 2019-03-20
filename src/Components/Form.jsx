import React, { Component } from 'react'
import styled from 'styled-components'


class Form extends Component {

  filterUpdate = () => {
    const val = this.myValue.value
    console.log(val)
  }

  render() {
    return (
      <form onSubmit={this.props.handleButtonSearch}>
        <Input
          type="text"
          name="anime"
          placeholder="Enter title"
          ref={value => this.myValue = value}
        />
        <button>Search Anime Title</button>
      </form>
    )
  }
}

const Input = styled.input`
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputTextActive};
  line-height: 2.4rem;
  font-size: 1.8rem;
  vertical-align: middle;
  border: none;
  border-radius: 5px;
  margin-bottom: 2rem;
`

export default Form
