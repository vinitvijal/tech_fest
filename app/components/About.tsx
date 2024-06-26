'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className='bg-black h-screen w-full pt-20'>
        <div className='flex justify-center items-center translate-y-64'>
            <div className="card min-h-[50vh] w-[60vw] flex flex-col justify-center px-16 py-10 font-semibold">
                <h1 className='text-3xl text-pink-600'>About Hackathon</h1>
                <div className='pt-5 text-xl'>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque veniam reprehenderit qui. Excepturi aut repellat cumque, non incidunt ab quam hic error accusantium recusandae, ut eos eum doloremque expedita porro ipsam ipsum suscipit maxime perspiciatis, impedit maiores quis. Magnam optio repudiandae ea, dolorem voluptatem accusamus quisquam molestias voluptates ut.</span>
                    <span><TypeAnimation
                        sequence={[
                            " We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                        >
                    </TypeAnimation></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About