import { DateTime } from 'luxon';
import React, { useState, useEffect } from 'react';

function Message(props) {
  return (
    <div className="flex flex-col items-center m-2 max-w-2xl">
      <div className="flex items-end">{props.body}</div>
    </div>
  );
}

export default Message;
