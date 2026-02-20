import GlobalContainer from '@/app/components/GlobalContainer'
import TextStack from '@/app/components/TextStack'
import React from 'react'

type Props = {}

const WhoWeAre = (props: Props) => {
  return (
    <GlobalContainer className={`flex flex-col items-start gap-5 py-20`}>
        <div className="py-1 px-3 bg-lightorange text-majororange text-[12px] rounded-full font-bold">WHO WE ARE</div>
        <h3 className='text-4xl md:text-5xl font-bold'>Fastest delivery in town: <br /> Enjoy tasty dishes at your place any time!</h3>
        <p className="text-lg md:w-[70%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </GlobalContainer>
  )
}

export default WhoWeAre