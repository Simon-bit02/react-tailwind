import faker from 'faker';
import Message from './Message';

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
    <div className="flex flex-col">
      {chat.map((chat, i) => {
        return <Message key={i} {...chat}></Message>;
      })}
    </div>
  );
}

export default Messages;
