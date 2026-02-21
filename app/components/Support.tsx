import React from 'react'
import GlobalContainer from './GlobalContainer'
import { Mail, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import whiteSupport from '@/app/src/images/whiteSupport.png'

type Props = {}

const Support = (props: Props) => {
  return (
    <GlobalContainer>
            <div className="py-20 px-2 md:px-15 bg-majororange rounded-2xl flex md:flex-row gap-5 flex-col items-center justify-between">
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <Image src={'https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/02-food-delivery-static-centre-hero/images/customer-icon.webp'} width={1000} height={1000} alt='white support' className='w-15' />
                    <div className="flex flex-col gap-2">
                        <h5 className="text-4xl font-bold text-white md:text-left text-center">Need Support</h5>
                        <p className="text-white md:text-left text-center">Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button className='p-5 text-white bg-black hover:text-black hover:bg-white flex items-center gap-1 font-bold rounded-xl transition-all duration-200 ease-in-out'>
                        <PhoneCall />
                        Call us now
                    </button>
                    <button className='p-5 text-black bg-white hover:text-white hover:bg-black flex items-center gap-1 font-bold rounded-xl transition-all duration-200 ease-in-out'>
                        <Mail />
                        Email us
                    </button>
                </div>
            </div>
        </GlobalContainer>
  )
}

export default Support