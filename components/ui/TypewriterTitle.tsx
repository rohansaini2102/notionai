'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterTitle = () => {
  return (
    <div className="font-sans">
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("⚡ Supercharged Productivity.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("✨ AI-Powered Insights.")
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterTitle;