import React from 'react';
import faker from 'faker';
import ConversationItem from './ConversationItem';

function Conversation() {
  const chat = new Array(100).fill({}).map(() => ({
    username: faker.name.findName(),
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    lastMessage: faker.lorem.sentences(),
    date: faker.date.recent(),
    isRead: faker.random.boolean(),
  }));

  return (
    <div className="h-full w-full max-w-md flex flex-col absolute overflow-y-scroll top-0 dark:bg-kbook-default ">
      <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-40" />
      {chat.map((chat, i) => {
        return <ConversationItem key={i} {...chat}></ConversationItem>;
      })}
      <hr className="mx-2 my-0.5 dark:border-white dark:border-opacity-40" />
    </div>
  );
}

export default Conversation;
