import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <Image src="/Designer.png" alt="logo" width={74} height={29} />
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar