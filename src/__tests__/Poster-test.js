import React from 'react';
import Poster from 'atoms/Poster';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Poster />).toJSON();
  expect(tree).toMatchSnapshot();
});