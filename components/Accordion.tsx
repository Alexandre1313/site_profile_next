import React, { useEffect, useState } from 'react';
import styles from "../src/styles/accordion.module.css"
import Image from 'next/image';
import { motion } from 'framer-motion';
import tagRandon, {tag} from '@/utils/tagRandon';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

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

    return (
        <div className={styles.accordion}>
            <div
                className={`${styles.section} ${activeIndex === 0 ? styles.active : ''}`}
                onClick={() => handleAccordionClick(0)}
            >
                <h2 className={`${activeIndex === 0 ? styles.sectionTitleOpen : styles.sectionTitle}`}>
                    <span className={styles.adorno}>
                        {!tag ? '' : tag.ct === '/' ? `<${tag.ot}` : `<${tag.ot}>`}
                    </span>
                        Diploma
                    <span className={styles.adorno}>
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
                        src={`/images/diploma_parte_1.png`}
                        alt={`diploma de Alexandre Cordeiro folha 1`}
                        width={1000}
                        height={703}
                        priority={true}
                    />
                    <Image className={''}
                        src={`/images/diploma_parte_2.png`}
                        alt={`diploma de Alexandre Cordeiro folha 2`}
                        width={1000}
                        height={703}
                        priority={true}
                    />
                </div>
                </motion.div>
            </div>
            <div
                className={`${styles.section} ${activeIndex === 1 ? styles.active : ''}`}
                onClick={() => handleAccordionClick(1)}
            >
                <h2 className={`${activeIndex === 1 ? styles.sectionTitleOpen : styles.sectionTitle}`}>
                    <span className={styles.adorno}>
                        {!tag1 ? '' : tag1.ct === '/' ? `<${tag1.ot}` : `<${tag1.ot}>`}
                    </span>
                        Certificado
                    <span className={styles.adorno}>
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
                        src={`/images/certificado_python_parte_1.png`}
                        alt={`certificado de Python de Alexandre Cordeiro folha 1`}
                        width={1000}
                        height={703}
                        priority={true}
                    />
                    <Image className={''}
                        src={`/images/certificado_python_parte_2.png`}
                        alt={`certificado de Python de Alexandre Cordeiro folha 2`}
                        width={1000}
                        height={703}
                        priority={true}
                    />
                </div>
                </motion.div>
            </div>
            <div
                className={`${styles.section} ${activeIndex === 2 ? styles.active : ''}`}
                onClick={() => handleAccordionClick(2)}
            >
                <h2 className={`${activeIndex === 2 ? styles.sectionTitleOpen : styles.sectionTitle}`}>
                    <span className={styles.adorno}>
                        {!tag2 ? '' : tag2.ct === '/' ? `<${tag2.ot}` : `<${tag2.ot}>`}
                    </span>
                        Certificado
                    <span className={styles.adorno}>
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
                        src={`/images/php_certification.png`}
                        alt={`certificado de PHP de Alexandre Cordeiro folha 1`}
                        width={1000}
                        height={703}
                        priority={true}
                    />
                </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Accordion;
