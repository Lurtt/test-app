import React from 'react'
import renderer from 'react-test-renderer'

import DatePicker from './'

describe('<DatePicker />', () => {
  test('Should render', () => {
    const result = renderer.create(<DatePicker />).toJSON()
    expect(result).toMatchSnapshot()
  })

  test('Should accept {...props}', () => {
    const result = renderer
      .create(<DatePicker id={1} value="2007-05-16" />)
      .toJSON()
    expect(result).toMatchSnapshot()
  })
})
