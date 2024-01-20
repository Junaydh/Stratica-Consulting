'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [color, setColour] = useState('transparent')
  const [textColor, setTextColour] = useState('white')

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColour('#ffffff')
        setTextColour('#000000')
      } else {
        setColour('transparent')
        setTextColour('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])


  return (
    <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href="/">
          <Image src="/Designer.png" alt="logo" width={100} height={35} />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href="/">Home</Link>
          </li>
          <li className='p-4'>
            <Link href="/about">About</Link>
          </li>
          <li className='p-4'>
            <Link href="/portfolio">Work</Link>
          </li>
          <li className='p-4'>
            <Link href="/contact">Contact</Link>
          </li>

        </ul>
        <div className='block sm:hidden z-10'>
          {isOpen ? (<AiOutlineClose size={25} style={{ color: `${textColor}` }} />) : (<AiOutlineMenu size={25} style={{ color: `${textColor}` }} />)}
        </div>
        <div className={isOpen ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li className='p-4 text-xl hover:text-gray-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='p-4 text-xl hover:text-gray-500'>
              <Link href="/about">About</Link>
            </li>
            <li className='p-4 text-xl hover:text-gray-500'>
              <Link href="/portfolio">Work</Link>
            </li>
            <li className='p-4 text-xl hover:text-gray-500'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar