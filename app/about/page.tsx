import React from 'react'
import AboutUsHero from './components/AboutUsHero'
import Overview from './components/Overview'
import Why from './components/Why'
import WhoWeAre from './components/WhoWeAre'
import SomeFact from './components/SomeFact'
import Reviews from './components/Reviews'
import Meet from './components/Meet'
import SubFooter from './components/SubFooter'
import FAQs from './components/FAQs'
import Support from '../components/Support'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-[#faf9f5] pb-20'>
     <AboutUsHero />
     <Overview />
     <Why />
     <WhoWeAre />   
     <SomeFact />
     <Reviews />
     <Meet />
     <SubFooter />
     <FAQs />
     <Support />
    </div>
  )
}

export default page