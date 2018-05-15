import React from 'react'
import renderer from 'react-test-renderer'

import Input from './'

describe('<Input />', () => {
  test('Should render', () => {
    const result = renderer.create(<Input />).toJSON()
    expect(result).toMatchSnapshot()
  })

  test('Should accept {...props}', () => {
    const result = renderer.create(<Input id={1} value="some text" />).toJSON()
    expect(result).toMatchSnapshot()
  })
})

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//
//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
//
//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
