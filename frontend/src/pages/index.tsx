/* import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) */

import Hero from '@/components/Hero'
import PreviousEvents from '@/components/PreviousEvents'
import SwiperEvents from '@/components/SwiperEvents'
import { ScreenSizeContext } from '@/context/screenSize/screenSizeProvider'
import { useContext } from 'react'

export default function Home() {
  const { viewSize } = useContext(ScreenSizeContext)
  console.log(viewSize)
  return (
    <>
      <Hero />
      <SwiperEvents title='Most Popular' />
      <SwiperEvents title='Music' />
      <PreviousEvents />
    </>
  )
}
