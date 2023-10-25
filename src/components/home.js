"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';
import styles from '../styles/home.module.css'
import ImageGallery from './imageGallery'
import Contact from './contact';

export default function Home() {
    return (
        <div className={styles.main}>
            <Image className={styles.logo} src="./images/Landing.webp" alt="Sakae Sushi Logo" priority={true} width={1} height={1} />
            <h2 id="AboutUs" className={styles.headerText}>About Us</h2>
            <h2 id="Menu" className={styles.headerText}>Menu</h2>
            <Image className={styles.menu} src="./images/Menu.webp" alt="Sakae Sushi Menu" width={1} height={1} />
            <ImageGallery/>
            <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
            <Contact />
        </div>
    )
}
