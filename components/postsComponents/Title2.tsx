import style from "../../src/styles/title2.module.css"

export interface Title2Props {
    text: string
}

const Title2 = (props: Title2Props) => {
    return (
        <h2 className={style.textTitle2}>{props.text}</h2>
    )
}

export default Title2
