import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className='h-screen w-full'>
        <div className='flex justify-center items-center md:translate-y-64 translate-y-[1200px]'>
            <div className="card1 min-h-[40vh] w-[60vw] flex flex-col justify-center px-16 py-10 font-semibold">
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl text-pink-600'>Brought to you by: </h1>
                    <h1 className='text-xl font-extrabold'>Shaheed Sukhdev College of Business Studies</h1>
                    
                    <h1 className='text-xl'>Department of Computer Science</h1>
                </div>
                <div className='flex md:flex-row flex-col items-center gap-10 pt-10'>
                    <div className='flex flex-col md:gap-4 gap-2 justify-center items-center'>
                        <Image
                            src="/Chromebook.png"
                            width={150}
                            height={150}
                            alt="logo"
                        />
                        <p className=' font-semibold'>Chromebook</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                    <Image
                            src="/Playstation.png"
                            width={40}
                            height={40}
                            alt="logo" className='invert'
                        />
                        <p className=' font-semibold'>PlayStation</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                    <Image
                            src="/Playstation.png"
                            width={40}
                            height={40}
                            alt="logo" className='invert'
                        />
                        <p className='font-semibold'>PlayStation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors