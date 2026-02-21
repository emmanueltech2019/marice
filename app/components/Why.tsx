import React from 'react'
import Image from 'next/image'
import GlobalContainer from './GlobalContainer'
import deliver from '@/app/src/images/car.png'
import quality from '@/app/src/images/quality.png'
import livelocation from '@/app/src/images/livelocation.png'
import support from '@/app/src/images/support.png'
import phone from '@/app/src/images/phone.png'
import shawarma from '@/app/src/images/shawarma.png'
import bugger from '@/app/src/images/bugger.png'
import buggers from '@/app/src/images/buggers.png'
import googleplay from '@/app/src/images/googleplay.png'
import appstore from '@/app/src/images/appstorebtn.png'
import pizza from '@/app/src/images/pizza.png'
import TextStack from './TextStack'
import Card from './Card'
import Button from './Button'
import tradicional from '@/app/src/images/tradicional.png'
import fooddrinks from '@/app/src/images/fooddrink.png'
import fooddrinks1 from '@/app/src/images/fooddrink1.png'
import fooddrinks2 from '@/app/src/images/foodrink2.png'
import userPlus from '@/app/src/images/userPlus.png'
import eatery from '@/app/src/images/eatery.png'
import check from '@/app/src/images/check.png'
import freshfood from '@/app/src/images/freshfood.png'
import healthyfood from '@/app/src/images/healthyfood.png'
import coffee from '@/app/src/images/coffee.png'
import BigCard from './BigCard'
import effortless from '@/app/src/images/efforlessImage.png'
import seamless from '@/app/src/images/seamless.png'
import downloadApp from '@/app/src/images/downloadapp.png'
import toptips from '@/app/src/images/toptips.png'
import supporting from '@/app/src/images/supporting.png'
import whiteSupport from '@/app/src/images/whiteSupport.png'
import { Mail, PhoneCall } from 'lucide-react'
import SubFooter from '../about/components/SubFooter'
import Support from './Support'

type Props = {}

const Why = (props: Props) => {
    const benefitsArray = ["Handling of orders", "Sale system connectivity", "Upfront payment by customers", "More orders"]
  return (
    <div className='py-20 bg-majorgray flex flex-col gap-10 overflow-x-hidden'>
        <TextStack text1='WHY USE MARICE' text2='Why Choose Us' text3='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo temporibus quos aliquid consectetur animi molestiae ratione quam assumenda est sed, architecto consequatur quae laborum voluptatibus obcaecati aliquam quis veniam.' />
        <GlobalContainer className='bg-white mx-5 rounded-3xl border border-darkorange shadow py-15 items-center grid md:grid-cols-3 gap-10 relative'>
            <Image src={bugger} width={1000} height={1000} alt='bugger' className='w-20 absolute -right-8 top-10' />
            <Image src={shawarma} width={1000} height={1000} alt='bugger' className='w-20 absolute -left-10 bottom-30' />
            <Image src={pizza} width={1000} height={1000} alt='bugger' className='w-20 absolute right-80 bottom-0' />
            <div className="flex flex-col gap-5 w-full">
                <Card src={deliver} title='Delivery in 30 min' description='Enjoy your favorite meals delivered to your door in 30 minutes-fast and fresh!' />
                <Card src={quality} title='Quality Food' description='Indulge in high-quality meals souced from top local restaurants, crafted for your satisfaction!' />
            </div>
            <Image src={phone} width={1000} height={1000} alt='phone' className='w-full' />
            <div className="flex flex-col gap-5 w-full">
                <Card src={livelocation} title='Live Map' description='Track your order in real-time with our live map feature for ultimate convenience!.' />
                <Card src={support} title='24/7 Support' description='Get assistance anytime with our 24/7 support team, ready to help you always!' />
            </div>
        </GlobalContainer>
        <div className="flex flex-col gap-5 w-full pb-20 border-b-2 border-darkorange px-5">
            <TextStack text1='YUMMY DISHES!' text2='Access over 1000+ dishes with just a tap' text3='Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.' />
            <div className="flex flex-col gap-3 items-center">
                <p className="font-semibold">Free Deliver for first 5 orders!</p>
                <div className="flex gap-5 justify-center">
                    <Button orange image src={googleplay} />
                    <Button orange image src={appstore} />
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center gap-5 w-full pb-20 px-3 border-b-2 border-darkorange">
            <TextStack text1='OUR CLIENTS' text2='Trusted by 2.5k+ restaurant' />
            <div className="md:flex grid grid-cols-1 flex-wrap md:w-[90%] justify-center items-center gap-5 w-full">
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={tradicional} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={fooddrinks} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={buggers} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={fooddrinks1} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={fooddrinks2} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={freshfood} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={healthyfood} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
                <div className="p-5 rounded-xl shadow group cursor-pointer hover:scale-102 transition-transform duration-200 ease-in-out flex justify-center items-center">
                    <Image src={coffee} width={1000} height={1000} alt='tradicional' className='w-40 saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out' />
                </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
                <p className="font-semibold">Free Deliver for first 5 orders!</p>
                <div className="flex gap-5 justify-center">
                    <Button orange image src={googleplay} />
                    <Button orange image src={appstore} />
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center gap-5 w-full pb-20 border-b-2 border-darkorange">
            <TextStack text1='BENEFITS' text2='Win-win for restaurants & users alike' text3='Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.' />
            <GlobalContainer className="grid md:grid-cols-2 gap-10">
                <BigCard padding lists={benefitsArray} src={effortless} buttonText='Register Your Restaurant' title='Effortless management of restaurant operations' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummytext.' />
                <BigCard padding lists={benefitsArray} src={seamless} buttonText='Register Your Restaurant' title='Seamless ordering process from app for customers' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummytext.' />
            </GlobalContainer>
        </div>
        <GlobalContainer className='bg-white mx-5 rounded-3xl border border-darkorange shadow py-15 items-center flex flex-col gap-10 relative'>
            <TextStack text1='EASY STEPS' text2='How it works' text3='Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.' />
            <div className="grid md:grid-cols-3 gap-5">
                <Card center className='items-center' src={userPlus} title='Download App & Create a free account' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has.' optional='01' />
                <Card center className='items-center' src={eatery} title='Place orders at our preferred eatery' description='Get assistance anytime with our 24/7 support team, ready to help you always!' optional='02' />
                <Card center className='items-center' src={check} title='24/7 Support' description='Get assistance anytime with our 24/7 support team, ready to help you always!' optional='03' />
            </div>
        </GlobalContainer>
        <SubFooter />
        <GlobalContainer className='flex flex-col gap-10'>
            <TextStack text1='BLOG POST' text2='Insights & Inspirations' />
            <div className='grid md:grid-cols-2 gap-10'>
                <BigCard src={toptips} showText text1='Admin' text2='Oct 13, 2026' text3='25 Comments' title='Top Tips for Choosing the Best Food Delivery App for Your Needs.' hideButton className='py-5 px-10' />
                <BigCard src={supporting} showText text1='Cyrus' text2='Oct 13, 2026' text3='25 Comments' title='How Our App Supporting Local Restaurants' hideButton className='py-5 px-10' />
            </div>
        </GlobalContainer>
        <Support />
    </div>
  )
}

export default Why