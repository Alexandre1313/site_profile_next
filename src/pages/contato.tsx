import Head from "next/head";
import GridPageContact from "../../components/GridPageContact";
import { motion } from "framer-motion";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Contatos</title>
                <meta name="description" content="Página de contatos de Alexandre, entre em
                contato, será um prazer lhe atender"/>
            </Head>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <GridPageContact />
            </motion.div>
        </>
    )
}
