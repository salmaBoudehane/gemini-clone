import React, { useState } from 'react'

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`min-h-screen bg-black-custom bg-opacity-10 flex flex-col justify-between p-5 ${extended? 'w-56' : 'w-20'}`}>
      <div className='flex flex-col gap-8'>
        <div className='cursor-pointer' onClick={() => setExtended(!extended)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className='flex justify-center gap-4 rounded-xl bg-black-custom bg-opacity-10 p-[8px] cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            {extended? 
              <p className='font-montserrat font-medium text-black-custom'>New Chat</p>
              :
              null
            }
        </div>
        {extended?
          <div className='flex flex-col gap-2 items-start'>
              <h3 className='font-montserrat font-semibold text-black-custom text-xl'>Recent</h3>
              <div className='w-full flex justify-start gap-4 p-2 cursor-pointer rounded-lg hover:bg-black-custom hover:bg-opacity-10'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                  <p className='whitespace-nowrap font-montserrat text-black-custom'>What is React...</p>
              </div>
          </div>
          :
          null
        }

      </div>
        
      <div className='flex justify-start gap-3 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            {extended? 
              <p>Help</p>
              :
              null
            }
      </div>
    </div>
  )
}

export default Sidebar
