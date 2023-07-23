/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from '../src/styles/header.module.css';
import MenuMobileHeader from './MenuMobileHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';

const parent = {
    variantA: {scale: 1},
    variantB: {scale: 1.1}    
}

const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsHeaderVisible(
                currentScrollPos <= 500 || currentScrollPos < prevScrollPos
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div
            className={`${style.divheader} ${isHeaderVisible ? style.visible : ''}`}
        >
            <div className={style.logo}>
                <Link legacyBehavior href={"/"}>
                    <a>
                        <Image
                            src="/images/JSCode_4.png"
                            alt="Logo"
                            width={70}
                            height={70}
                            priority={true}
                        />
                    </a>
                </Link>
            </div>
            <div className={style.divnav}>
                <nav className={style.nav}>
                    <ul className={style.list}>
                        <motion.div
                            variants={parent}
                            initial={`variantA`}
                            whileHover={`variantB`}
                            transition={{duration: 0.01}}
                        >
                        <li className={style.listitem}>
                            <span className={style.adorno}>&lt;/ </span>
                            <Link legacyBehavior href={"./"}>
                                <a className={style.listlink}>
                                    Home
                                </a>
                            </Link>
                            <span className={style.adorno}> &gt;</span>
                        </li> 
                        </motion.div>
                        <motion.div
                            variants={parent}
                            initial={`variantA`}
                            whileHover={`variantB`}
                            transition={{duration: 0.01}}
                        >                       
                        <li className={style.listitem}>
                            <span className={style.adorno}>&lt;/ </span>
                            <Link legacyBehavior href={"/blog"}>
                                <a className={style.listlink}>
                                    Blog
                                </a>
                            </Link>
                            <span className={style.adorno}> &gt;</span>
                        </li>
                        </motion.div>
                        <motion.div
                            variants={parent}
                            initial={`variantA`}
                            whileHover={`variantB`}
                            transition={{duration: 0.01}}
                        >
                        <li className={style.listitem}>
                            <span className={style.adorno}>&lt;/ </span>
                            <Link legacyBehavior href={"/sobre"}>
                                <a className={style.listlink}>
                                    Sobre
                                </a>
                            </Link>
                            <span className={style.adorno}> &gt;</span>
                        </li>
                        </motion.div>
                        <motion.div
                            variants={parent}
                            initial={`variantA`}
                            whileHover={`variantB`}
                            transition={{duration: 0.01}}
                        >
                        <li className={style.listitem}>
                            <span className={style.adorno}>&lt;/ </span>
                            <Link legacyBehavior href={"/contato"}>
                                <a className={style.listlink}>
                                    Contato
                                </a>
                            </Link>
                            <span className={style.adorno}> &gt;</span>
                        </li>
                        </motion.div>
                    </ul>
                </nav>
            </div>
            <div className={style.divMenuMobile}>
                <MenuMobileHeader />
            </div>
            <div className={style.divbuton}>
                <button className={style.buton}>
                    <Link legacyBehavior href={"/blog"}>
                        <a>BLOG</a>
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Header;
