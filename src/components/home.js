"use client";
import React from 'react'
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
            <div className={styles.menu_container}>
                <Image className={styles.menu_left} src="./images/Menu_Left.webp" alt="Sushi Take Out Menu" width={1} height={1} />
                <Image className={styles.menu_right} src="./images/Menu_Right.webp" alt="Sushi by the Box Menu" width={1} height={1} />
            </div>
            <ImageGallery />
            <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
            <Contact />
        </div>
    )
}
