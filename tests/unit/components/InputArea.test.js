import React from 'react';
import InputArea from '../../../app/components/InputArea';
import renderer from 'react-test-renderer';

it('InputArea renders correctly', () => {
  const tree = renderer
    .create(<InputArea onChange={jest.fn()} onSubmit={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
