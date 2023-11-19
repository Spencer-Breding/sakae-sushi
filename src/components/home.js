"use client";
import React from 'react'
import Image from 'next/image';
import styles from '../styles/home.module.css'
import ImageGallery from './imageGallery'
import Contact from './contact';

export default function Home() {
    return (
        <div className={styles.main}>
            <div className={styles.landing_div}>
                <Image className={styles.open_box} src="./images/Opened_Box.webp" alt="Opened Box of Sushi" width={1} height={1} />
                <Image className={styles.logo} src="./images/Landing.webp" alt="Sakae Sushi Logo" priority={true} width={1} height={1} />
                <Image className={styles.wrapped_box} src="./images/Wrapped_Box.webp" alt="Wrapped Box of Sushi" width={1} height={1} />
            </div>
            <h2 id="AboutUs" className={styles.headerText}>About Us</h2>
            <p className={styles.about}>
                Welcome to Sakae Sushi, one of Gardena’s oldest and most beloved
                restaurants. We have been at the same location for over 60 years!
                <br />
                </p>
            <p className={styles.about}>
                Our small, locally, family-owned sushi restaurant embodies the spirit of traditional
                Japanese essence. For most Japanese Americans, the flavors make us reminiscent of
                the sushi that we grew up with, stirring up memories of family gatherings, celebrations
                and other get-togethers with friends and relatives.
                <br />
                </p>
            <p className={styles.about}>
                At Sakae Sushi, we believe in simplicity and excellence. Our menu, keeping true
                to the original flavors and high standards set decades earlier, features six delicious
                types of sushi: Nori-maki, Inari, Ebi, Saba, Tamago-maki, and California Roll.
                <br />
                </p>
            <p className={styles.about}>
                Sakae Sushi humbly opened it’s doors back in 1962 by Aya and Sumizo Tani.
                It was with Aya’s recipes learned as a young girl in a small fishing village in Uragami
                (Wakayama Prefecture) that launched our family business. It was eventually passed
                down to their son Tom and his wife Etsuko in 1981. With the unfortunate passing of
                Tom many years ago, Etsuko Tani has been the heart and soul of Sakae Sushi ever
                since and now the third generation of the Tani family is involved, especially Emi,
                Etsuko’s daughter.
                <br />
                </p>
            <p className={styles.about}>
                The traditions at Sakae Sushi remain very much the same since we were opened
                by Aya and Sumizo. The exact same recipes are used today without any deviation. Our
                rice is seasoned and still prepared on a stove the same way it was handed down
                through the generations. We do not have any automatic rice cookers. In a typical day,
                we can make up to 10 or 15 big stock pots full of rice, which are still cooled by an
                electric fan. Age (pronounced ah-ge) for the inari sushi is still carefully shaped by hand.
                Even the bones in the saba (mackerel) are meticulously removed one at a time with
                tweezers.
                <br />
                </p>
            <p className={styles.about}>
                We have stayed with the same vendors for all these years with the same
                ingredients. We didn’t change anything; we kept everything exactly the same. We even
                still have our instantly recognizable white paper wrapped box tied with a green string.
                Although more difficult, we still believe in doing things the old-fashioned way, and the
                proof is in the delicious results.
                <br />
                </p>
            <p className={styles.about}>
                We want to personally thank all of our customers and their family’s generations
                for supporting our success…now who’s hungry!
            </p>
            <h2 id="Menu" className={styles.headerText}>Menu</h2>
            <div className={styles.menu_container}>
                <Image className={styles.menu_left} src="./images/Menu_Left.webp" alt="Sushi Take Out Menu" width={1} height={1} />
                <Image className={styles.menu_right} src="./images/Menu_Right.webp" alt="Sushi by the Box Menu" width={1} height={1} />
            </div>
            <ImageGallery />
            <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
            <Contact />
            <p className={styles.copyright}>&copy; 2023 Sakae Sushi, Inc.</p>
        </div>
    )
}
