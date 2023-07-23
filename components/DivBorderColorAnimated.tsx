import Image from "next/image"
import styles from "../src/styles/divBorderColorAnimated.module.css"
import { motion } from "framer-motion"
import Link from "next/link"


export interface DivBorderColorAnimatedProps {
    urlImage: string
    altImage: string
    imageHeight: number
    imageWidth: number
    imagePriority: boolean
    descriptionTitle: string
    linkk: string
    rottate: number[]
    dur: number
}

const DivBorderColorAnimated = (props: DivBorderColorAnimatedProps) => {
    return (
        <div className={styles.divMaster}>
            <div className={styles.divTitle}>
                <h2 className={styles.titleE}>{props.descriptionTitle}</h2>
            </div>
            <motion.div
                animate={{
                    rotate: props.rottate
                }}
                transition={{
                    duration: props.dur, // Duração da animação em segundos
                    repeat: Infinity, // Repetir a animação infinitamente
                    ease: 'linear', // Tipo de easing da animação (opcional, pode ser 'ease', 'ease-in', 'ease-out', etc.)
                }}
            >
                <div className={styles.divRadius}>
                    <div className={styles.divImage}>
                        <Link href={props.linkk}>
                            <Image className={styles.imageE}
                                src={props.urlImage}
                                alt={props.altImage}
                                height={props.imageHeight}
                                width={props.imageWidth}
                                priority={props.imagePriority}
                            />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}

export default DivBorderColorAnimated
