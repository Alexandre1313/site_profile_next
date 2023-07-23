import Image from "next/image"
import style from "../src/styles/gridPageContact.module.css"
import Accordion_two from "./Accordion_two"
import Accordion_Social from "./Accordion_Social"


const GridPageContact = () => {
    return (
        <div className={style.divflex}>
            <div className={style.gridMaster}>
                <div className={style.divTitleContact}>
                    <h1 className={style.titleContact }>
                        Contato
                    </h1>
                </div>
                <div className={style.primaryGrid}>
                    <Image className={style.imgContact}
                        src={`/images/comunicacao-global.png`}
                        alt={`Imagem de fundo da página de contato`}
                        width={512}
                        height={512}
                        priority={true}
                    />                    
                </div>                
                <div className={style.secondaryGrid}>                    
                    <Accordion_Social/>
                </div>
                <div className={style.thirdGrid}>
                    <Accordion_two />                    
                </div>
            </div>
        </div>
    )
}

export default GridPageContact
