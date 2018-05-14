import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  height: 3rem;
  padding: 0;
  margin: 0 0 0.75 0;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  box-shadow: none;
  transition: box-shadow 0.3s, border 0.3s;

  &:focus {
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
  }
`

export default function Input(props) {
  return <InputStyle type="text" {...props} />
}
