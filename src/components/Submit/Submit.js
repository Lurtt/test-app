import styled from 'styled-components'

export default styled.input.attrs({
  type: 'submit',
})`
  height: 36px;
  margin: 2rem 0;
  padding: 0 1.2rem;
  color: #fff;
  background-color: #26a69a;
  border-radius: 2px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border: none;
  outline: 0;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:focus,
  &:hover {
    background-color: #2bbbad;
  }
`
