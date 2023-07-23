import Image from "next/image"
import style from "../../src/styles/imag.module.css"

export interface ImagProps {
    urlImage: string
}

const Imag = (props: ImagProps) => {
    return (
        <Image
            className={style.ImageSrc}
            src={props.urlImage}
            alt="Image"
            width={450}
            height={450}             
            priority={true}
        />
    )
}

export default Imag
