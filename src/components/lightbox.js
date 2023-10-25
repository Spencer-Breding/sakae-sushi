"use client";
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../styles/Lightbox.module.css';

export default function Lightbox({ item, items, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) {
    const [isVisible, setIsVisible] = useState(false);
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

    return (
        <div className={`${styles.lightbox} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            <button className={styles.closeButton} onClick={handleClose}>X</button>
            <Image ref={lightboxRef} src={item.source} alt={item.description} fill />
        </div>
    );
}