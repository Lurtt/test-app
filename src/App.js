import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { Select, Input, DatePicker } from './components'
import Api from './api'

const options = ['Done', 'In Process']

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;

  justify-content: center;
`

class App extends Component {
  state = {
    formData: {
      status: '',
      name: '',
      date: '',
    },
    data: [],
  }

  handleSubmit = event => {
    event.preventDefault()
    const result = Api.search(this.state.formData)
    this.setState({
      data: result,
    })
  }

  handleSelectChange = event => {
    const status = event.target.value
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        status,
      },
    }))
  }

  handleInputChange = event => {
    const name = event.target.value
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        name,
      },
    }))
  }

  handleDateChange = event => {
    const date = new Date(event.target.value).valueOf()
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        date,
      },
    }))
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <FormField>
              <label htmlFor="status">File status</label>
              <Select
                id="status"
                value={this.state.formData.status}
                onChange={this.handleSelectChange}
                options={options}
              />
            </FormField>

            <FormField>
              <label htmlFor="date-creation">Date creation</label>
              <DatePicker
                id="date-creation"
                type="date"
                onChange={this.handleDateChange}
              />
            </FormField>

            <FormField>
              <label htmlFor="name">File name</label>
              <Input
                id="name"
                placeholder="File name"
                onChange={this.handleInputChange}
              />
            </FormField>
          </Row>
          <Row>
            <input type="submit" value="Submit" />
          </Row>
        </form>
      </Fragment>
    )
  }
}

export default App
