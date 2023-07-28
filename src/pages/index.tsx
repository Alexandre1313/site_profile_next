import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import HomeGridWithBackgroundImage from '../../components/HomeGridWithBackgroundImage'
import HomeOpen from '../../components/HomeOpen'
import SectionImage from '../../components/SectionImage'
import SectionImageInverse from '../../components/SectionImageInverse'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Code JS - Falando sobre Tec</title>
                <meta name='description' content='Um site que fala de Tecnologia, 
                porém trata-se de um currículum online, um site que é testemunha de minhas habilidades.'/>
            </Head>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            >                
                <HomeOpen />
                <SectionImageInverse
                    urlImage={`/images/next_js.png`}
                    altImage={`Imagem Next JS`}
                    heightImage={500}
                    widthImage={500}
                    titleBox={`A Ascensão do Next.js - Uma Revolução no Desenvolvimento Web`}
                    paragrafyOneBox={`O Next.js surgiu como uma revolução no desenvolvimento web, 
                proporcionando aos desenvolvedores uma maneira mais eficiente e poderosa de criar 
                aplicativos React. Lançado em 2016 pela equipe da Vercel (anteriormente 
                conhecida como Zeit), essa estrutura JavaScript 
                trouxe consigo recursos inovadores que combinavam renderização do lado do servidor 
                (SSR) com a capacidade de gerar páginas estáticas. Isso permitiu que os aplicativos 
                fossem pré-renderizados e entregues ao usuário mais rapidamente, resultando em melhor 
                desempenho e experiências de usuário mais agradáveis.`}
                    paragrafyTwoBox={`Com o passar do tempo, o Next.js ganhou popularidade rapidamente, 
                sendo amplamente adotado por desenvolvedores e empresas de tecnologia em todo o mundo. 
                Seu ecossistema crescente de bibliotecas e plugins permitiu que os desenvolvedores 
                expandissem ainda mais suas capacidades. O Next.js também suportou facilmente a 
                criação de aplicativos escaláveis e complexos, com recursos avançados, como 
                roteamento dinâmico e carregamento incremental de dados.`}
                    paragrafyThreeBox={`Hoje, o Next.js é amplamente considerado como uma das 
                principais escolhas para o desenvolvimento de aplicativos React. Sua combinação 
                de renderização do lado do servidor e geração de páginas estáticas tornou-o uma 
                ferramenta poderosa para a criação de aplicativos de alto desempenho, otimizados 
                para SEO e com tempos de carregamento rápidos. Com uma comunidade ativa e em 
                constante crescimento, o Next.js continua a evoluir e a revolucionar o 
                desenvolvimento web, tornando-se uma peça fundamental no futuro da criação de 
                aplicativos modernos na internet.`}
                    styleType={true}
                />
                <HomeGridWithBackgroundImage />
                <SectionImage
                    urlImage={`/images/Eniac_500.jpg`}
                    altImage={`Imagem Eniac`}
                    heightImage={500}
                    widthImage={500}
                    titleBox={`O ENIAC, pioneiro da computação eletrônica!`}
                    paragrafyOneBox={`O ENIAC, ou Electronic Numerical Integrator and Computer, 
                foi um dos primeiros computadores eletrônicos de grande escala e marcou um 
                marco significativo na história da computação. Construído durante a Segunda 
                Guerra Mundial pelos engenheiros John W. Mauchly e J. Presper Eckert, ele era 
                colossal, pesando cerca de 30 toneladas e preenchendo várias salas com suas válvulas eletrônicas.`}
                    paragrafyTwoBox={`Ao contrário dos sistemas modernos, o ENIAC era programado 
                manualmente através de cabos e interruptores para realizar cálculos complexos, 
                contribuindo para cálculos balísticos militares. Seu processo de programação era 
                trabalhoso, mas sua capacidade de processamento era revolucionária para a época.`}
                    paragrafyThreeBox={`Embora seus dias de funcionamento tenham terminado em 1955, 
                o ENIAC abriu caminho para a era da computação eletrônica e deu início a uma revolução 
                tecnológica que ainda hoje impacta o mundo em que vivemos. Seu legado perdura como um 
                marco pioneiro que desencadeou uma corrida de avanços na computação, impulsionando a 
                evolução dos computadores modernos e redefinindo completamente o panorama da tecnologia.`}
                    styleType={true}
                />                
            </motion.div>
        </>
    )
}
