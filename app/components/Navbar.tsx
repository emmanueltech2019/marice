'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/app/src/images/maricelogo.png'
import Link from 'next/link'
import Button from './Button'
import { Menu } from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
    const [navActive, setNavActive] = useState<boolean>(false)
  return (
    <div className='fixed bg-white/20 backdrop-blur-xl z-10 flex justify-between items-center px-5 md:px-30 py-5 w-full'>
        <Image src={logo} width={1000} height={1000} alt='logo' className='w-35' />
        <div className="flex items-center gap-20">
            <ul className={`flex z-1 items-center gap-10 md:relative fixed md:flex-row flex-col md:bg-transparent bg-majorgray w-full left-0 md:top-0 top-25 md:p-0 p-10 transition-all duration-200 ease-in-out ${navActive ? "opacity-100 translate-y-0" : 'md:translate-y-0 -translate-y-100 md:opacity-100 opacity-0'}`}>
                <li className='font-semibold hover:text-majororange transition-bg duration-200'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='font-semibold hover:text-majororange transition-bg duration-200'>
                    <Link href={'/about'}>About</Link>
                </li>
                <li className='font-semibold hover:text-majororange transition-bg duration-200'>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
            <div className={`${navActive ? "block" : 'hidden'} h-screen fixed top-35 bg-black/20 w-full left-0`}></div>
            <Button text='7 Days Free Trial' className='flex-shrink-0' orange />
            <Menu className="md:hidden block cursor-pointer" size={30} onClick={() => setNavActive(!navActive)} />
        </div>
    </div>
  )
}

export default Navbar