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
                        urlImage={`/images/use_state_250.png`}
                        priorityImage={true}
                        urlpost={`/blog_explorando_o_hook_use_state_no_next_js`}
                        titleComponent={`Explorando o Hook UseState no Next.js`}
                        paragrafyComponent={`O Next.js é uma poderosa estrutura (framework) JavaScript 
                        para construir aplicativos da web modernos e escaláveis. Um dos principais desafios 
                        ao desenvolver aplicativos é o gerenciamento eficiente do estado da aplicação, 
                        especialmente quando se trata de componentes reativos e interativos. É aí que 
                        entra o hook useState do Next.js, uma ferramenta essencial para simplificar o 
                        gerenciamento de estado em seus componentes  `}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/mongo_db_250.jpg`}
                        priorityImage={true}
                        urlpost={`/blog_as_profundezas_do_armazenamento_de_dados_no_sql`}
                        titleComponent={`Armazenamento de dados No SQL`}
                        paragrafyComponent={`No cenário em constante evolução da tecnologia, onde a 
                        agilidade, escalabilidade e flexibilidade são cruciais para o desenvolvimento 
                        de aplicações modernas, o MongoDB surge como uma força impulsionadora, 
                        revolucionando a maneira como armazenamos e acessamos dados. Este sistema 
                        de gerenciamento de banco de dados NoSQL, conhecido por sua abordagem não 
                        relacional, conquistou o coração dos desenvolvedores ao redor do `}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/blog_desvendando_o_hook_use_effect_do_react_250.png`}
                        priorityImage={true}
                        urlpost={`/blog_desvendando_o_hook_use_effect_do_react`}
                        titleComponent={`Desvendando o Hook UseEffect do React`}
                        paragrafyComponent={`O React, uma das bibliotecas JavaScript mais populares 
                        para construção de interfaces de usuário, introduziu uma poderosa ferramenta 
                        para lidar com efeitos colaterais em componentes funcionais: o Hook useEffect. 
                        Esse hook desempenha um papel crucial ao permitir que desenvolvedores 
                        controlem o ciclo de vida e comportamento de seus componentes de maneira 
                        mais eficiente e organizada.`}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/blog_html_uma_josrnada_pelo_coracao_da_web_250.jpg`}
                        priorityImage={true}
                        urlpost={`/blog_html_uma_josrnada_pelo_coracao_da_web`}
                        titleComponent={`HTML - Uma jornada pelo coração da Web`}
                        paragrafyComponent={`O HyperText Markup Language, mais conhecido como HTML, é a 
                        pedra fundamental da World Wide Web, a teia global que conecta bilhões de pessoas 
                        e informações. Desde sua criação nos anos 90, o HTML tem desempenhado um papel 
                        fundamental na estruturação e apresentação de conteúdo na internet.`}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/blog_desvendando_o_universo_node_JS_250.png`}
                        priorityImage={true}
                        urlpost={`/blog_desvendando_o_universo_node_JS`}
                        titleComponent={`Desvendando o universo do Node.js`}
                        paragrafyComponent={`Node.js é um ambiente de tempo de execução JavaScript 
                        de código aberto e multiplataforma, que permite que os desenvolvedores criem 
                        aplicações de rede rápidas e escaláveis. Com uma comunidade ativa`}
                    />
                    <ImageTitleParagrafy
                        urlImage={`/images/blog_next_js_a_jornada_pelo_ssr250.png`}
                        priorityImage={true}
                        urlpost={`/blog_next_js_a_jornada_pelo_ssr`}
                        titleComponent={`Next.js - A jornada pelo SSR e Páginas Estáticas`}
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
