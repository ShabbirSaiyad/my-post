import React, { useState } from 'react';
import './App.css';
import Post1 from './Components/Post1';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [showPost, setShowPost] = useState(false);

  const handleButtonClick = () => {
    setShowPost(true);
  };

  const handleClosePost = () => {
    setShowPost(false);
  };

  return (
    <div className='text-center p-2  bg-opacity-50 w-screen h-auto'>

      <button
        onClick={handleButtonClick}
        className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'
      >
        Show Post 
      </button>

      {showPost && <Post1 onClose={handleClosePost}/>}
      <ToastContainer />
    </div>
  );
}

export default App;
