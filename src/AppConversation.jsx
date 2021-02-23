import React, { useState, useEffect } from 'react';
import './App.css';
import ConversationItem from './ConversationItem.jsx';
import Messages from './Messages';
import Conversations from './Conversations';
import faker from 'faker';

function AppConversation() {
  const chat = new Array(100).fill({}).map(() => ({
    username: faker.name.findName(),
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    lastMessage: faker.lorem.sentences(),
    date: faker.date.recent(),
    isRead: faker.random.boolean(),
  }));

  return (
    <div className="flex flex-col h-full w-full bg-gray-100 dark:bg-default">
      <div className="flex flex-grow h-full w-full bg-gray-100 dark:bg-default">
        <Conversations />
        <Messages />
      </div>
    </div>
  );
}
export default AppConversation;
