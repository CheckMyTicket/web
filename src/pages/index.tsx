/* import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) */

import Hero from '@/components/Hero'
import PreviousEvents from '@/components/PreviousEvents'
import SwiperEvents from '@/components/SwiperEvents'

export default function Home() {
  return (
    <>
      <Hero />
      <SwiperEvents title='Most Popular' />
      <SwiperEvents title='Music' />
      <PreviousEvents />
    </>
  )
}
