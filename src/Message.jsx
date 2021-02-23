import { DateTime } from 'luxon';
import React, { useState, useEffect } from 'react';

function Message(props) {
  return <div className="flex items-end">{props.body}</div>;
  return <div className="flex items-end bg-red-300 m-2">{props.body}</div>;
}

export default Message;
