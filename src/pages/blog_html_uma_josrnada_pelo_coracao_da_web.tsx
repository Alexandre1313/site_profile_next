import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';
import Title2 from '../../components/postsComponents/Title2';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/blog_html_uma_josrnada_pelo_coracao_da_web_450.jpg`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={`HTML - Uma jornada pelo coração da Web`} />,

    <Parag key={2} text={`O HyperText Markup Language, mais conhecido como HTML, é a pedra fundamental 
    da World Wide Web, a teia global que conecta bilhões de pessoas e informações. Desde sua criação nos 
    anos 90, o HTML tem desempenhado um papel fundamental na estruturação e apresentação de 
    conteúdo na internet.`} />,

    <Title2 key={3} text={`História e evolução`}/>,

    <Parag key={4} text={`Criado por Tim Berners-Lee, o HTML nasceu como uma solução para compartilhar 
    informações científicas entre pesquisadores de todo o mundo. A primeira versão, HTML 1.0, era simples, 
    limitada a formatações básicas como cabeçalhos e parágrafos. Com o tempo, à medida que a web se 
    expandia, novas versões do HTML surgiam, adicionando recursos mais avançados como imagens, links e 
    formulários interativos.`} />,    

    <Title2 key={5} text={`Importância na Web moderna`}/>, 

    <Parag key={6} text={`O HTML evoluiu para se tornar a base da experiência online. Cada página 
    da web é construída em HTML, permitindo aos desenvolvedores estruturar o conteúdo, adicionar links 
    para outras páginas e incorporar elementos multimídia. É a linguagem que permite que navegadores 
    interpretem e exibam informações de maneira consistente, independentemente do dispositivo 
    ou plataforma utilizada.`} />,
      
    <Title2 key={7} text={`Semântica e acessibilidade`}/>, 

    <Parag key={8} text={`Além de seu papel estrutural, o HTML moderno enfatiza a semântica, ou seja, 
    atribuir significado ao conteúdo. Isso não apenas ajuda os motores de busca a entender melhor o conteúdo, 
    mas também melhora a acessibilidade para pessoas com deficiências. As tags semânticas, como <header>, 
    <nav>, <article> e <footer>, facilitam a compreensão da estrutura da página.`} />,    

    <Title2 key={9} text={`Em constante evolução`}/>,

    <Parag key={10} text={`Com o avanço da tecnologia e as demandas em constante mudança dos desenvolvedores 
    e usuários, o HTML continua evoluindo. A especificação mais recente, HTML5, introduziu recursos poderosos, 
    como vídeo e áudio incorporados, geolocalização e armazenamento local. Além disso, frameworks e bibliotecas 
    JavaScript modernas trabalham em conjunto com o HTML para criar experiências interativas e dinâmicas.`} />,    

    <Parag key={11} text={`Em suma, o HTML não é apenas um conjunto de códigos, mas sim o alicerce 
    sobre o qual a internet é construída. Sua história é uma narrativa fascinante de colaboração global, 
    inovação contínua e um compromisso constante com a acessibilidade e a usabilidade. À medida que a web 
    continua a evoluir, o HTML continuará a ser o elo que conecta pessoas, informações e 
    possibilidades em todo o mundo.`} />,    
]



export default function Blog_html_uma_jornada_pelo_coracao_da_web() {
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
