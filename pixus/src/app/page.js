// import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          The place for designing better products
        </h1>
        <p className={styles.desc}>
          I design and develop the designs to bring it live to life.
        </p>
        <button className={styles.button}>My projects</button>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="hero" className={styles.image}/>
      </div>
    </div>
  )
}
