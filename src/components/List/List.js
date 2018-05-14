import React from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const ListStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function(props) {
  return (
    <ListStyle>
      {props.data.map(item => <ListItem key={item.id} {...item} />)}
    </ListStyle>
  )
}
