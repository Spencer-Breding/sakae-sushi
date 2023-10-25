"use client";
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import styles from '../styles/navbar.module.css'

export default function Navbar(props) {
    const [state, setState] = useState({
        openBurger: false,
        shouldRender: false,
        activeClass: '',
        firstClick: false,
    });

    const userIsScrolling = useRef(false);
    const userHasManuallyScrolled = useRef(false);


    useEffect(() => {
        const handleScrollEvent = () => {
            userIsScrolling.current = true;
            userHasManuallyScrolled.current = true;
            setTimeout(() => { userIsScrolling.current = false; }, 500);
        };
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    const animationClass = state.openBurger && state.firstClick ? 'openLine' : state.firstClick ? 'closeLine' : '';

    const sectionIds = useMemo(() => ["AboutUs", "Menu", "Contact"], []);

    const closeBurger = () => {
        setState(prevState => ({ ...prevState, openBurger: false }));
    };

    const toggleBurger = () => {
        setState(prevState => ({ ...prevState, openBurger: !prevState.openBurger, firstClick: true }));
    };


    const handleScroll = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        const navbar = document.getElementById('navbar');
        const burgerMenu = document.getElementById('burger');

        if (element) {
            let offsetHeightInPx = 0;

            if (navbar && window.getComputedStyle(navbar).display !== 'none') {
                offsetHeightInPx = parseFloat(window.getComputedStyle(navbar).height);
                offsetHeightInPx -= 12;
            } else if (burgerMenu && window.getComputedStyle(burgerMenu).display !== 'none') {
                offsetHeightInPx = parseFloat(window.getComputedStyle(burgerMenu).height);
                offsetHeightInPx += 0;
            }

            const rect = element.getBoundingClientRect();
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementPosition = rect.top - bodyRect;
            const offsetPosition = elementPosition - offsetHeightInPx;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, []);


    useEffect(() => {
        let isInitialRender = true;

        const sectionIds = ["AboutUs", "Menu", "Contact"];

        const resizeObserver = new ResizeObserver((entries) => {
            if (isInitialRender) {
                isInitialRender = false;
                return;
            }

            for (let entry of entries) {
                if (sectionIds.includes(entry.target.id)) {
                    console.log("Resize observed for:", entry.target.id);
                    scrollToSection(entry.target.id);
                }
            }
        });

        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                resizeObserver.observe(element);
            }
        });

        return () => {
            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    resizeObserver.unobserve(element);
                }
            });
        };
    }, []);

    useEffect(() => {
        let timer;

        if (state.openBurger) {
            setState(prevState => ({ ...prevState, shouldRender: true, activeClass: '' }));

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setState(prevState => ({ ...prevState, activeClass: styles.burger_dropdown_slide_in }));
                });
            });
        } else {
            setState(prevState => ({ ...prevState, activeClass: styles.burger_dropdown_slide_out }));

            timer = setTimeout(() => {
                if (!state.openBurger) {
                    setState(prevState => ({ ...prevState, shouldRender: false }));
                }
            }, 500);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [state.openBurger]);



    const handleItemClick = useCallback((section) => {
        userHasManuallyScrolled.current = false;
        handleScroll(section);
        closeBurger();
    }, [handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            <div id="navbar" className={styles.nav_container}>
                <p className={styles.sakae} onClick={() => scrollToTop()}>Sakae Sushi</p>
                <div className={styles.word_container}>
                    <div className={styles.navbar_item} onClick={() => handleItemClick("AboutUs")}>
                        <p>About Us</p>
                    </div>
                    <div className={styles.navbar_item} onClick={() => handleItemClick("Menu")}>
                        <p>Menu</p>
                    </div>
                    <div className={styles.navbar_item} onClick={() => handleItemClick("Contact")}>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div id="burger" className={styles.burger}>
                <div className={styles.burgerButton} onClick={toggleBurger}>
                    <span className={`${styles.burger_line1} ${styles[`${animationClass}1`]}`} />
                    <span className={`${styles.burger_line2} ${styles[`${animationClass}2`]}`} />
                    <span className={`${styles.burger_line3} ${styles[`${animationClass}3`]}`} />
                </div>
                {state.shouldRender &&
                    <div className={`${styles.burger_dropdown} ${state.activeClass}`}>
                        <div className={styles.burger_div}>
                            <Image className={styles.burger_logo} src="./images/AsmarStudioLogoMobileSmall.webp" loading="lazy"
                                alt="Asmar Studio Logo" width={3264} height={2496} onClick={() => { scrollToTop(), closeBurger() }} />
                            <div className={styles.navbar_item} onClick={() => handleItemClick("AboutUs")}>
                                <p>About Us</p>
                            </div>
                            <div className={styles.navbar_item} onClick={() => handleItemClick("Menu")}>
                                <p>Menu</p>
                            </div>
                            <div className={styles.navbar_item} onClick={() => handleItemClick("Contact")}>
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}