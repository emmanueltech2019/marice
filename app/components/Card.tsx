import React from 'react'
import Image, { StaticImageData } from 'next/image'
import deliver from '@/app/src/images/car.png'

type Props = {
    src?: StaticImageData
    title?: string, 
    description?: string, 
    optional?: string;
    className?: string;
    center?: boolean, 
    small?: string
}

const Card = ({src, title, description, optional, className, center, small}: Props) => {
  return (
    <div className={`p-6 rounded-3xl flex flex-col gap-3 bg-majorgray border relative border-darkorange ${className}`}>
        <Image src={src || deliver} width={1000} height={1000} alt='deliver' className='w-15' />
        <p className={`text-lg font-semibold ${center ? "text-center" : 'text-left'}`}>{title}</p>
        <p className={`${small || "text-lg"} ${center ? "text-center" : 'text-left'}`}>{description}</p>
        <div className='p-3'>
            <span className="text-7xl text-center text-darkorange absolute bottom-0 left-1/2 font-bold -translate-x-1/2">{optional}</span>
        </div>
    </div>
  )
}

export default Card