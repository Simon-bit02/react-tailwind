import { DateTime } from 'luxon';
import React, { useState, useEffect } from 'react';

function Message(props) {
  return <div className="flex">{props.body}</div>;
}

export default Message;
