'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import appstore from '@/app/src/images/appstorebtn.png'
import googleplay from '@/app/src/images/googleplay.png'
import heroImage from '@/app/src/images/heroImage.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type Props = {}

const Hero = (props: Props) => {
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(".clip", {
            clipPath: 'polygon(50.5% 0%, 50% 53.23%, 100% 38.77%, 50% 53.23%, 80.9% 97.55%, 50% 53.23%, 19.1% 97.55%, 50% 53.23%, 0% 38.77%, 0% 0%)',
            duration: 0.2, 
            ease: "power4.inOut"
        }, "<").to(".clip", {
            clipPath: 'polygon(50.5% 0%, 50% 53.23%, 100% 38.77%, 50% 53.23%, 80.9% 97.55%, 50% 53.23%, 0% 100%, 0% 61.48%, 0% 38.77%, 0% 0%)',
            duration: 0.4, 
            ease: "power4.inOut"
        }, "<").to(".clip", {
            clipPath: 'polygon(50.5% 0%, 50% 53.23%, 100% 38.77%, 50% 53.23%, 100% 100%, 50.75% 100%, 0% 100%, 0% 61.48%, 0% 38.77%, 0% 0%)',
            duration: 0.6, 
            ease: "power4.inOut"
        }, "<").to(".clip", {
            clipPath: 'polygon(50.5% 0%, 50% 53.23%, 100% 38.77%, 100% 38.73%, 100% 100%, 50.75% 100%, 0% 100%, 0% 61.48%, 0% 38.77%, 0% 0%)',
            duration: 0.8, 
            ease: "power4.inOut"
        }, "<").to(".clip", {
            clipPath: 'polygon(50.5% 0%, 100% 0%, 100% 38.77%, 100% 38.73%, 100% 100%, 50.75% 100%, 0% 100%, 0% 61.48%, 0% 38.77%, 0% 0%)',
            duration: 1, 
            ease: "power4.inOut"
        }, "<")
    }, {})
  return (
    <div className='flex flex-col justify-end items-center gap-25 w-full bg-gray-100 md:h-[60rem] h-[50rem] clip' style={{
        clipPath: "polygon(50% 2.45%, 50% 53.23%, 100% 38.77%, 50% 53.23%, 80.9% 97.55%, 50% 53.23%, 19.1% 97.55%, 50% 53.23%, 0% 38.77%, 50% 53.23%)"
    }}>
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