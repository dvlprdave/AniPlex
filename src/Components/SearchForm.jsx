import React, { useContext } from 'react';
import styled from 'styled-components'
import { AnimeContext } from '../store/AnimeContext'
import SearchIndicator from './SearchIndicator';

const SearchForm = () => {
  const { handleSubmit, animeSearched } = useContext(AnimeContext)

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="anime"
          placeholder="Enter title"
        />
        <FormButton type='submit'>Search</FormButton>
      </ Form>
      {animeSearched && <SearchIndicator />}
      {/* {animeSearched ? <SearchIndicator /> : 'searching'} */}
    </div>
  )
}

export default SearchForm

const Form = styled.form`
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
  cursor: pointer;
`