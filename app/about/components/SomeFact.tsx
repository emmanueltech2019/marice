import React from 'react'
import GlobalContainer from '@/app/components/GlobalContainer'
import Image from 'next/image'
import someFact from '@/app/src/images/somefact.png'
import BigCard from '@/app/components/BigCard'

type Props = {}

const SomeFact = (props: Props) => {
    const someFactArray = ["Lorem Ipsum is simply dummy text", "The printing and typesetting industry lorem", "Has been the industrys dummy"]
  return (
    <GlobalContainer className='grid md:grid-cols-2 items-center grid-cols-1 gap-5'>
        <div className="md:p-15">
            <Image src={someFact} width={1000} height={1000} alt='some fact' className='w-full' />
        </div>
        <BigCard padding noBorder='border-none' notImage titleText='SOME FACT' title='Why we best for delivery.' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy.' lists={someFactArray} fontSize='text-5xl' buttonText='Start Free Trial' />
    </GlobalContainer>
  )
}

export default SomeFact