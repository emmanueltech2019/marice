import React from 'react'
import GlobalContainer from '@/app/components/GlobalContainer'
import TextStack from '@/app/components/TextStack'
import Image from 'next/image'
import willium from '@/app/src/images/willium.png'
import averill from '@/app/src/images/Averill.png'
import geo from '@/app/src/images/geo.png'
import { Facebook, Instagram, Twitter } from 'lucide-react'

type Props = {}

const Meet = (props: Props) => {
  return (
    <GlobalContainer className='pb-50 mb-50 h-[60rem]'>
        <TextStack text1='EXPERTS' text2='Meet our team' text3='Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.' />
        <div className="relative md:w-[40%] flex justify-center items-center w-full mx-auto my-40 h-full">
            <div className="w-full p-2 rounded-4xl bg-white border border-darkorange flex flex-col gap-5 items-cente absolute rotate-5">
                <div className="w-full border border-darkorange rounded-4xl">
                    <Image src={willium} className='w-full' width={1000} height={1000} alt='willium' />
                </div>
                <div className="flex flex-col text-center items-center">
                    <p className="font-semibold text-xl">Willium Scott</p>
                    <p className="font-light mb-2">CEO & Managing Director</p>
                    <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Facebook />
                        </div>
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Twitter />
                        </div>
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Instagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 rounded-4xl bg-white border border-darkorange flex flex-col gap-5 items-cente absolute -rotate-5">
                <div className="w-full border border-darkorange rounded-4xl">
                    <Image src={averill} className='w-full' width={1000} height={1000} alt='willium' />
                </div>
                <div className="flex flex-col text-center items-center">
                    <p className="font-semibold text-xl">Averill Rack</p>
                    <p className="font-light mb-2">Team Lead</p>
                    <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Facebook />
                        </div>
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Twitter />
                        </div>
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Instagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 rounded-4xl bg-white border border-darkorange flex flex-col gap-5 items-cente absolute">
                <div className="w-full border border-darkorange rounded-4xl">
                    <Image src={geo} className='w-full' width={1000} height={1000} alt='willium' />
                </div>
                <div className="flex flex-col text-center items-center">
                    <p className="font-semibold text-xl">Geo Back</p>
                    <p className="font-light mb-2">Product Manager</p>
                    <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Facebook />
                        </div>
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Twitter />
                        </div>
                        <div className="w-8 h-8 rounded-full border flex justify-center items-center p-2">
                            <Instagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Meet