export default function SquaredCard() {
  return (
    <div className='m-auto w-[min(100vw,360px)] h-[min(100vw,360px)] md:w-[20vw] md:h-[20vw] relative'>
      <div className='w-full h-full bg-[url("/social.jpg")] absolute bg-center bg-cover' />
      <div className='w-full h-full absolute bg-[#000] opacity-60 hover:opacity-0 z-10 transition-opacity duration-300' />
      <div className='absolute w-full h-full'>
        <p className='bottom-0 absolute p-4'>Example Text</p>
      </div>
    </div>
  )
}
