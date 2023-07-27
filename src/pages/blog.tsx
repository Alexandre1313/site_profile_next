import { motion } from "framer-motion";
import BlogCover from "../../components/BlogCover";
import GridThreeColumn from "../../components/GridThreeColumn";
import ImageTitleParagrafy from "../../components/ImageTitleParagrafy";
import Head from "next/head";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog - Code JS</title>
                <meta name='description' content='Este é o blog do site Code JS, fique por dentro
                dos principais assuntos de tecnologia do momento, acesse já!' />
            </Head>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            >
                <BlogCover />
                <GridThreeColumn>
                    <ImageTitleParagrafy
                        urlImage={`/images/blog_desvendando_o_universo_node_JS_250.png`}
                        priorityImage={true}
                        urlpost={`/blog_desvendando_o_universo_node_JS`}
                        titleComponent={`Desvendando o Universo do Node.js`}
                        paragrafyComponent={`Node.js é um ambiente de tempo de execução JavaScript 
                        de código aberto e multiplataforma, que permite que os desenvolvedores criem 
                        aplicações de rede rápidas e escaláveis. Com uma comunidade ativa`}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/blog_next_js_a_jornada_pelo_ssr250.png`}
                        priorityImage={true}
                        urlpost={`/blog_next_js_a_jornada_pelo_ssr`}
                        titleComponent={`Next.js: A jornada pelo SSR e Páginas Estáticas`}
                        paragrafyComponent={`Hoje vamos embarcar em uma emocionante jornada pelo 
                        mundo do desenvolvimento web com Next.js, uma poderosa estrutura de código 
                        aberto construída em cima do React.`}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/ja_pensou_como_surgiu_a_internet250.jpg`}
                        priorityImage={false}
                        urlpost={`/blog_ja_pensou_como_surgiu_a_internet`}
                        titleComponent={`Já pensou como surgiu a Internet?`}
                        paragrafyComponent={`A internet é uma das inovações mais impactantes da
                    história moderna. Desde seu surgimento, ela revolucionou a forma como nos 
                    comunicamos, compartilhamos informações e realizamos negócios.
                    Neste texto, vamos explorar`}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/java_script_vs_json250.jpg`}
                        priorityImage={false}
                        urlpost={`/blog_java_script_objeto_vs_json`}
                        titleComponent={`Java Script - Objeto vs JSON`}
                        paragrafyComponent={`Sabemos que o formato Json hoje é amplamente utilizado
                    para a interoperabilidade dos sitemas, por ser este um formato simples e
                    compatível com a maioria das tecnologias`}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/historia_da_linguagem_java_script250.png`}
                        priorityImage={false}
                        urlpost={`/blog_historia_da_linguagem_java_script`}
                        titleComponent={`História da linguagem Java Script`}
                        paragrafyComponent={`JavaScript é uma linguagem de programação popular,
                    conhecida por sua versatilidade e ampla aplicação na web. Sua história
                    remonta aos primórdios da internet e está intrinsecamente ligada ao 
                    desenvolvimento da web moderna.`}
                    />
                </GridThreeColumn>
            </motion.div>
        </>
    )
}
