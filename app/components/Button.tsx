import React from 'react'
import Image, { StaticImageData } from 'next/image'
import appstore from '@/app/src/images/appstorebtn.png'

type Props = {
    image?: boolean
    text?: string
    src?: StaticImageData;
    orange?: boolean;
    className?: string
    white?: string
    imgClass?: string
}

const Button = ({image, text, src, orange, className, white, imgClass}: Props) => {
  return (
    <button className={`text-white ${orange ? "bg-majororange hover:bg-black" : `bg-black ${white || 'hover:bg-majororange'} hover:bg-majororange`} py-3 px-10 cursor-pointer transition-bg duration-200 rounded-xl ${className}`}>
        {image ? <Image src={src || appstore} width={1000} height={1000} alt='image' className={`w-35 ${imgClass}`} /> : text}
    </button>
  )
}

export default Button