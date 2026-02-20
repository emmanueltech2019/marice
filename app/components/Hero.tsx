import React from 'react'
import Image from 'next/image'
import Button from './Button'
import appstore from '@/app/src/images/appstorebtn.png'
import googleplay from '@/app/src/images/googleplay.png'
import heroImage from '@/app/src/images/heroImage.png'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col justify-end items-center gap-25 w-full md:h-[60rem] h-[50rem]'>
        <div className="flex flex-col justify-center items-center gap-7 p-3">
            <h1 className="md:text-7xl text-4xl text-center font-bold text-majororange">Fast food delivery in town!</h1>
            <p className="text-lg text-center">We commit to delivering your food to you within 30 minutes. <br /> If we would fail, we will give the food free.</p>
            <div className="flex flex-col gap-3 items-center">
                <p className="font-semibold">Free Deliver for first 5 orders!</p>
                <div className="flex gap-5 justify-center">
                    <Button image src={googleplay} />
                    <Button image src={appstore} />
                </div>
            </div>
        </div>
        <Image src={heroImage} width={1000} height={1000} alt='hero image' />
    </div>
  )
}

export default Hero