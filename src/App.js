import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import {
  Select,
  Input,
  DatePicker,
  List,
  Label,
  Submit,
  Loading,
} from './components'
import Api from './api'

const options = ['Done', 'In Process']

const Form = styled.form`
  margin: 2rem 0;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
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
    loading: false,
    data: [],
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({
      loading: true,
    })
    const result = await Api.search(this.state.formData)
    this.setState({
      loading: false,
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
    const date = event.target.value === NaN ? '' : event.target.value
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
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <FormField>
              <Label htmlFor="status">File status</Label>
              <Select
                id="status"
                value={this.state.formData.status}
                onChange={this.handleSelectChange}
                options={options}
              />
            </FormField>

            <FormField>
              <Label htmlFor="date-creation">Date creation</Label>
              <DatePicker
                id="date-creation"
                type="date"
                onChange={this.handleDateChange}
              />
            </FormField>

            <FormField>
              <Label htmlFor="name">File name</Label>
              <Input
                id="name"
                placeholder="File name"
                onChange={this.handleInputChange}
              />
            </FormField>
          </Row>
          <Row>
            <Submit value="Submit" />
          </Row>
        </Form>
        {this.state.loading ? <Loading /> : <List data={this.state.data} />}
      </Fragment>
    )
  }
}

export default App
