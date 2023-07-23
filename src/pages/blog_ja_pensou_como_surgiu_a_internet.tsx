import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/ja_pensou_como_surgiu_a_internet450.jpg`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={'Já pensou como surgiu a Internet?'} />,

    <Parag key={2} text={`A internet é uma das inovações mais impactantes da história 
    moderna. Desde seu surgimento, ela revolucionou a forma como nos comunicamos, 
    compartilhamos informações e realizamos negócios. Neste texto, vamos explorar 
    brevemente o surgimento e o desenvolvimento da internet, desde 
    seus primórdios até os dias atuais.`} />,

    <Parag key={3} text={`A história da internet remonta aos anos 1960, quando os Estados 
    Unidos começaram a desenvolver uma rede de comunicação robusta e descentralizada. 
    O projeto ARPANET, criado pela Advanced Research Projects Agency (ARPA) do 
    Departamento de Defesa dos EUA, foi a precursora da internet. Inicialmente, 
    seu objetivo era interligar computadores de universidades e instituições de 
    pesquisa para compartilhar recursos e trocar informações.`} />,

    <Parag key={4} text={`Com o passar do tempo, a ARPANET evoluiu e se expandiu, 
    tornando-se uma rede mundial de computadores interconectados. Surgiram protocolos 
    de comunicação, como o TCP/IP, que estabeleceram os fundamentos para a transmissão 
    de dados em escala global. O desenvolvimento de tecnologias como os navegadores web 
    e os servidores web também impulsionou a popularização da internet.`} />,

    <Parag key={5} text={`Na década de 1990, a World Wide Web (WWW) foi criada por Tim 
    Berners-Lee, um cientista britânico, como uma forma de organizar e compartilhar 
    informações na internet. A WWW introduziu conceitos como hiperlinks e páginas da web, 
    permitindo que os usuários navegem e acessem conteúdo de forma intuitiva. Esse foi um 
    marco crucial para tornar a internet mais acessível e amigável para o público em geral.`} />,

    <Parag key={6} text={`Conforme a internet se tornava cada vez mais presente em nossas vidas, 
    novas aplicações e serviços foram surgindo. O comércio eletrônico ganhou força, 
    possibilitando a compra e venda de produtos online. As redes sociais, como Facebook e 
    Twitter, revolucionaram a forma como nos conectamos e compartilhamos nossas vidas com 
    outras pessoas ao redor do mundo. Surgiram também serviços de streaming, como Netflix e 
    Spotify, que transformaram a maneira como consumimos mídia.`} />,

    <Parag key={7} text={`Atualmente, a internet é uma presença onipresente em nossa sociedade. 
    Ela está presente em nossos smartphones, computadores, smart TVs e uma infinidade de 
    dispositivos conectados. A Internet das Coisas (IoT) permite que objetos do dia a dia, 
    como eletrodomésticos e veículos, estejam conectados à internet e interajam entre si.`} />,

    <Parag key={8} text={`A internet, desde seus primeiros passos até os dias atuais, teve um 
    impacto profundo em nossas vidas e continua a evoluir constantemente. Ela proporcionou acesso 
    à informação de forma rápida e global, permitiu a conexão entre pessoas em diferentes partes do 
    mundo e impulsionou inovações tecnológicas em diversas áreas.`} />,

    <Parag key={9} text={`No entanto, a internet também trouxe desafios, como questões de 
    privacidade, segurança e desigualdade digital. É importante que continuemos a buscar um 
    equilíbrio entre os benefícios e os desafios trazidos pela internet, trabalhando para 
    torná-la um ambiente seguro, inclusivo e acessível para todos.`} />,

    <Parag key={10} text={`À medida que a internet avança, podemos esperar ainda mais avanços 
    tecnológicos, como a expansão da tecnologia 5G, a inteligência artificial, a realidade 
    virtual e muitas outras inovações que moldarão o futuro da nossa sociedade conectada.`} />,    
]



export default function Blog_ja_pensou_como_surgiu_a_internet() {
    return (
        <>            
            <PostGrid>
                <PostSingle
                    divOneContent={arrayDivImage}
                    divTwoContent={arraydivText}
                />
            </PostGrid>            
        </>
    )
}
