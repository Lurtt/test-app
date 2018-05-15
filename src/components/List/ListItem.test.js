import React from 'react'
import renderer from 'react-test-renderer'

import ListItem from './ListItem'

jest.mock('../Label', () => 'Label')

const mockData = {
  id: 1,
  creationDate: '2007-05-16',
  name: 'Commodo.mp3',
  status: 'In Process',
}

describe('<ListItem />', () => {
  test('Should render', () => {
    const result = renderer.create(<ListItem {...mockData} />).toJSON()
    expect(result).toMatchSnapshot()
  })
})
