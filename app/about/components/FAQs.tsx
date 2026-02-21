'use client'
import React, { useRef, useState } from 'react'
import GlobalContainer from '@/app/components/GlobalContainer'
import TextStack from '@/app/components/TextStack'
import { Plus } from 'lucide-react'

type Props = {}

const FAQs = (props: Props) => {
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([])
    const FAQ = [
        {
            title: "How will the app be useful to me?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
        {
            title: "What support will i get in premium package?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
        {
            title: "Can i get update for free?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
        {
            title: "How to setup account?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
        {
            title: "Is there any hidden cost?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
        {
            title: "What are the proceedures to get refund?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
        {
            title: "How to setup account?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
        {
            title: "Is there any discount on packaes?", 
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsu m has been the industrys standard dummy text ever since the when an unknown printer."
        },
    ]

    const [active, setActive] = useState<string>(FAQ[0].title)
    return (
    <GlobalContainer className='py-20'>
        <TextStack text1='QUESTIONS & ANSWER' text2='FAQs - Frequently Asked Questions' />
        <div className="grid md:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col gap-5 w-full">
                {
                    FAQ.slice(0, 4).map((f, index) => (
                        <div onClick={() => setActive(prev => prev === f.title ? "" : f.title)} key={index} className="border border-darkorange p-5 group cursor-pointer rounded-xl w-full flex flex-col">
                            <div className="flex justify-between items-center">
                                <p className={`font-bold text-xl ${active === f.title ? "text-majororange" : ""}`}>{f.title}</p>
                                <Plus className={`group-hover:rotate-90 transition-transform duration-200 ease-in-out ${active === f.title ? "rotate-45 text-majororange" : 'rotate-0'}`} />
                            </div>
                            <div ref={(el) => {accordionRefs.current[index] = el}} style={{
                                height: active === f.title ? `${accordionRefs.current[index]?.scrollHeight}px` : '0px',
                                overflow: 'hidden', 
                                transition: 'height 0.2s ease-in-out, clip-path 0.5s ease-in-out', 
                                clipPath: active === f.title ? "polygon(48% 0%, 100% 0%, 100% 38.77%, 100% 60.73%, 100% 100%, 51.75% 100%, 0% 100%, 0% 62.98%, 0% 38.77%, 0% 0%)" : "polygon(50% 2.45%, 54.81% 40.85%, 100% 38.77%, 54.81% 47.85%, 80.9% 97.55%, 50% 53.23%, 19.1% 97.55%, 44.37% 47.85%, 0% 38.77%, 45.24% 40.85%)"
                            }}>
                                {f.content}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col gap-5 w-full">
                {
                    FAQ.slice(4).map((f, index) => (
                        <div onClick={() => setActive(prev => prev === f.title ? "" : f.title)} key={index} className="border border-darkorange p-5 group cursor-pointer rounded-xl w-full flex flex-col">
                            <div className="flex justify-between items-center">
                                <p className={`font-bold text-xl ${active === f.title ? "text-majororange" : ""}`}>{f.title}</p>
                                <Plus className={`group-hover:rotate-90 transition-transform duration-200 ease-in-out ${active === f.title ? "rotate-45 text-majororange" : 'rotate-0'}`} />
                            </div>
                            <div ref={(el) => {accordionRefs.current[index] = el}} style={{
                                height: active === f.title ? `${accordionRefs.current[index]?.scrollHeight}px` : '0px',
                                overflow: 'hidden', 
                                transition: 'height 0.2s ease-in-out, clip-path 0.5s ease-in-out', 
                                clipPath: active === f.title ? "polygon(48% 0%, 100% 0%, 100% 38.77%, 100% 60.73%, 100% 100%, 51.75% 100%, 0% 100%, 0% 62.98%, 0% 38.77%, 0% 0%)" : "polygon(50% 2.45%, 54.81% 40.85%, 100% 38.77%, 54.81% 47.85%, 80.9% 97.55%, 50% 53.23%, 19.1% 97.55%, 44.37% 47.85%, 0% 38.77%, 45.24% 40.85%)"
                            }}>
                                {f.content}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </GlobalContainer>
  )
}

export default FAQs