import React from 'react';
import ChatWindow from '../../../app/components/ChatWindow';
import renderer from 'react-test-renderer';

it('ChatWindow (Not typing - Empty) renders correctly', () => {
  const tree = renderer
    .create(
      <ChatWindow
        sender="PERSON_1"
        receiver="PERSON_2"
        receiverIsTyping={false}
        messages={[]}
        onSubmit={jest.fn()}
        onSenderTyping={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('ChatWindow (Typing - Empty) renders correctly', () => {
  const tree = renderer
    .create(
      <ChatWindow
        sender="PERSON_1"
        receiver="PERSON_2"
        receiverIsTyping
        messages={[]}
        onSubmit={jest.fn()}
        onSenderTyping={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('ChatWindow (Not typing - Not Empty) renders correctly', () => {
  const tree = renderer
    .create(
      <ChatWindow
        sender="PERSON_1"
        receiver="PERSON_2"
        receiverIsTyping={false}
        messages={[{text: "Test", sender_id:"PERSON_1"}]}
        onSubmit={jest.fn()}
        onSenderTyping={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('ChatWindow (Typing - Not Empty) renders correctly', () => {
  const tree = renderer
    .create(
      <ChatWindow
        sender="PERSON_1"
        receiver="PERSON_2"
        receiverIsTyping
        messages={[{text: "Test", sender_id:"PERSON_1"}]}
        onSubmit={jest.fn()}
        onSenderTyping={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
