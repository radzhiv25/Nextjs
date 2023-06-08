// import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className="">
      <Image src={Hero} alt="hero"/>
    </div>
  )
}
