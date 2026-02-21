import React from 'react'
import Button from '@/app/components/Button'
import GlobalContainer from '@/app/components/GlobalContainer'
import Image from 'next/image'
import googleplay from '@/app/src/images/googleplay.png'
import appstore from '@/app/src/images/appstorebtn.png'
import downloadApp from '@/app/src/images/downloadapp.png'

type Props = {}

const SubFooter = (props: Props) => {
  return (
    <GlobalContainer className='bg-majororange mx-5 rounded-3xl border border-darkorange shadow py-15 items-center grid md:grid-cols-2 gap-10 relative'>
        <div className="flex flex-col text-white gap-5 items-start">
            <div className="py-1 px-3 bg-lightorange text-majororange text-[12px] rounded-full font-bold">DOWNLOAD</div>
            <h5 className="text-5xl font-bold">Download app to enjoy 4500+ foods</h5>
            <p className=''>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys.</p>
            <div className="flex gap-3">
                <Button image src={googleplay} />
                <Button image src={appstore} />
            </div>
        </div>
        <Image src={downloadApp} width={1000} height={1000} alt='download app' />
    </GlobalContainer>
  )
}

export default SubFooter