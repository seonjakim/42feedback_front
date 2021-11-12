import React from 'react'
import styled from 'styled-components'

const SearchBar = ({ cadetSelect, cadets, input, inputOnChange }) => {
  const subString = (cadetId, input) =>
    input && cadetId.toLowerCase().substring(0, input.length) === input

  const targetCadetArray = (cadets, input) =>
    cadets.filter((cadet) => subString(cadet.login, input) === true)

  const autoCompleteList = targetCadetArray(cadets, input)

  return (
    <SearchBarContainer>
      <StyledInput
        placeholder="search cadet"
        value={input}
        onChange={(e) => inputOnChange(e.target.value)}
      ></StyledInput>
      <DrowdownUl display={autoCompleteList.length}>
        {autoCompleteList.map((cadet, index) => (
          <DropdownList
            onClick={() => cadetSelect(cadet, inputOnChange)}
            border={index}
            key={index}
            data-id="userList"
          >
            {cadet.login}
          </DropdownList>
        ))}
      </DrowdownUl>
    </SearchBarContainer>
  )
}

export default SearchBar

const SearchBarContainer = styled.div`
  /* width: 300px; */
`

const StyledInput = styled.input`
  border: none;
  padding: 1em 1em;
  display: block;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
`
const DrowdownUl = styled.ul`
  display: ${({ display }) => !display && `none`};
  background-color: #fff;
  padding: 8px;
  margin-top: 4px;
  z-index: 99;
  position: absolute;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const DropdownList = styled.li`
  padding: 0.7em 1em;
  border-top: ${({ border }) => border && `1px solid #eee`};
  z-index: 1;
  &:focus {
    background-color: #eee;
  }
`
