import Button from '@/app/components/Button'
import GlobalContainer from '@/app/components/GlobalContainer'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ContactInformation = (props: Props) => {
  return (
    <GlobalContainer className='grid md:grid-cols-2 grid-cols-1 gap-10 py-20'>
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <h2 className="md:text-5xl text-3xl font-bold">Contact Information</h2>
                <p className="font-light">Get in touch with us</p>
                <div className="flex items-center gap-5">
                    <Image src={'https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/02-food-delivery-static-centre-hero/images/mail_icon.webp'} width={1000} height={1000} alt="" className='w-15' />
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold md:text-2xl text-xl">Email Us</p>
                        <p className='md:text-md text-sm'>example@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Image src={'https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/02-food-delivery-static-centre-hero/images/call_icon.webp'} width={1000} height={1000} alt="" className='w-15' />
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold md:text-2xl text-xl">Contact us</p>
                        <p className='md:text-md text-sm'>+234 000 0000 000</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Image src={'https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/02-food-delivery-static-centre-hero/images/location_icon.webp'} width={1000} height={1000} alt="" className='w-15' />
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold md:text-2xl text-xl">Visit Us</p>
                        <p className='md:text-md text-sm'>Fincop Ltd. 185, Finance Hub, Chikago, USA 4647</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-3xl md:p-10 p-5 border border-darkorange flex flex-col gap-5">
                <Image width={1000} height={1000} src={'https://kalanidhithemes.com/live-preview/landing-page/appiq/all-demo/multipage/02-food-delivery-static-centre-hero/images/ticket.webp'} alt='image' className='w-15' />
                <h3 className="md:text-5xl text-3xl font-bold">Generate Ticket</h3>
                <p>Need support for our application, service, payment or company, please generate ticket</p>
                <Button text='Generate Ticket Now' orange />
            </div>
        </div>
        <form action="" className="bg-white md:p-10 p-5 rounded-3xl border border-darkorange items-center flex flex-col gap-5">
            <h4 className="md:text-5xl text-3xl font-bold">Message Us</h4>
            <p>Fill up form below our team will get back to you</p>
            <label htmlFor="name" className='w-full'>
                <input type="text" placeholder='Name' className='p-4 outline-none rounded-xl border border-darkorange w-full' />
            </label>
            <label htmlFor="email" className='w-full'>
                <input type="email" placeholder='Email' className='p-4 outline-none rounded-xl border border-darkorange w-full' />
            </label>
            <select name="country" id="country" className='p-4 outline-none rounded-xl border border-darkorange w-full'>
                <option value="Country">Country</option>
            </select>
            <label htmlFor="phone" className='w-full'>
                <input type="tel" placeholder='Phone' className='p-4 outline-none rounded-xl border border-darkorange w-full' />
            </label>
            <textarea name="message" id="message" className='p-5 border outline-none border-darkorange w-full rounded-xl' cols={5} placeholder='Message'></textarea>
            <div className="flex items-center gap-3">
                <input type="checkbox" className='p-2 border border-darkorange' />
                <p className="text-sm">I agree to terms and conditions.</p>
            </div>
            <Button text='Submit your message' orange />
        </form>
    </GlobalContainer>
  )
}

export default ContactInformation