import React, { useContext } from 'react';
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { AnimeContext } from '../store/AnimeContext'

const SearchForm = () => {
  const { handleSubmit, handleInputChange, inputField, formError } = useContext(AnimeContext)

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          aria-label="Search"
          type="text"
          name="anime"
          placeholder="Enter title"
          value={inputField}
          onChange={handleInputChange}
        />
        <Icon>
          <FaSearch />
        </Icon>
      </ Form>
      <FormError>{formError}</FormError>
    </div>
  )
}

export default SearchForm

const Form = styled.form`
  display: flex;
  position: relative;
  margin-top: 1rem;
`

const Input = styled.input`
  font-size: 1.2rem;
  padding: .3em;
  border-color: #1e1e1e;
  border-radius: ${props => props.theme.formStyle.borderRadius};
  background-color: ${props => props.theme.colors.darkGrey};
  color: ${props => props.theme.colors.background};
`

const FormError = styled.p`
  position: absolute;
  margin-top: 5px;
  font-size: 1rem;
  color: yellow;
`

const Icon = styled.span`
  position: absolute;
  right: 1rem;
  top: .5rem;
  color: grey;
`