"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [windowWidth, setWindowWidth] = useState(0);

    const imageList = [
        { source: "./images/Nori_Maki.webp", description: "Nori Maki" },
        { source: "./images/Inari.webp", description: "Inari" },
        { source: "./images/Ebi.webp", description: "Ebi" },
        { source: "./images/Saba.webp", description: "Saba" },
        { source: "./images/Tamago_Maki.webp", description: "Tamago Maki" },
        { source: "./images/California_Roll.webp", description: "California Roll" },
    ]

    const closeLightbox = () => {
        setCurrentIndex(null);
    }

    useEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const isMobile = windowWidth <= 1088;

    return (
        <div className={styles.container} id="galleryContainer">
            {isMobile ? (
                imageList.map((item, index) => (
                        <div className={styles.rowContainer} key={index}>
                            <GalleryItem item={imageList[index]} setCurrentIndex={() => setCurrentIndex(index)} />
                        </div>
                ))
            ) : (
                imageList.map((item, index) => (
                    <GalleryItem item={item} setCurrentIndex={() => setCurrentIndex(index)} key={index} />
                ))
            )}
            {currentIndex !== null && (
                <Lightbox
                    item={imageList[currentIndex]}
                    onClose={closeLightbox}
                />
            )}
        </div>
    )
}
