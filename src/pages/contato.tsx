import  Head  from "next/head";
import GridPageContact from "../../components/GridPageContact";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Contatos</title>
                <meta name="description" content="Página de contatos de Alexandre, entre em
                contato, será um prazer lhe atender"/>
            </Head>
            <GridPageContact/>
        </>       
    )
}
