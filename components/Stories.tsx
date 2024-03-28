import Image from 'next/image'
import React from 'react'
import { storyData } from '@/lib/data'

const Stories = () => {
  return (
    <>
        {storyData.map((s) => (
          <div className="storyImag cursor-pointer" key={s.id}>
            <Image src={s.image} width={60} height={60} alt='story' className='rounded-full ring-2 ring-zinc-200 min-w-16' />
            <h1 className='text-center line-clamp-1 text-[12px]'>{s.text}</h1>
          </div>
        ))}
    </>
  )
}

export default Stories