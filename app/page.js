import Blurb from '@/components/Blurb'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Partners from '@/components/Partners'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero heading='Stratica Consulting' message='For all of your IT solutions' />
      <Blurb />
      <Partners />
    </div>
  )
}
