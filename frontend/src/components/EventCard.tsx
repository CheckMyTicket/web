import Image from 'next/image'

interface Props {
  date?: string
  title?: string
  place?: string
}

export default function EventCard({
  date = '12 de diciembre 2024',
  title = 'Daddy Yankee',
  place = 'Por Alli'
}: Props) {
  return (
    <div className='relative w-[163px] h-[250px] md:min-w-[max(202px,20vw)] md:min-h-[max(268px,26.5vw)] rounded-lg scale-90 hover:scale-95 transition-transform duration-300 cursor-pointer eventCard'>
      <div className='bg-[url("/cardImage.jpg")] bg-center bg-cover w-full h-full absolute rounded-lg' />
      <div className='absolute w-full h-full bg-gradient-to-b to-[#1E1E1E] from-transparent from-50% rounded-lg' />
      <div className='absolute bottom-3 left-3'>
        <div className='text-[var(--text-description)] text-[12px]'>{date}</div>
        <div className='text-[18px]'>{title}</div>
        <div className='text-[var(--text-description)] text-[14px]'>
          {place}
        </div>
      </div>
      <div className='absolute w-8 h-8 flex items-center justify-center right-4 top-4 rounded-[50%] bg-[#4E4E4E99]'>
        <Image src='/favorite.png' width={16} height={16} alt='favorite' />
      </div>
    </div>
  )
}
