import style from "../../src/styles/title1.module.css"

export interface Title1Props {
    text: string
}

const Title1 = (props: Title1Props) => {
    return (
        <h1 className={style.textTitle1}>{props.text}</h1>
    )
}

export default Title1
