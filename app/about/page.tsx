import React from 'react'
import AboutUsHero from './components/AboutUsHero'
import Overview from './components/Overview'
import Why from './components/Why'
import WhoWeAre from './components/WhoWeAre'
import SomeFact from './components/SomeFact'
import Reviews from './components/Reviews'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-[#faf9f5]'>
     <AboutUsHero />
     <Overview />
     <Why />
     <WhoWeAre />   
     <SomeFact />
     <Reviews />
    </div>
  )
}

export default page