import Image, { StaticImageData } from 'next/image'
import maricelogo from '@/app/src/images/maricelogo.png'
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from './Button'
import Link from 'next/link'

type Props = {
    src?: StaticImageData, 
    title?: string, 
    description?: string,
    lists?: string[],
    buttonText?: string,
    padding?: boolean, 
    className?: string,
    text1?:string, 
    text2?: string, 
    text3?: string, 
    showText?: boolean;
    hideButton?: boolean
    notImage?:boolean;
    noBorder?: string;
    titleText?: string;
    fontSize?: string;
}

const BigCard = ({src, title, description, lists, buttonText, padding, className, text1, text2, text3, showText, hideButton, notImage, noBorder, titleText, fontSize}: Props) => {
  return (
    <div className={`${padding ? "p-5" : ""} ${noBorder || "border border-darkorange"} bg-white rounded-3xl flex flex-col gap-5 items-start`}>
        {notImage ? null : (
            <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1771592225/Screenshot_2026-02-20_at_13.55.13_axehsl.png"} width={1000} height={1000} alt='image' className='rounded-3xl w-full' />
        )}
        {notImage ? (
            <div className="py-1 px-3 bg-lightorange text-majororange text-[12px] rounded-full font-bold">{titleText}</div>
        ) : null}
        <div className={`flex flex-col gap-5 ${className}`}>
            {
                showText && (
                    <div className="flex gap-5 items-center">
                        <p>
                            {text1}
                        </p>
                        |
                        <p>
                        {text2}
                        </p>
                        |
                        <p>
                        {text3}
                        </p>
                    </div>
                )
            }
            <h4 className={` font-bold ${hideButton ? fontSize || "text-xl border-b border-darkorange pb-5" : fontSize || "text-3xl"}`}>{title}</h4>

            {hideButton ? null : (
                <p>{description}</p>
            )}
            {hideButton ? null : (
                <ul className="flex flex-col gap-3">
                    {lists?.map((list, index) => (
                        <li key={index} className="flex items-center gap-1">
                            <CheckCircle className="text-majororange" />
                            <p>{list}</p>
                        </li>
                    ))}
                </ul>
            )}
            {showText && 
                <div className="flex justify-between items-center">
                    <div className="py-1 px-3 bg-lightorange text-majororange text-[12px] rounded-full font-bold">{text1}</div>
                    <Link href={'/'} className='font-bold text-majororange flex items-center gap-3'>Read more <ArrowRight /></Link>
                </div>
            }
            {hideButton ? null : (
                <Button orange text={buttonText} />
            )}
        </div>
    </div>
  )
}

export default BigCard