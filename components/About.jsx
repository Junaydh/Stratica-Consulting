import React from 'react'
import Image from 'next/image'
import ceo from '../public/ceo.jpeg'

const About = () => {
  return (
    <div className='bg-gray-100'>
      <div id="blurb" className='max-w-[1240px] mx-auto py-16'>
        <h1 className='font-bold text-4xl text-center' >Who We Are</h1>
        <Image className='rounded-full mt-10 mx-auto center' src={ceo} alt="CEO Hossam Khedr" />
        <h2 className='text-2xl text-center mt-10 ml-2 mr-2 font-bold text-slate-500'>Hossam Khedr</h2>
        <h3 className='text-xl text-center ml-2 mr-2 mb-5 font-bold text-slate-900'>Founder & CEO</h3>
        <p className='text-xl text-center mt-10 ml-2 mr-2 mb-5 font-medium'>
          Hossam is the founder and lead consultant of Stratica Consulting since 2011. He graduated
          from Charles Stuart University with a Degree in Information Technology and then completed
          his Master degree in Business Administration (MBA) from the University of Windsor, Ontario.
        </p>
        <p className='text-xl text-center mt-10 ml-2 mr-2 mb-5 font-medium'>
          Hossam has over 20 years of experience in the IT industry, currently serving as the Director of IT at the Canadian Mental Health Association of Peel-Dufferin. Previous to this role, Hossam served as Director of IT Development, Support, and Policy Servicing at Sagen MI, previously known as GenWorth Canada.
        </p>
        <p className='text-xl text-center mt-10 ml-2 mr-2 mb-5 font-medium'>
          In his spare time, he manages a children & youth community soccer league in Mississauga, Ontario.
        </p>
      </div>
    </div>
  )
}

export default About