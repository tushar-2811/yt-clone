import React from 'react'
import VideoCard from '../components/VideoCard'
import VideoGrid from '../components/VideoGrid'
import SideBar from '../components/SideBar'

const LandingPage = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-2'>
             <SideBar/>
        </div>

        <div className='col-span-10'>
        <VideoGrid/>
        </div>
    </div>
  )
}

export default LandingPage
