'use client'
import React, { useEffect, useRef, useState } from 'react'
import GlobalContainer from '@/app/components/GlobalContainer'
import TextStack from '@/app/components/TextStack'
import amelia from '@/app/src/images/amelia.png'
import emma from '@/app/src/images/emma.png'
import olivia from '@/app/src/images/olivia.png'
import Image from 'next/image'

type Props = {}

const Reviews = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [transition, setTransition] = useState<string>("")

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

  useEffect(() => {
    const currentRef = carouselRefs.current[0];
    if(!currentRef) return

    const updateSize = () => {
      setWidth(currentRef.offsetWidth)
    }

    updateSize

    const resizeObserver = new ResizeObserver(updateSize);

    resizeObserver.observe(currentRef);

    return () => {
      resizeObserver.disconnect()
    }

  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if(currentIndex >= carouselArray.length) {
        setTimeout(() => {
          setTransition("none")
          setCurrentIndex(0)
        }, 1000)
      } else {
        setCurrentIndex(prev => prev + 1)
        setTransition("transform 1s")
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [currentIndex])

  return (
    <div className='px-5 py-20'>
        <GlobalContainer className='py-20 border-darkorange bg-white border rounded-3xl flex flex-col gap-10 items-center'>
            <TextStack text1='REVIEWS' text2='Client Testimonials' text3='Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.' />
            <div className="w-full flex flex-col gap-10">
              <div className="w-full overflow-hidden">
                <div className="flex w-full" style={{
                  transform: `translateX(${width * -currentIndex}px)`,
                  transition: `${transition}`
                }}>
                  {carouselArray.map((carousel, index) => (
                    <div ref={(el) => {carouselRefs.current[index] = el}} key={index} className="flex md:flex-row flex-col items-center gap-10 flex-shrink-0 w-full">
                      <Image src={carousel.image} width={1000} height={1000} alt={carousel.name} className='w-50' />
                      <div className="flex flex-col gap-5">
                        <p>{carousel.star}</p>
                        <h4 className="text-3xl font-semibold">{carousel.description}</h4>
                        <p className="font-semibold text-xl">{carousel.name}, <span className="text-md font-light">{carousel.location}</span></p>
                      </div>
                    </div>
                  ))}
                  <div className="flex md:flex-row flex-col items-center gap-10 flex-shrink-0 w-full">
                      <Image src={emma} width={1000} height={1000} alt={'olivia'} className='w-50' />
                      <div className="flex flex-col gap-5">
                        <p>⭐⭐⭐⭐⭐</p>
                        <h4 className="text-3xl font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industrys dummy</h4>
                        <p className="font-semibold text-xl">Emma Charlotte, <span className="text-md font-light">Washington</span></p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                {carouselArray.map((_, index) => (
                  <div onClick={() => setCurrentIndex(index)} key={index} className={`w-5 h-1 rounded-full border border-gray-100 ${currentIndex === index ? "bg-majororange" : ""}`}></div>
                ))}
              </div>
            </div>
        </GlobalContainer>
    </div>
  )
}

export default Reviews