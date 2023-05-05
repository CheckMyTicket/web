import { ScreenSizeContext } from '@/context/screenSize/screenSizeProvider'
import { useContext } from 'react'
import SquaredCard from './SquaredCard'

export default function PreviousEvents() {
  const { viewSize } = useContext(ScreenSizeContext)
  return (
    <div>
      <h2 className='m-6 font-bold text-2xl'>Images</h2>
      <div className='md:grid-cols-5 grid overflow-x-hidden gap-4 md:gap-0'>
        {new Array(viewSize === 'sd' ? 4 : 20).fill(0).map((_, index) => (
          <SquaredCard key={index} />
        ))}
      </div>
    </div>
  )
}
