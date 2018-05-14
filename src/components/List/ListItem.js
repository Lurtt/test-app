import React from 'react'
import styled from 'styled-components'

import { Label } from '../'

const ListItemStyle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.1);
`

const Field = styled.div`
  flex: 1;
  padding: 1rem;
`

export default function(props) {
  return (
    <ListItemStyle>
      <Field>
        <Label>File name</Label>
        <div>{props.name}</div>
      </Field>
      <Field>
        <Label>Date creation</Label>
        <div>{new Date(props.creationDate).toString().slice(3, 15)}</div>
      </Field>
      <Field>
        <Label>Status</Label>
        <div>{props.status}</div>
      </Field>
    </ListItemStyle>
  )
}
