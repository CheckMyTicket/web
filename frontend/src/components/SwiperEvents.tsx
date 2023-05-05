import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import EventCard from './EventCard'
import { useContext, useRef } from 'react'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { ScreenSizeContext } from '@/context/screenSize/screenSizeProvider'

interface Props {
  title?: string
}

gsap.registerPlugin(ScrollTrigger)

const EVENTS_LENGTH_X2 = 10

export default function SwiperEvents({ title }: Props) {
  const { viewSize } = useContext(ScreenSizeContext)
  const container = useRef(null)

  useIsomorphicLayoutEffect(() => {
    let ctx: gsap.Context
    if (container.current) {
      ctx = gsap.context((context) => {
        let firstTime = false
        ScrollTrigger.batch('.eventCard', {
          onEnter: (batch) => {
            if (!firstTime) {
              firstTime = true
              return gsap.from(batch, {
                autoAlpha: 0,
                stagger: 0.1
              })
            }
          }
        })
      }, container.current)
    }
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container}>
      {title && (
        <p className='font-bold text-2xl leading-7 px-6 py-8'>{title}</p>
      )}
      <Swiper
        spaceBetween={0}
        slidesPerView={viewSize === 'sd' ? 2.1 : 4}
        centeredSlides
        className='eventCardContainer'
        loop
      >
        {new Array(EVENTS_LENGTH_X2).fill(0).map((_, index) => (
          <SwiperSlide key={index}>
            <EventCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
