import GlobalContainer from '@/app/components/GlobalContainer'
import TextStack from '@/app/components/TextStack'
import React from 'react'

type Props = {}

const Reviews = (props: Props) => {
  return (
    <div className='px-5 py-20'>
        <GlobalContainer className='py-20 border-darkorange bg-white border rounded-3xl flex flex-col gap-10 items-center'>
            <TextStack text1='REVIEWS' text2='Client Testimonials' text3='Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.' />
            <div className="flex items-center gap-10">
            </div>
        </GlobalContainer>
    </div>
  )
}

export default Reviews