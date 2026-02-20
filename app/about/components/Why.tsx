import React from 'react'
import GlobalContainer from '@/app/components/GlobalContainer'
import TextStack from '@/app/components/TextStack'
import download from '@/app/src/images/download.png'
import followers from '@/app/src/images/followers.png'
import reviews from '@/app/src/images/reviews.png'
import countries from '@/app/src/images/countries.png'
import Image from 'next/image'

type Props = {}

const Why = (props: Props) => {
  return (
    <div className='px-5'>
        <GlobalContainer className='bg-majororange py-20 rounded-3xl flex flex-col gap-5 items-center text-white relative'>
            <div className="w-40 h-40 bg-white rounded-full absolute top-0 right-80 blur-3xl"></div>
            <div className="w-40 h-40 bg-white rounded-full absolute bottom-0 left-80 blur-3xl"></div>
            <TextStack text1='WHY CHOOSE US' text2='Company Statistics' text3='Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.' />
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5 w-full">
                <div className="border border-white rounded-2xl flex flex-col items-center bg-white/30 gap-5 p-10">
                    <Image src={download} width={1000} height={1000} alt='download' className='w-20' />
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-4xl font-semibold">
                            17M+
                        </span>
                        <p className="font-semibold text-xl">Download</p>
                    </div>
                </div>
                <div className="border border-white rounded-2xl flex flex-col items-center bg-white/30 gap-5 p-10">
                    <Image src={followers} width={1000} height={1000} alt='download' className='w-20' />
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-4xl font-semibold">
                            8M+
                        </span>
                        <p className="font-semibold text-xl">Followers</p>
                    </div>
                </div>
                <div className="border border-white rounded-2xl flex flex-col items-center bg-white/30 gap-5 p-10">
                    <Image src={reviews} width={1000} height={1000} alt='download' className='w-20' />
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-4xl font-semibold">
                            2300+
                        </span>
                        <p className="font-semibold text-xl">Reviews</p>
                    </div>
                </div>
                <div className="border border-white rounded-2xl flex flex-col items-center bg-white/30 gap-5 p-10">
                    <Image src={countries} width={1000} height={1000} alt='download' className='w-20' />
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-4xl font-semibold">
                            150+
                        </span>
                        <p className="font-semibold text-xl">Countries</p>
                    </div>
                </div>
            </div>
        </GlobalContainer>
    </div>
  )
}

export default Why