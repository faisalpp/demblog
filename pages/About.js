import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex lg:justify-center'>
    <div className='flex flex-col mt-10 bg-white shadow-lg rounded-lg p-8 lg:w-1/2'>
    <div className='flex justify-center mb-5'><Image className='rounded-full' src={'/bird.jpg'} width={100} height={100}/></div>
    <h3 className='border-b-2 text-xl font-bold'>Hi, I am M.Faisal</h3>
    <p className='font-medium mt-5 mb-5'>I am a full stack Web Developer.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
    </div>
    </div>
  )
}

export default About