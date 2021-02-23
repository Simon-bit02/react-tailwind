import faker from 'faker';
import Message from './Message';
import React, { useState, useEffect } from 'react';

function Messages() {
  let chat = [
    {
      direction: faker.random.boolean() ? 'receive' : 'send',
      sentAt: faker.date.recent(),
      receivedAt: faker.date.recent(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
    {
      direction: faker.random.boolean() ? 'receive' : 'send',
      sentAt: faker.date.recent(),
      receivedAt: faker.date.recent(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
    {
      direction: faker.random.boolean() ? 'receive' : 'send',
      sentAt: faker.date.past(),
      receivedAt: faker.date.past(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
    {
      direction: faker.random.boolean() ? 'receive' : 'send',
      sentAt: faker.date.past(),
      receivedAt: faker.date.past(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
  ];
  return (
    <div className="h-full flex flex-col-reverse absolute ml-96 bg-gray-100 dark:bg-kbook-default2 bottom-0 right-0 left-0 overflow-auto">
      {chat.map((chat, i) => {
        return <Message key={i} {...chat}></Message>;
      })}
    </div>
  );
}

export default Messages;
