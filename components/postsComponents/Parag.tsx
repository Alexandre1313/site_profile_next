import style from "../../src/styles/parag.module.css"

export interface ParagProps {
    text: string
}

const Parag = (props: ParagProps) => {
    return (
        <p className={style.textparagrafy}>{props.text}</p>
    )
}

export default Parag
