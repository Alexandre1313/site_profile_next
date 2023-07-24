import GridPageAbout from "../../components/GridPageAbout";
import Head from "next/head";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Sobre Alexandre</title>
                <meta name="description" content="Conheça um pouco mais sobre
                Alexandre, um jovem programador apixonado por tecnologia, especialmente por Next JS"/>
            </Head>
            <GridPageAbout/>
        </>       
    )
}
