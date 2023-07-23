import Image from "next/image"
import style from "../src/styles/ImageTitleParagrafy.module.css"
import Link from "next/link"

interface ImageTitleParagrafyProps {
    urlImage: string
    priorityImage: boolean
    titleComponent: string
    paragrafyComponent: string
    urlpost: string
}

export default function ImageTitleParagrafy(props: ImageTitleParagrafyProps) {

    const validateString = (p: string) => {
        return p.substring(0, 214)
    }

    return (
        <div className={style.divOutside}>
            <div className={style.divInside}>
                <Image className={style.imageCard} src={props.urlImage}
                    alt={"Featured image"}
                    width={250}
                    height={250}
                    priority={props.priorityImage} />
                <div className={style.wrappedDiv}>
                    <h2 className={style.titleComponent}>
                        {props.titleComponent}
                    </h2>
                    <p className={style.paragrafyComponent}>
                        {validateString(props.paragrafyComponent)}
                    </p>
                </div>
                <button className={style.buton}>
                    <Link legacyBehavior href={props.urlpost}>
                        <a>Leia mais</a>
                    </Link>
                </button>
            </div>
        </div>
    )
}
