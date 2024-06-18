
import React, { useState } from 'react';
import avatar from '../../../assets/navprofile.png';


interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  newMessages: number;
  time: string;
  messages: Array<Message>;
}

interface Message {
  id: number;
  time: string;
  content: string;
  sender: 'sent' | 'received';
}

export const Messages: React.FC = () => {
  const [contacts] = useState<Contact[]>([
    {
      id: 1,
      name: 'Ambulance',
      avatar: avatar,
      lastMessage: 'Consectetur pulvinar tempor cras...',
      newMessages: 3,
      time: '10:00 AM',
      messages: [
        { id: 1, content: 'Need an ambulance immediately!', sender: 'received', time: '12:00 am' },
        { id: 2, content: 'Ambulance is on its way.', sender: 'sent', time: '12:05 am' },
        { id: 3, content: 'Please hurry, it\'s urgent.', sender: 'received', time: '12:10 am' },
        { id: 4, content: 'ETA is 5 minutes.', sender: 'sent', time: '12:15 am' },
        { id: 5, content: 'Thank you!', sender: 'received', time: '12:20 am' }
      ]
    },
    {
      id: 2,
      name: 'Police Help',
      avatar: avatar,
      lastMessage: 'Consectetur pulvinar tempor cras...',
      newMessages: 1,
      time: '11:00 AM',
      messages: [
        { id: 1, content: 'There is a suspicious person near my house.', sender: 'received', time: '11:00 pm' },
        { id: 2, content: 'We are dispatching an officer to your location.', sender: 'sent', time: '11:05 pm' },
        { id: 3, content: 'Thank you, please hurry.', sender: 'received', time: '11:10 pm' },
        { id: 4, content: 'The officer will arrive in 10 minutes.', sender: 'sent', time: '11:15 pm' },
        { id: 5, content: 'Thank you, I feel safer now.', sender: 'received', time: '11:20 pm' }
      ]
    }
  ])
  

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
//   const {isDarkMode} = useDarkMode()
const isDarkMode = false

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setMessages(contact.messages);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg: Message = {
        id: messages.length + 1,
        content: newMessage,
        sender: 'sent',
        time: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const MessageList = () => (
    <div className={`flex flex-col h-full overflow-y-auto p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex flex-col ${message.sender === 'sent' ? 'items-end' : 'items-start'} mb-4`}>
            <div className={`p-3 rounded-xl ${message.sender === 'sent' ? 'bg-blue-500 text-white' : isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
              {message.content}
            </div>
            <div className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} ${message.sender === 'sent' ? 'text-right' : 'text-left'}`}>
              {message.time}
            </div>
          </div>
        ))}
      </div>
      <div className={`flex items-center border-t p-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <input 
          placeholder="Send New Message..." 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          className={`flex-1 p-2 rounded-lg mr-2 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'}`} 
        />
        <button onClick={handleSendMessage} className="p-2 bg-blue-500 text-white rounded-lg">Send</button>
      </div>
    </div>
  );

  const renderContactList = () => (
    <div className={`lg:block h-screen w-full lg:w-2/5 shadow-lg rounded-2xl ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='m-4'>
        <h1 className='text-2xl font-semibold mb-4'>Messages</h1>
        <input
          type="text"
          placeholder="Search contacts"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className={`w-full p-2 mb-4 border-2 rounded-xl ${isDarkMode ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-900 border-gray-400'}`}
        />
        <ul className="divide-y divide-gray-200">
          {filteredContacts.map(contact => (
            <li key={contact.id} onClick={() => handleContactClick(contact)} className="cursor-pointer flex items-center py-4">
              <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full mr-4" />
              <div className="flex-grow">
                <div className="font-semibold">{contact.name}</div>
                <div className="text-sm text-gray-500">{contact.lastMessage}</div>
              </div>
              <div className="flex flex-col items-end">
                {contact.newMessages > 0 && (
                  <div className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs mb-1">{contact.newMessages}</div>
                )}
                <div className="text-xs text-gray-400">{contact.time}</div>
              </div>
            </li>
          ))}
        </ul>
        {filteredContacts.length === 0 && <div>No contacts found</div>}
      </div>
    </div>
  );

  return (
    <div className={`flex gap-8 p-12 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'}`}>
      {renderContactList()}
      <div className={`lg:block w-full lg:w-3/5 shadow-lg rounded-2xl ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {selectedContact ? (
          <MessageList />
        ) : (
          <div className="text-center mt-20 text-4xl font-bold">Select a contact to view messages</div>
        )}
      </div>
    </div>
  );
};


