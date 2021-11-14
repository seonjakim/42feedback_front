import React from 'react'
import styled from 'styled-components'

const SearchBar = ({ cadetSelect, cadets, input, inputOnChange }) => {
  const subString = (cadetId, input) =>
    input && cadetId.toLowerCase().substring(0, input.length) === input

  const targetCadetArray = (cadets, input) =>
    cadets.filter((cadet) => subString(cadet.login, input) === true)

  const autoCompleteList = targetCadetArray(cadets, input)

  return (
    <>
      <SearchBarContainer>
        <span style={{ padding: '.5em', fill: 'grey' }}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20px"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </span>
        <input
          placeholder="search cadet"
          value={input}
          onChange={(e) => inputOnChange(e.target.value)}
        ></input>
      </SearchBarContainer>
      <DrowdownUl display={autoCompleteList.length}>
        {autoCompleteList.map((cadet, index) => (
          <li
            onClick={() => cadetSelect(cadet, inputOnChange)}
            border={index}
            key={index}
            data-id="userList"
          >
            <div>{cadet.login}</div>
          </li>
        ))}
      </DrowdownUl>
    </>
  )
}

export default SearchBar

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  input {
    border: none;
    width: 100%;
  }
`

const DrowdownUl = styled.ul`
  background-color: #fff;
  margin-top: 4px;
  position: absolute;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  li {
    padding: 0 8px;
    &:focus,
    :hover {
      background-color: ${({ theme }) => theme.color.light};
    }
    div {
      padding: 0.7em;
      border-bottom: 1px solid #eee;
    }
  }
`
