import React from 'react'
import GlobalContainer from '@/app/components/GlobalContainer'
import TextStack from '@/app/components/TextStack'
import amelia from '@/app/src/images/amelia.png'
import emma from '@/app/src/images/emma.png'
import olivia from '@/app/src/images/olivia.png'

type Props = {}

const Reviews = (props: Props) => {
  const carouselArray = [
    {
      name: "Emma Charlotte", 
      location: "Washington", 
      image: emma, 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys dummy",
      star: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Amelia Eva", 
      location: "Chicago", 
      image: amelia, 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys dummy",
      star: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Olivia Luna", 
      location: "Washington", 
      image: olivia, 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys dummy",
      star: "⭐⭐⭐⭐⭐"
    },
  ]
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