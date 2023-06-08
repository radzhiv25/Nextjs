"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from "next/image"

export const Footer = () => {
  console.log("Hello")
  return (
    <div className={styles.container}>
      <div>@2023 Pixus. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt="facebook"/>
        <Image src="/2.png"  width={15} height={15} alt="pixus"/>
        <Image src="/3.png" width={15} height={15} alt="pixus"/>
        <Image src="/4.png" width={15} height={15} alt="pixus"/>
      </div>
    </div>
  )
}
