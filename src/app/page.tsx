'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden relative'>
      <div className='flex flex-col items-center gap-12'>
        {/* STAR */}
        <motion.svg
          width='140'
          height='140'
          viewBox='0 0 200 200'
          initial={{ scale: 0, rotate: 180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <path
            d='M100,0 
             C120,60 140,80 200,100 
             C140,120 120,140 100,200 
             C80,140 60,120 0,100 
             C60,80 80,60 100,0 Z'
            fill='white'
          />
        </motion.svg>

        {/* WEDGE – fill reveals from bottom-left to the other side */}
        <svg width='360' height='180' viewBox='0 0 360 180'>
          <defs>
            <mask id='reveal' maskUnits='userSpaceOnUse'>
              {/* This rect grows from bottom-left (0% 100%) to reveal the wedge */}
              <motion.rect
                x='0'
                y='0'
                width='360'
                height='180'
                fill='white'
                initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
                animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
                style={{ transformOrigin: '0% 100%' }} // bottom-left anchor
              />
            </mask>
          </defs>

          {/* White wedge shape (revealed by the animated mask) */}
          <path
            d='M0 0 
             H360 
             A180 180 0 0 0 180 180 
             A180 180 0 0 0 0 0 
             Z'
            fill='white'
            mask='url(#reveal)'
          />
        </svg>

        {/* TEXT */}
        <motion.h1
          className='text-5xl font-light tracking-[0.4em] ml-[0.4em]'
          initial={{ opacity: 0, y: 20, letterSpacing: '0.8em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.4em' }}
          transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
        >
          ELEVATE
        </motion.h1>
      </div>
    </div>
  );
}
