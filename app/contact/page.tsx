import React from 'react'
import ContactHero from './components/ContactHero'
import ContactInformation from './components/ContactInformation'
import Map from './components/Map'
import Support from '../components/Support'


type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-[#faf9f5] py-20'>
     <ContactHero />
     <ContactInformation />
     <Map />
     <Support />
    </div>
  )
}

export default page