"use client";
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../styles/Lightbox.module.css';

export default function Lightbox({ item, items, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) {
    const [isVisible, setIsVisible] = useState(false);
    const [scale, setScale] = useState(1);
    const [initialDistance, setInitialDistance] = useState(null);
    const lightboxRef = useRef(null);

    useEffect(() => {
        const setVhProperty = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setVhProperty();
        window.addEventListener('resize', setVhProperty);

        return () => window.removeEventListener('resize', setVhProperty);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 25);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose()
        }, 300);
    }, [onClose]);

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClose]);

    useEffect(() => {
        const imageElement = lightboxRef.current;

        const handleTouchStart = (e) => {
            if (e.touches.length === 2) {
                const x1 = e.touches[0].pageX;
                const y1 = e.touches[0].pageY;
                const x2 = e.touches[1].pageX;
                const y2 = e.touches[1].pageY;
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                setInitialDistance(distance);
            }
        };

        const handleTouchMove = (e) => {
            if (e.touches.length === 2 && initialDistance) {
                const x1 = e.touches[0].pageX;
                const y1 = e.touches[0].pageY;
                const x2 = e.touches[1].pageX;
                const y2 = e.touches[1].pageY;
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const scaleChange = distance / initialDistance;
                setScale(scaleChange);
            }
        };

        const handleTouchEnd = () => {
            setInitialDistance(null);
        };

        if (imageElement) {
            imageElement.addEventListener('touchstart', handleTouchStart);
            imageElement.addEventListener('touchmove', handleTouchMove);
            imageElement.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (imageElement) {
                imageElement.removeEventListener('touchstart', handleTouchStart);
                imageElement.removeEventListener('touchmove', handleTouchMove);
                imageElement.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [initialDistance]);


    return (
        <div className={`${styles.lightbox} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            <button className={styles.closeButton} onClick={handleClose}>X</button>
            <Image ref={lightboxRef} src={item.source} alt={item.description} fill />
        </div>
    );
}