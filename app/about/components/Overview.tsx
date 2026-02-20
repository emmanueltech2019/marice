import BigCard from '@/app/components/BigCard'
import GlobalContainer from '@/app/components/GlobalContainer'
import React from 'react'
import service from '@/app/src/images/service.png'
import Image from 'next/image'
import { PlayIcon } from 'lucide-react'

type Props = {}

const Overview = (props: Props) => {
    const overviewListArray = ["Lorem Ipsum is simply dummy text", "The printing and typesetting industry lorem", "Has been the industrys dummy", "Text ever since the when an unknown"]
  return (
    <GlobalContainer className='grid md:grid-cols-2 gap-10 py-40'>
        <BigCard notImage noBorder='border-none' padding titleText='OVERVIEW' title='How we serve best food on time to you in town.' fontSize='text-3xl md:text-5xl' buttonText='Start Free Trial' description='Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has been the industrys standard dummy text ever since.' lists={overviewListArray} />
        <div className="w-full relative">
            <Image src={service} width={1000} height={1000} alt='service' className='w-full' />
            <div className="w-30 h-30 rounded-full flex justify-center items-center bg-white/80 text-majororange absolute top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2">
                <PlayIcon />
            </div>
        </div>
    </GlobalContainer>
  )
}

export default Overview