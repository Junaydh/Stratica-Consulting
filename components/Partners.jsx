import deen from '../public/deen-logo.png'
import cmha from '../public/cmha-logo.svg'
import Image from 'next/image'
import Logo from './Logo'

const Partners = () => {
  return (
    <div>
      <div className='max-w-[1240px] mx-auto text-center py-24'>
        <h1 className='text-4xl text-left font-bold text-gray-500 mb-5 underline underline-offset-8'>Our Partners</h1>
        <div className='grid grid-cols-2'>
          <Logo src={deen} alt='deen' />
          <div className='mt-7'>
            <Image src={cmha} alt='cmha' />
          </div>
        </div>
        <p className='text-center text-2xl'>
          We are proud to be partnered with Deen Support Services and the Canadian Mental Health Association.
        </p>
      </div>
    </div>
  )
}

export default Partners