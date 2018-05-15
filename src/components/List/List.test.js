import React from 'react'
import renderer from 'react-test-renderer'

import List from './List'

jest.mock('./ListItem', () => 'ListItem')

describe('<List />', () => {
  test('Should render', () => {
    const mockData = []
    const result = renderer.create(<List data={mockData} />).toJSON()
    expect(result).toMatchSnapshot()
  })

  test('Should render items', () => {
    const mockData = [
      {
        id: 1,
        creationDate: '2007-05-16',
        name: 'Commodo.mp3',
        status: 'In Process',
      },
    ]
    const result = renderer.create(<List data={mockData} />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
