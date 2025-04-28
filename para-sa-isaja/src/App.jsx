// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [showConfession, setShowConfession] = useState(false);

  const handleReveal = () => {
    setShowConfession(true);
  };

  return (
    <div className="min-h-screen w-full bg-pink-100 flex items-center justify-center p-4 md:p-6">
      {/* Content */}
      <div className="w-full max-w-md mx-auto">
        {!showConfession ? (
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-pink-700">
              Hii Divine <span className="ml-2">💖</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-pink-600 mb-6 md:mb-8">
              I have something to tell you...
            </h2>
            <button
              onClick={handleReveal}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
            >
              See Confession
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-5 md:p-8 w-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-pink-800 text-center">
              💌 My Confession 💌
            </h1>
            
            <div className="space-y-4 text-base md:text-lg text-gray-700">
              <p>
                Hi Divine, I hope you're doing well. Naa lang ko'y gusto i-share nimo ba, 
                <span className="text-pink-600 font-medium"> HAHAHA</span>, medyo weirdo lang jud ni siya kay gihimo pajud og website, 
                <span className="text-pink-600 font-medium"> AHHAHA</span>.
              </p>
              
              <p>
                I've developed feelings towards you, and it's not just a simple crush. Every time mag-storya ta or I see you smile, it brings me unexpected joy. It's like, in those moments, my worries fade away, and I feel so much more complete tungod nimo.
              </p>
              
              <p>
                I just wanted to be honest with you about it, and I don't expect anything in return. I just thought you should know. Even if it feels a bit awkward, I value being honest with you.
              </p>
              
              <p className="text-2xl md:text-3xl text-center mt-4">💖</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;