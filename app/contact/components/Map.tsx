import GlobalContainer from '@/app/components/GlobalContainer'
import React from 'react'

type Props = {}

const Map = (props: Props) => {
  return (
    <GlobalContainer className='mb-20'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15901.725598717287!2d7.03909125!3d4.867159549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1771694696896!5m2!1sen!2sng" width="600" height="450" style={{border: "0", width: '100%', height: "500px"}} loading="lazy"></iframe>
    </GlobalContainer>
  )
}

export default Map