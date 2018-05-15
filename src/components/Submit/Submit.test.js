import React from 'react'
import renderer from 'react-test-renderer'

import Submit from './'

describe('<Submit />', () => {
  test('Should render', () => {
    const result = renderer.create(<Submit value="Click me!" />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
