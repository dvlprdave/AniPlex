import React, { Component } from 'react'
import styled from 'styled-components'
class Form extends Component {

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

export default Form
