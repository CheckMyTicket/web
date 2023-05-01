import { HTMLAttributes } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

interface Props extends HTMLAttributes<HTMLElement> {}

export default function Layout({ ...props }: Props) {
  return (
    <>
      <NavBar />
      <main {...props} />
      <Footer />
    </>
  )
}
