import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook
} from 'react-icons/ai'

export default function Footer() {
  return (
    <section className='md:mx-12 md:py-6'>
      <div className='flex gap-3 items-center justify-center py-3'>
        <AiOutlineFacebook
          size={30}
          className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'
        />
        <AiOutlineTwitter
          size={30}
          className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'
        />
        <AiOutlineInstagram
          size={30}
          className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'
        />
      </div>
      <div className='flex gap-3 text-sm justify-center pb-3'>
        <div className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'>
          About
        </div>
        <div className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'>
          Team
        </div>
        <div className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'>
          Blog
        </div>
        <div className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'>
          Support
        </div>
        <div className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'>
          Privacy
        </div>
        <div className='cursor-pointer text-[#888] hover:text-white transition-colors duration-300'>
          Terms
        </div>
      </div>
      <div className='flex justify-center pb-3'>
        <div className='cursor-pointer'>LOGO</div>
      </div>
    </section>
  )
}
