import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Card = (props: {user_profile:string, username:string, date:string, image:string}) => {
  return (
    <>
        <div className='card'>
            <div className="card-header flex items-center justify-center gap-2 border-1 border-zinc-500 w-[450px] h-auto">
                <div className="user-profile rounded-full bg-zinc-300 cursor-pointer">
                    <Image src={props.user_profile} width={35} height={35} alt='profile_iamge' className='rounded-full' />
                </div>
                <div className="user-name cursor-pointer">
                    <h6 className='text-sm font-semibold'>{props.username}</h6>
                </div>
                <div className="post-time grow text-sm text-zinc-500 cursor-pointer">
                    <p><span>.</span>{props.date}</p>
                </div>
                <div className="more">
                    <p className='text-xl font-bold cursor-pointer'>...</p>
                </div>
            </div>
            <div className="photo pt-3">
                <Image src={props.image} width={450} height={600} alt='image' className='rounded-sm' />
            </div>
            <div className="butons flex pt-3 gap-4">
                <div className="like">
                <Heart />
                </div>
                <div className="comment">
                <MessageCircle />
                </div>
                <div className="share grow">
                <Send />
                </div>
                <div className="save">
                <Bookmark className='flex-grow'/>
                </div>
            </div>
            <div className="comment">
                <p className='text-zinc-500 pt-2'>Add a comment...</p>
            </div>
        </div>
    </>
  )
}

export default Card