import styles from "../src/styles/homeOpen.module.css"
import AnimatedTitleH1 from "./AnimatedTitleH1";
import { Suspense } from 'react';
import AnimatedTitleH2 from "./AnimatedTitleH2";
import DivBorderColorAnimated from "./DivBorderColorAnimated";

const HomeOpen = () => {
    return (
        <>
            
            <div className={styles.divMaster}>
                <div className={styles.divPrimary}>
                    <div className={styles.divTitlesAnimated}>
                            <Suspense fallback={<h1>Carregando...</h1>}>
                                <AnimatedTitleH1 />
                                <AnimatedTitleH2 />
                            </Suspense>
                        </div>
                    <div className={styles.divSecondary}>
                        <DivBorderColorAnimated
                            urlImage={`/images/icons8-python.svg`}
                            altImage={`Imagem da primeira Div`}
                            imageHeight={150}
                            imageWidth={150}
                            imagePriority={true}
                            descriptionTitle={`Python`}
                            rottate={[0, -5, 0, 5, 0]}
                            dur={11}
                            linkk={`https://www.python.org/`}
                        />
                        <DivBorderColorAnimated
                            urlImage={`/images/icons8-nativo-de-reagir.svg`}
                            altImage={`Imagem da segunda Div`}
                            imageHeight={150}
                            imageWidth={150}
                            imagePriority={true}
                            descriptionTitle={`React`}
                            rottate={[0, -7, 0, 7, 0]}
                            dur={13}
                            linkk={`https://react.dev/`}
                        />
                    </div>
                    <div className={styles.divThird}>
                        <DivBorderColorAnimated
                            urlImage={`/images/icons8-nodejs.svg`}
                            altImage={`Imagem da terceira Div`}
                            imageHeight={150}
                            imageWidth={150}
                            imagePriority={true}
                            descriptionTitle={`Node Js`}
                            rottate={[0, -9, 0, 9, 0]}
                            dur={15}
                            linkk={`https://nodejs.org/en`}
                        />
                        <DivBorderColorAnimated
                            urlImage={`/images/icons8-javascript.svg`}
                            altImage={`Imagem da quarta Div`}
                            imageHeight={150}
                            imageWidth={150}
                            imagePriority={true}
                            descriptionTitle={`Java Script`}
                            rottate={[0, -11, 0, 11, 0]}
                            dur={17}
                            linkk={`https://developer.mozilla.org/pt-BR/docs/Web/JavaScript`}
                        />
                    </div>
                </div>
            </div>            
        </>
    )
}

export default HomeOpen
