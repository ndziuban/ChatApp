import React from 'react';
import Message from '../../../app/components/Message';
import renderer from 'react-test-renderer';

it('Message (standard - sender) renders correctly', () => {
  const tree = renderer
    .create(<Message text="Test Message" isOwnMessage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Message (standard - receiver) renders correctly', () => {
  const tree = renderer
    .create(<Message text="Test Message" isOwnMessage={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Message (sender is typing) renders correctly', () => {
  const tree = renderer
    .create(<Message text="Sender is typing..." isOwnMessage={false} isTypingMessage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
