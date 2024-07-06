import { useState } from 'react';
import { FaImage, FaPlay, FaArrowAltCircleUp } from 'react-icons/fa';

const SentMessage = ({ message }: any) => {
  return (
    <div className="flex justify-end mb-4">
      <div className="bg-blue-500 text-white py-2 px-4 rounded-lg max-w-full">
        {message}
      </div>
    </div>
  );
};

const ReceivedMessage = ({ message }: any) => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-gray-200 text-black py-2 px-4 rounded-lg max-w-full">
        {message}
      </div>
    </div>
  );
};

export const SearchComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSendClick = () => {
    setIsPlaying(!isPlaying);
    // Perform actions when send/play is clicked
  };

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="flex items-center">
        <FaImage className="mr-2 text-gray-600" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 p-2 border rounded focus:outline-none"
        />
        <button className="text-gray-600 focus:outline-none" onClick={handleSendClick}>
          {isPlaying ? <FaPlay /> : <FaArrowAltCircleUp />}
        </button>
      </div>
    </div>
  );
};

const MessagingComponent = () => {
  return (
    <div className="flex flex-col-reverse overflow-y-auto flex-1 bg-gray-100 p-4 mb-4">
      <SentMessage message="Sure, go ahead!" />
      <ReceivedMessage message="I have a question about your services." />
      <SentMessage message="Sure, go ahead!" />
      <ReceivedMessage message="I have a question about your services." />
      <SentMessage message="Sure, go ahead!" />
      <ReceivedMessage message="I have a question about your services." />
      <SentMessage message="Sure, go ahead!" />
      <SentMessage message="Sure, go ahead!" />
      <ReceivedMessage message="I have a question about your services." />
      <SentMessage message="Sure, go ahead!" />
      <ReceivedMessage message="I have a question about your services." />
      <ReceivedMessage message="I have a question about your services." />
      <SentMessage message="Sure, go ahead!" />
      <ReceivedMessage message="I have a question about your services." />
      <SentMessage message="Sure, go ahead!" />
      <ReceivedMessage message="I have a question about your services." />
    </div>
  );
};

const ScrollIcon = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-md rounded-full p-3 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        onClick={scrollToBottom}
        className="text-gray-600"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-5h2v5zm4-5h-2v5h2v-5zm-3-7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
      </svg>
    </div>
  );
};

const ChatGPTSearchPage = () => {
  return (
    <div className="flex flex-col h-screen max-h-[600px]">
      {/* Sidebar (if any) */}
      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-8 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <MessagingComponent />
        </div>
      </div>
      <ScrollIcon />
    </div>
  );
};

export default ChatGPTSearchPage;
















// import React, { useState } from 'react';
// import { FaImage, FaPlay, FaArrowAltCircleUp } from 'react-icons/fa'; // Assuming you're using react-icons for icons


// const SentMessage = ({ message }: any) => {
//   return (
//     <div className="flex justify-end mb-4">
//       <div className="bg-blue-500 text-white py-2 px-4 rounded-lg max-w-xs">
//         {message}
//       </div>
//     </div>
//   );
// };


// const ReceivedMessage = ({ message }: any) => {
//   return (
//     <div className="flex justify-start mb-4">
//       <div className="bg-gray-200 text-black py-2 px-4 rounded-lg max-w-xs">
//         {message}
//       </div>
//     </div>
//   );
// };



// const SearchComponent = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleSendClick = () => {
//     setIsPlaying(!isPlaying);
//     // Perform actions when send/play is clicked
//   };

//   return (
//     <div className="flex items-center justify-between bg-white shadow-md rounded p-4 mb-4">
//       <div className="flex items-center">
//         <FaImage className="mr-2 text-gray-600" /> {/* Image selector icon */}
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full p-2 border rounded focus:outline-none"
//         />
//       </div>
//       <div>
//         <button className="text-gray-600 focus:outline-none" onClick={handleSendClick}>
//           {isPlaying ? <FaPlay /> : <FaArrowAltCircleUp />} {/* Toggle between send and play icons */}
//         </button>
//       </div>
//     </div>
//   );
// };

// const MessagingComponent = () => {
//   return (
//     <div className="flex justify-between items-start bg-gray-100 p-4 mb-4">
//       <ReceivedMessage message="I have a question about your services." />
//       <SentMessage message="Sure, go ahead!" />
//     </div>
//   );
// };

// const ScrollIcon = () => {
//   const scrollToBottom = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="fixed bottom-4 right-4 bg-white shadow-md rounded-full p-3 cursor-pointer">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         width="24"
//         height="24"
//         onClick={scrollToBottom}
//         className="text-gray-600"
//       >
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-5h2v5zm4-5h-2v5h2v-5zm-3-7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
//       </svg>
//     </div>
//   );
// };

// const ChatGPTSearchPage = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar (if any) */}
//       {/* Main content */}
//       <div className="flex-1 bg-gray-100 p-8">
//         <MessagingComponent />
//         <SearchComponent />
//         {/* Other components */}
//       </div>
//       <ScrollIcon />
//     </div>
//   );
// };

// export default ChatGPTSearchPage;



