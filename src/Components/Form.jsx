import React, { Component } from 'react'
import styled from 'styled-components'
class Form extends Component {

  filterUpdate = () => {
    const val = this.myValue.value
    console.log(val)
  }

  render() {
    return (
      <FormWrapper onSubmit={this.props.handleButtonSearch}>
        <Input
          type="text"
          name="anime"
          placeholder="Enter title"
          ref={value => this.myValue = value}
        />
        <FormButton>Search</FormButton>
      </FormWrapper>
    )
  }
}

// Form styles
const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

`

const Input = styled.input`
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputTextActive};
  line-height: 2.4rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  padding: .4rem;
`

const FormButton = styled.button`
  border: ${props => props.theme.buttonStyle.border};
  padding: .8rem 1.8rem;
  background: ${props => props.theme.colors.inputBackground};
  color: white;
  text-transform: uppercase;
  margin-left: .5rem;
`

export default Form
