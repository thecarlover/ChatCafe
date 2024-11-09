import React from 'react';
import { useSelector } from 'react-redux';
import Messages from './Messages';
import useGetMessages from '../hooks/useGetMessages';
import SendInput from './sendInput';

const MessageContainer = () => {
  // Fetch messages using the custom hook
  useGetMessages();

  // Get messages and selected user from Redux store
  const messages = useSelector((store) => store.message.message);
  const selectedUser = useSelector((store) => store.user.selectedUser);

  return (
    <div className="flex flex-col h-screen bg-gray-900 overflow-hidden"> {/* Prevent scrolling at container level */}
      {/* User Header */}
      {selectedUser && (
        <div className="sticky top-0 flex items-center p-3 md:p-4 text-white text-base md:text-lg font-semibold border-b border-gray-700 bg-gray-800 z-10 shadow-md">
          {selectedUser.profilePhoto ? (
            <img
              src={selectedUser.profilePhoto}
              alt={`${selectedUser.fullName}'s profile`}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3"
            />
          ) : (
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-600 flex items-center justify-center mr-3">
              <span className="text-white text-sm md:text-xl">{selectedUser.fullName[0]}</span>
            </div>
          )}
          <p className="text-sm md:text-base">{selectedUser.fullName}</p>
        </div>
      )}

      {/* Message List with scroll functionality */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-900"> {/* Scrollable area for messages */}
        {messages && messages.length > 0 ? (
          <Messages messages={messages} />
        ) : (
          <div className="text-center text-gray-400">Loading...</div>
        )}
      </div>

      {/* Send Input - Fixed at the bottom */}
      <div className="sticky bottom-0 p-3 md:p-4 bg-gray-800 border-t border-gray-700 shadow-md">
        <SendInput />
      </div>
    </div>
  );
};

export default MessageContainer;
