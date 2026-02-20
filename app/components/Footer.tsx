import React from 'react'
import GlobalContainer from './GlobalContainer'
import Image from 'next/image'
import logo from '@/app/src/images/maricelogo.png'
import appstore from '@/app/src/images/appstorebtn.png'
import googleplay from '@/app/src/images/googleplay.png'
import Button from './Button'
import Link from 'next/link'
import { Facebook, Instagram, Send, Twitter } from 'lucide-react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-col gap-10'>
        <GlobalContainer className='pt-10'>
            <div className="flex gap-10 md:flex-row flex-col">
                <div className="flex flex-col gap-10 md:w-[40%] flex-shrink-0">
                    <Image src={logo} width={1000} height={1000} alt='logo' className='w-40' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem sum has been the industrys standard dummytext ever since the when an unknown printer took.</p>
                    <div className="flex gap-5">
                        <Button image src={appstore} />
                        <Button image src={googleplay} />
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-shrink-0">
                    <p className="font-bold text-xl">Quick Link</p>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/contact'}>Contact</Link>
                </div>
                <div className="flex flex-col gap-5 flex-shrink-0">
                    <p className="font-bold text-xl">Support</p>
                    <Link href={'/'}>FAQs</Link>
                    <Link href={'/about'}>Support</Link>
                    <Link href={'/contact'}>How it works</Link>
                    <Link href={'/contact'}>Terms & Coditions</Link>
                    <Link href={'/contact'}>Privacy policy</Link>
                </div>
                <div className="flex flex-col gap-5 flex-shrink-0 md:w-[30%]">
                    <p className="font-bold text-xl">Subscribe us</p>
                    <p>Subscribe our newsletter to receive latest updates regularly from us!</p>
                    <div className="flex justify-between bg-white rounded-xl border border-darkorange">
                        <input type="text" placeholder='Enter your email' className='p-3' />
                        <div className="p-5 rounded-xl bg-majororange text-white">
                            <Send />
                        </div>
                    </div>
                    <p className="text-sm">By clicking send link you agree to receive message.</p>
                </div>
            </div>
        </GlobalContainer>
        <GlobalContainer className='flex md:flex-row flex-col gap-3 items-center justify-between bg-lightorange py-5'>
            <p>©Copyrights 2026. All rights reserved.</p>
            <div className="flex gap-3 items-center">
                <div className="flex justify-between items-center rounded-full bg-white border border-darkorange p-1">
                    <Facebook />
                </div>
                <div className="flex justify-between items-center rounded-full bg-white border border-darkorange p-1">
                    <Twitter />
                </div>
                <div className="flex justify-between items-center rounded-full bg-white border border-darkorange p-1">
                    <Instagram />
                </div>
            </div>
            <p>Design & developed by <Link href='/' className='underline'>Vine Africa</Link></p>
        </GlobalContainer>
    </div>
  )
}

export default Footer