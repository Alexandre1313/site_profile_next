import Link from "next/link"
import style from "../../src/styles/linkk.module.css"

export interface LinkkProps {
    urlLink: string
    description: string
}

const Linkk = (props: LinkkProps) => {
    return (
        <button className={style.descriptionLink}>
            <Link legacyBehavior href={props.urlLink}>
                <a target={`_blank`}>{props.description}</a>
            </Link>
        </button>
    )
}

export default Linkk
