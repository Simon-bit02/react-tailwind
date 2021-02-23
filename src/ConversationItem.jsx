import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function ChatIsRead(props) {
  if (props.isRead) {
    return (
      <div className="w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
      </div>
    );
  } else {
    return null;
  }
}

function RelativeChat(props) {
  let data = props.date;
  let dateLuxon = DateTime.fromJSDate(data);
  let relativeDate = dateLuxon.toRelative();
  return (
    <div className="font-semibold text-xs text-gray-500 pl-3">
      {relativeDate}
    </div>
  );
}

function ConversationItem(props) {
  return (
    <div className="flex items-stretch m-1 p-2 bg-white rounded-lg hover:bg-gray-100 cursor-pointer">
      <img
        src={props.imgProfile}
        className="w-12 h-12 rounded-full object-cover "
        loading="lazy"
      />
      <div className="flex flex-grow flex-col flex-shrink items-start px-3">
        <div className="font-semibold ">{props.username}</div>
        <div className="flex items-center">
          <div className="font-semibold text-xs flex text-gray-700 text-left truncate max-w-xs ">
            {props.lastMessage}
          </div>
          <RelativeChat {...props} />
          <ChatIsRead {...props} />
        </div>
      </div>
    </div>
  );
}

export default ConversationItem;
