import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'

const NAVBAR_ITEMS = ['team', 'log in', 'CART ICON']

export default function NavBar() {
  const [showItems, setShowItems] = useState(false)
  return (
    <>
      <div className='fixed h-24 w-full text-white flex justify-between md:px-10 items-center z-20'>
        <div className='cursor-pointer'>LOGO</div>
        <div className='flex gap-5 items-center'>
          {NAVBAR_ITEMS.map((item, i) => (
            <div className='hidden md:block cursor-pointer' key={i}>
              {item}
            </div>
          ))}
          <GiHamburgerMenu
            size={25}
            className='md:hidden cursor-pointer'
            onClick={() => setShowItems(true)}
          />
          <ConnectButton />
        </div>
      </div>
      {showItems && (
        <div className='fixed min-h-screen min-w-full bg-red-500 z-30 flex justify-center items-center'>
          <div className='relative flex justify-center items-center flex-col gap-5 min-h-screen min-w-full'>
            <div className='absolute right-5 top-5'>
              <ImCross
                size={25}
                className='cursor-pointer'
                onClick={() => setShowItems(false)}
              />
            </div>
            {NAVBAR_ITEMS.map((item, i) => (
              <div className='cursor-pointer uppercase text-3xl' key={i}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
