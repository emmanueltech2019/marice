import React, { ReactNode } from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import smile from '@/app/src/images/smile.png'
import star from '@/app/src/images/star.png'
import fork from '@/app/src/images/fork.png'
import shopping from '@/app/src/images/shoppingbag.png'

type Props = {
}

const Reviews = (props: Props) => {
  return (
    <GlobalContainer className='bg-majororange py-20 grid md:grid-cols-4 grid-cols-2 gap-3 relative'>
        <div className="bg-white/50 blur-2xl w-50 h-50 rounded-full absolute right-80"></div>
        <div className="bg-white/50 bottom-0 blur-2xl w-50 h-50 rounded-full absolute left-80"></div>
        <div className="p-5 rounded-3xl border border-white bg-white/20 backdrop:backdrop-blur-2xl">
            <Image src={smile} width={1000} height={1000} alt='smile' className='w-15 ms-auto' />
            <div className="flex flex-col text-white -mt-4">
                <span className="text-4xl font-bold">5000+</span>
                <p>Happy Users</p>
            </div>
        </div>
        <div className="p-5 rounded-3xl border border-white bg-white/20 backdrop:backdrop-blur-2xl">
            <Image src={star} width={1000} height={1000} alt='smile' className='w-15 ms-auto' />
            <div className="flex flex-col text-white -mt-4">
                <span className="text-4xl font-bold">1879+</span>
                <p>Positive Reviews</p>
            </div>
        </div>
        <div className="p-5 rounded-3xl border border-white bg-white/20 backdrop:backdrop-blur-2xl">
            <Image src={fork} width={1000} height={1000} alt='smile' className='w-15 ms-auto' />
            <div className="flex flex-col text-white -mt-4">
                <span className="text-4xl font-bold">3855+</span>
                <p>Restaurant Listings</p>
            </div>
        </div>
        <div className="p-5 rounded-3xl border border-white bg-white/20 backdrop:backdrop-blur-2xl">
            <Image src={shopping} width={1000} height={1000} alt='smile' className='w-15 ms-auto' />
            <div className="flex flex-col text-white -mt-4">
                <span className="text-4xl font-bold">985M+</span>
                <p>Successful deliveries</p>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Reviews