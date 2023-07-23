/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import style from "../src/styles/footer.module.css"
import SvgIconFacebook from './svgcomponents/SvgIconFacebook'
import SvgIconWhatsApp from './svgcomponents/SvgIconWhatsApp'
import SvgIconLinkedin from './svgcomponents/SvgIconLinkedin'
import SvgIconInstagram from './svgcomponents/SvgIconInstagram'
import MenuMobileFooter from './MenuMobileFooter'
import Link from 'next/link'
import { motion } from 'framer-motion'

const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.1 }
}

export default function Footer() {
    return (
        <div className={style.divfooter}>
            <div className={style.div1}>
                <div className={style.logo}>
                    <Link legacyBehavior href={"./"}>
                        <a><Image src={'/images/JSCode_4.png'} alt={'Logo'} width={70} height={70}
                            priority={true} /></a>
                    </Link>
                </div>
                <div className={style.divnav}>
                    <nav className={style.nav}>
                        <ul className={style.list}>
                            <motion.div
                                variants={parent}
                                initial={`variantA`}
                                whileHover={`variantB`}
                                transition={{ duration: 0.01 }}
                            >
                                <li className={style.listitem}>
                                    <span className={style.adorno}>&lt;/ </span>
                                    <Link legacyBehavior href={"./"}>
                                        <a className={style.listlink}>Home</a>
                                    </Link>
                                    <span className={style.adorno}> &gt;</span>
                                </li>
                            </motion.div>
                            <motion.div
                                variants={parent}
                                initial={`variantA`}
                                whileHover={`variantB`}
                                transition={{ duration: 0.01 }}
                            >
                                <li className={style.listitem}>
                                    <span className={style.adorno}>&lt;/ </span>
                                    <Link legacyBehavior href={"/blog"}>
                                        <a className={style.listlink}>Blog</a>
                                    </Link>
                                    <span className={style.adorno}> &gt;</span>
                                </li>
                            </motion.div>
                            <motion.div
                                variants={parent}
                                initial={`variantA`}
                                whileHover={`variantB`}
                                transition={{ duration: 0.01 }}
                            >
                                <li className={style.listitem}>
                                    <span className={style.adorno}>&lt;/ </span>
                                    <Link legacyBehavior href={"/sobre"}>
                                        <a className={style.listlink}>Sobre</a>
                                    </Link>
                                    <span className={style.adorno}> &gt;</span>
                                </li>
                            </motion.div>
                            <motion.div
                                variants={parent}
                                initial={`variantA`}
                                whileHover={`variantB`}
                                transition={{ duration: 0.01 }}
                            >
                                <li className={style.listitem}>
                                    <span className={style.adorno}>&lt;/ </span>
                                    <Link legacyBehavior href={"/contato"}>
                                        <a className={style.listlink}>Contato</a>
                                    </Link>
                                    <span className={style.adorno}> &gt;</span>
                                </li>
                            </motion.div>
                        </ul>
                    </nav>
                </div>
                <div className={style.divMenuMobile}>
                    <MenuMobileFooter />
                </div>
                <div className={style.divbuton}>
                    <button className={style.buton}>
                        <Link legacyBehavior href={"/blog"}>
                            <a>BLOG</a>
                        </Link>
                    </button>
                </div>
            </div>
            <div className={style.div3}>
                <hr className={style.line} />
            </div>
            <div className={style.div2}>
                <div className={style.divsig}>
                    <p className={style.sig}>Siga-me nas minhas redes sociais:</p>
                </div>
                <div className={style.divicons}>
                    <SvgIconFacebook />
                    <SvgIconInstagram />
                    <SvgIconLinkedin />
                    <SvgIconWhatsApp />
                </div>
                <div className={style.divallrights}>
                    <p className={style.allrights}>&copy; 2023 - Alexandre Cordeiro - All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
