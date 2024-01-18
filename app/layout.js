import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const raleway = Raleway({ display: 'swap', subsets: ['latin'], weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] })

export const metadata = {
  title: 'Stratica Consulting',
  description: 'For all of your IT solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
