import React from 'react';
import faker from 'faker';
import ConversationItem from './ConversationItem';

export default function Conversations() {
  const chat = new Array(100).fill({}).map(() => ({
    username: faker.name.findName(),
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    lastMessage: faker.lorem.sentences(),
    date: faker.date.recent(),
    isRead: faker.random.boolean(),
  }));

  return (
    <div className="max-w-sm">
      {chat.map((chat, i) => {
        return <ConversationItem key={i} {...chat}></ConversationItem>;
      })}
    </div>
  );
}
