import React from 'react';

const Messages = ({ messages }) => {
  return (
    <div className="flex-1 bg-gray-900 p-6 rounded-lg overflow-y-auto max-h-[calc(100vh-200px)] space-y-4">
      {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((message) => (
          <div
            key={message.id || message._id} // Adjust based on actual message ID from API
            className={`flex items-start space-x-3 ${
              message.user === 'John' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                message.user === 'John' ? 'bg-gray-700' : 'bg-teal-600'
              }`}
            >
              <span className="text-sm font-bold">{message.user}</span>
              <p>{message?.message}</p>
            </div>
          </div>
        ))
      ) : (
        <div>No messages available</div>
      )}
    </div>
  );
};

export default Messages;
