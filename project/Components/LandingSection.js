import KeyboardImg from "../assets/keyboard-success.jpg"
import React from 'react';
import Link from 'next/link';
import Payment from "../assets/online-payment.json"
import { Player,Controls } from '@lottiefiles/react-lottie-player'
const LandingSection = () => {
  return (
    <section
      className="h-3/4 w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${KeyboardImg.src}')` }}
    >
    <div className="flex flex-row items-center justify-center space-x-12 py-20">
      <div className="w-1/2">
      <Player
      autoplay 
      keepLastFrame
      src={Payment}
      style={{ height: '300px', width: '300px' }}
      >

    </Player>
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-blue-500">H</span>appy mall
        </h1>
        <h2 className="text-xl text-white-200">
          Happy mall, gives you joy way more.
        </h2>
        <Link href='/'>
        <button className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
          Back to home page
        </button>

        </Link>

      </div>
    </div>
    </section>
  );
};

export default LandingSection;