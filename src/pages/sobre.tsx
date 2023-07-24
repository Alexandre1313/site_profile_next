import { motion } from "framer-motion";
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
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <GridPageAbout />
            </motion.div>
        </>
    )
}
