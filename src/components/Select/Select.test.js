import React from 'react'
import renderer from 'react-test-renderer'

import Select from './Select'

describe('<Select />', () => {
  test('Should render only one option', () => {
    const result = renderer.create(<Select options={[]} />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
