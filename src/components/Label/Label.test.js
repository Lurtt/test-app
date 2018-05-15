import React from 'react'
import renderer from 'react-test-renderer'

import Label from './'

describe('<Label />', () => {
  test('Should render', () => {
    const result = renderer.create(<Label>Hello world!</Label>).toJSON()
    expect(result).toMatchSnapshot()
  })
})
