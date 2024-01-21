import Blurb from '@/components/Blurb'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Partners from '@/components/Partners'
import About from '@/components/About'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='h-[130px] bg-gray-400'></div>
      <About />
      <Partners />
    </div>
  )
}