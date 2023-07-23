import React, { useEffect, useState } from 'react';
import styles from "../src/styles/accordion_two.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import tagRandon, { tag } from '@/utils/tagRandon';

const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.25 }
}

const Accordion_two = () => {
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
                            src={`/images/celular.png`}
                            alt={`Ícone de celular`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 0 ? '' : styles.inactive1}`}>
                        Celular
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
                            src={`/images/celular.png`}
                            alt={`Ícone de celular`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                        <Link legacyBehavior href={'tel:+5547997285083'}>
                            <a className={styles.info}>
                                &#40;47&#41; 99728-5083
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
                            src={`/images/whats.png`}
                            alt={`Ícone de whatsapp`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 1 ? '' : styles.inactive1}`}>
                        WhatsApp
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
                            src={`/images/whats.png`}
                            alt={`Ícone de whatsapp`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                        <Link legacyBehavior href={'https://api.whatsapp.com/send?phone=5547997455134'}>
                            <a className={styles.info}>
                                &#40;47&#41; 99745-5134
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
                            src={`/images/email.png`}
                            alt={`Ícone de e-mail`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 2 ? '' : styles.inactive1}`}>
                        E-mail
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
                            src={`/images/email.png`}
                            alt={`Ícone de e-mail`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                        <Link legacyBehavior href={'mailto:alexandre.13a@gmail.com'}>
                            <a className={styles.info}>
                                alexandre.13a@gmail.com
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
                            src={`/images/endereco.png`}
                            alt={`Ícone de endereço`}
                            width={30}
                            height={30}
                            priority={true}
                        />
                    </motion.div>
                    <span className={`${styles.sspan} ${activeIndex === 3 ? '' : styles.inactive1}`}>
                        Endereço
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
                            src={`/images/endereco.png`}
                            alt={`Ícone de endereço`}
                            width={100}
                            height={100}
                            priority={true}
                        />
                        <Link legacyBehavior href={'https://goo.gl/maps/gsER5nHv1PjeDtsx8'}>
                            <a className={styles.info}>
                                Rua Macaé, 43 - Fortaleza - Blumenau - SC - Cep: 89056-015
                            </a>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Accordion_two;
