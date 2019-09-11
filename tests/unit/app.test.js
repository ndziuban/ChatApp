import React from 'react';
import View from '../../app/page/view';
import renderer from 'react-test-renderer';

it('View (initial) renders correctly', () => {
  const tree = renderer
    .create(
      <View />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
