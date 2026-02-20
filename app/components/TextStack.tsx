import React from 'react'

type Props = {
    text1?: string,
    text2?: string, 
    text3?: string,
    className?: string
}

const TextStack = ({text1, text2, text3, className}: Props) => {
  return (
    <div className={`flex flex-col items-center gap-5 ${className}`}>
        <div className="py-1 px-3 bg-lightorange text-majororange text-[12px] rounded-full font-bold">{text1}</div>
        <h3 className='text-4xl md:text-5xl font-bold text-center'>{text2}</h3>
        <p className="text-lg text-center md:w-[50%] mx-auto">{text3}</p>
    </div>
  )
}

export default TextStack