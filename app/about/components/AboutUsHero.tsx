import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import aboutHeroImage from '@/app/src/images/aboutHeroImage.png'
import aboutHeroImage1 from '@/app/src/images/aboutHeroImage1.png'

const AboutUsHero = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center h-[28rem] w-full bg-[#f4f2e9] relative overflow-hidden'>
        <Image src={aboutHeroImage} width={1000} height={1000} alt='about hero image' className='md:w-70 w-40 absolute left-5 bottom-0' />
        <Image src={aboutHeroImage1} width={1000} height={1000} alt='about hero image' className='w-30 md:w-50 absolute right-5 bottom-10' />
        <h1 className="text-7xl font-bold text-majororange text-center">About Us</h1>
        <div className="flex igems-center gap-3">
            <Link href={'/'}>Home</Link>
            »
            <p>About Us</p>
        </div>
    </div>
  )
}

export default AboutUsHero