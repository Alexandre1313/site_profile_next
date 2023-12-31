/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import style from "../src/styles/menuMobileHeader.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function MenuMobile() {

    const router = useRouter(); // Inicialize o useRouter

    useEffect(() => {
        // Função para fechar o menu mobile ao mudar de rota
        const handleRouteChange = () => {
            setVisible(false);
        };

        // Adicione o event listener para monitorar as mudanças de rota
        router.events.on("routeChangeStart", handleRouteChange);

        // Remova o event listener quando o componente for desmontado
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router]);

    const [fill, setFill] = useState('#15803d');

    const handleMouseOver = () => {
        setFill('#22c55e');
    };

    const handleMouseOut = () => {
        setFill('#15803d');
    };

    const [fillc, setFillc] = useState('#fb923c');

    const handleMouseOverc = () => {
        setFillc('#fcd34d');
    };

    const handleMouseOutc = () => {
        setFillc('#fb923c');
    };

    const [isVisible, setVisible] = useState(false)

    const setOpen = () => {
        setVisible(true)
    }

    const setClose = () => {
        setVisible(false)
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "auto" : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                <div className={isVisible ? style.divnavMobile : style.hiddenn}>
                    <nav className={style.navMobile}>
                        <ul className={style.listMobile}>
                            <li className={style.listitemMobile}>
                                <Link legacyBehavior href={"./"}>
                                    <a className={style.listlinkMobile}>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className={style.listitemMobile}>
                                <Link legacyBehavior href={"/blog"}>
                                    <a className={style.listlinkMobile}>
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li className={style.listitemMobile}>
                                <Link legacyBehavior href={"/sobre"}>
                                    <a className={style.listlinkMobile}>
                                        Sobre
                                    </a>
                                </Link>
                            </li>
                            <li className={style.listitemMobile}>
                                <Link legacyBehavior href={"/contato"}>
                                    <a className={style.listlinkMobile}>
                                        Contato
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div>
            <button onClick={setOpen} className={isVisible ? style.hiddenn : ''}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="39px"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <g
                        fill={fill}
                    >
                        <g transform="scale(5.12,5.12)">
                            <path
                                d={`M56,48c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,
                                4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,
                                -2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,32c2.209,
                                0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,
                                0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,
                                0 38.798,0 40,0zM56,16c2.209,0 4,1.791 4,4c0,2.209 -1.791,
                                4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,
                                -2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0z`}>
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
            <button onClick={setClose} className={isVisible ? '' : style.hiddenn}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="39px"
                    onMouseOver={handleMouseOverc}
                    onMouseOut={handleMouseOutc}
                >
                    <g
                        fill={fillc}
                    >
                        <g transform="scale(5.12,5.12)">
                            <path
                                d={`M51.092,15.737l-2.829,-2.829l-16.263,16.264l-16.263,
                                -16.264l-2.829,2.829l16.264,16.263l-16.264,16.263l2.829,
                                2.829l16.263,-16.264l16.263,16.264l2.829,-2.829l-16.264,-16.263z`}>
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
        </>
    )
}
