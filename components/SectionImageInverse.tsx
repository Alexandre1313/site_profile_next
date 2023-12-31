import Image from "next/image"
import styles from "../src/styles/sectionImageInverse.module.css"
import Link from "next/link"

export interface SectionImageInverseProps {
    urlImage: string
    altImage: string
    heightImage: number
    widthImage: number
    priorityImage?: boolean
    titleBox: string
    paragrafyOneBox: string
    paragrafyTwoBox?: string
    paragrafyThreeBox?: string
    paragrafyFourBox?: string
    paragrafyFiveBox?: string
    buttonActive?: string
    linkButton?: string
    styleType: boolean
}

const SectionImageInverse = (props: SectionImageInverseProps) => {    

    return (
        <section className={`${styles.sectionBoxDefault} ${props.styleType 
        ? styles.styleSectionDark : styles.styleSectionLight}`}>
            <div className={`${styles.divOneBoxDefault} ${props.styleType 
                ? styles.styleDivOneDark : styles.styleDivOneLight}`}>
                
                <div className={`${styles.divTwoBoxDefault} ${props.styleType                     
                    ? styles.styleDivTwoDark : styles.styleDivTwoLight}`}>
                        <Image className={styles.ImageBox}
                            src={props.urlImage}
                            alt={props.altImage}
                            width={props.widthImage}
                            height={props.heightImage}
                            priority={props.priorityImage}
                        />
                </div>
                
                <div className={`${styles.divThreeBoxDefault} ${props.styleType 
                    ? styles.styleDivThreeDark : styles.styleDivThreeLight}`}>
                        <h2 className={`${styles.titleBox} ${props.styleType ?
                             styles.titleBoxDark : styles.titleBoxLight}`}>{props.titleBox}</h2>
                        <p className={`${styles.paragrafyBox} ${props.styleType ?
                             styles.paragrafyBoxDark : styles.paragrafyBoxLight}`}>{props.paragrafyOneBox}</p>
                        <p className={`${styles.paragrafyBox} ${props.styleType ? styles.paragrafyBoxDark : 
                        styles.paragrafyBoxLight} ${props.paragrafyTwoBox ?
                         '' : styles.ocul}`}>{props.paragrafyTwoBox}</p>                         
                        <p className={`${styles.paragrafyBox} ${props.styleType ? styles.paragrafyBoxDark : 
                        styles.paragrafyBoxLight} ${props.paragrafyThreeBox ?
                         '' : styles.ocul}`}>{props.paragrafyThreeBox}</p>
                        <p className={`${styles.paragrafyBox} ${props.styleType ? styles.paragrafyBoxDark : 
                        styles.paragrafyBoxLight} ${props.paragrafyFourBox ?
                         '' : styles.ocul}`}>{props.paragrafyFourBox}</p>
                        <p className={`${styles.paragrafyBox} ${props.styleType ? styles.paragrafyBoxDark : 
                        styles.paragrafyBoxLight} ${props.paragrafyFiveBox ?
                         '' : styles.ocul}`}>{props.paragrafyFiveBox}</p>
                        <button className={`${styles.paragrafyBox} ${props.styleType ? styles.paragrafyBoxDark : 
                        styles.paragrafyBoxLight} ${props.buttonActive ?
                         '' : styles.ocul}`}><Link href={props.linkButton ? props.linkButton: ''}>
                            {props.buttonActive}</Link>
                        </button>
                </div>
            </div>
        </section>
    )
}

export default SectionImageInverse
