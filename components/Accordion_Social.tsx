import React, { useEffect, useState } from 'react';
import styles from "../src/styles/accordion_social.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import tagRandon, { tag } from "../src/utils/tagRandon"

const tag = tagRandon()

const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.25 }
}

const Accordion_Social = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

    const [tag, setTag] = useState<tag | null>(null);

    useEffect(() => {
        // Verifica se o código está rodando no lado do cliente
        if (typeof window !== 'undefined') {
            setTag(tagRandon());
        }
    }, []);

    const [tag1, setTag1] = useState<tag | null>(null);

    useEffect(() => {
        // Verifica se o código está rodando no lado do cliente
        if (typeof window !== 'undefined') {
            setTag1(tagRandon());
        }
    }, []);

    const [tag2, setTag2] = useState<tag | null>(null);

    useEffect(() => {
        // Verifica se o código está rodando no lado do cliente
        if (typeof window !== 'undefined') {
            setTag2(tagRandon());
        }
    }, []);

    const [tag3, setTag3] = useState<tag | null>(null);

    useEffect(() => {
        // Verifica se o código está rodando no lado do cliente
        if (typeof window !== 'undefined') {
            setTag3(tagRandon());
        }
    }, []);

    return (
        <div className={styles.accordion}>
            <div
                className={`${styles.section} ${activeIndex === 0 ? styles.active : ''}`}
                onClick={() => handleAccordionClick(0)}
            >
                <h2 className={`${activeIndex === 0 ? styles.sectionTitleOpen : styles.sectionTitle}`}>
                    <span className={`${styles.adorno} ${activeIndex === 0 ? '' : styles.inactive1}`}>
                        {!tag ? '' : tag.ct === '/' ? `<${tag.ot}` : `<${tag.ot}>`}
                    </span>
                    <motion.div
                        variants={parent}
                        initial={`variantA`}
                        whileHover={`variantB`}
                    >
                        <Image className={`${styles.icon} ${activeIndex === 0 ? '' : styles.active1}`}
                            src={`/images/facebook.png`}
                            alt={`Ícone do facebook`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 0 ? '' : styles.inactive1}`}>
                        Facebook
                    </span>
                    <span className={`${styles.adorno} ${activeIndex === 0 ? '' : styles.inactive1}`}>
                        {!tag ? '' : tag.ct === '/' ? `${tag.ct}>` : `<${tag.ct}>`}
                    </span>
                </h2>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: activeIndex === 0 ? 1 : 0, height: activeIndex === 0 ? "auto" : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className={styles.sectionContent}>
                        <Image className={''}
                            src={`/images/facebook.png`}
                            alt={`Ícone do facebook`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                       <Link  legacyBehavior href={'https://www.facebook.com/alexandre.cordeiro.714'}>
                            <a className={styles.info} target={`_blank`}>
                                Acesse -&gt;
                            </a>
                        </Link>                       
                    </div>
                </motion.div>
            </div>
            <div
                className={`${styles.section} ${activeIndex === 1 ? styles.active : ''}`}
                onClick={() => handleAccordionClick(1)}
            >
                <h2 className={`${activeIndex === 1 ? styles.sectionTitleOpen : styles.sectionTitle}`}>
                    <span className={`${styles.adorno} ${activeIndex === 1 ? '' : styles.inactive1}`}>
                        {!tag1 ? '' : tag1.ct === '/' ? `<${tag1.ot}` : `<${tag1.ot}>`}
                    </span>
                    <motion.div
                        variants={parent}
                        initial={`variantA`}
                        whileHover={`variantB`}
                    >
                        <Image className={`${styles.icon} ${activeIndex === 1 ? '' : styles.active1}`}
                            src={`/images/instagram.png`}
                            alt={`Ícone do instagram`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 1 ? '' : styles.inactive1}`}>
                        Instagram
                    </span>
                    <span className={`${styles.adorno} ${activeIndex === 1 ? '' : styles.inactive1}`}>
                        {!tag1 ? '' : tag1.ct === '/' ? `${tag1.ct}>` : `<${tag1.ct}>`}
                    </span>
                </h2>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: activeIndex === 1 ? 1 : 0, height: activeIndex === 1 ? "auto" : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className={styles.sectionContent}>
                        <Image className={''}
                            src={`/images/instagram.png`}
                            alt={`Ícone do instagram`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                        <Link  legacyBehavior href={'https://www.instagram.com/alexandre.13a'}>
                            <a className={styles.info} target={`_blank`}>
                                Acesse -&gt;
                            </a>                                
                        </Link>                        
                    </div>
                </motion.div>
            </div>
            <div
                className={`${styles.section} ${activeIndex === 2 ? styles.active : ''}`}
                onClick={() => handleAccordionClick(2)}
            >
                <h2 className={`${activeIndex === 2 ? styles.sectionTitleOpen : styles.sectionTitle}`}>
                    <span className={`${styles.adorno} ${activeIndex === 2 ? '' : styles.inactive1}`}>
                        {!tag2 ? '' : tag2.ct === '/' ? `<${tag2.ot}` : `<${tag2.ot}>`}
                    </span>
                    <motion.div
                        variants={parent}
                        initial={`variantA`}
                        whileHover={`variantB`}
                    >
                        <Image className={`${styles.icon} ${activeIndex === 2 ? '' : styles.active1}`}
                            src={`/images/linkedin.png`}
                            alt={`Ícone do linkedin`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 2 ? '' : styles.inactive1}`}>
                        Linkedin
                    </span>
                    <span className={`${styles.adorno} ${activeIndex === 2 ? '' : styles.inactive1}`}>
                        {!tag2 ? '' : tag2.ct === '/' ? `${tag2.ct}>` : `<${tag2.ct}>`}
                    </span>
                </h2>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: activeIndex === 2 ? 1 : 0, height: activeIndex === 2 ? "auto" : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className={styles.sectionContent}>
                        <Image className={''}
                            src={`/images/linkedin.png`}
                            alt={`Ícone do linkedin`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                        <Link legacyBehavior href={'https://www.linkedin.com/in/alexandre-cordeiro-00aa411a3'}>
                            <a className={styles.info} target={`_blank`}>
                                Acesse -&gt;
                            </a>
                        </Link>                       
                    </div>
                </motion.div>
            </div>
            <div
                className={`${styles.section} ${activeIndex === 3 ? styles.active : ''}`}
                onClick={() => handleAccordionClick(3)}
            >
                <h2 className={`${activeIndex === 3 ? styles.sectionTitleOpen : styles.sectionTitle}`}>
                    <span className={`${styles.adorno} ${activeIndex === 3 ? '' : styles.inactive1}`}>
                        {!tag3 ? '' : tag3.ct === '/' ? `<${tag3.ot}` : `<${tag3.ot}>`}
                    </span>
                    <motion.div
                        variants={parent}
                        initial={`variantA`}
                        whileHover={`variantB`}
                    >
                        <Image className={`${styles.icon} ${activeIndex === 3 ? '' : styles.active1}`}
                            src={`/images/tiktok.png`}
                            alt={`Ícone do tiktok`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 3 ? '' : styles.inactive1}`}>
                        Tik Tok
                    </span>
                    <span className={`${styles.adorno} ${activeIndex === 3 ? '' : styles.inactive1}`}>
                        {!tag3 ? '' : tag3.ct === '/' ? `${tag3.ct}>` : `<${tag3.ct}>`}
                    </span>
                </h2>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: activeIndex === 3 ? 1 : 0, height: activeIndex === 3 ? "auto" : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className={styles.sectionContent}>
                        <Image className={''}
                            src={`/images/tiktok.png`}
                            alt={`Ícone do tiktok`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                        <Link  legacyBehavior href={''}>
                            <a className={styles.info} target={`_blank`}>
                                Inativo
                            </a>
                        </Link>                        
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Accordion_Social
