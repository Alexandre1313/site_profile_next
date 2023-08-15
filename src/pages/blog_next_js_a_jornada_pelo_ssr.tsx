import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';
import Title2 from '../../components/postsComponents/Title2';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/blog_next_js_a_jornada_pelo_ssr450.png`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={'Next.js - A jornada pelo SSR e Páginas Estáticas'} />,

    <Parag key={2} text={`Hoje vamos embarcar em uma emocionante jornada pelo 
    mundo do desenvolvimento web com Next.js, uma poderosa estrutura de código 
    aberto construída em cima do React. Vamos explorar o Server-Side Rendering 
    (SSR) e as Páginas Estáticas, duas funcionalidades incríveis que tornam o 
    Next.js uma escolha popular entre desenvolvedores para criar aplicativos 
    web modernos e eficientes.`} />,

    <Title2 key={3} text={`O que é o Next.js?`}/>,

    <Parag key={4} text={`O Next.js é uma estrutura de renderização do lado do 
    servidor (SSR) e de criação de páginas estáticas para React. Ele oferece 
    uma experiência de desenvolvimento simplificada e permite que os desenvolvedores 
    criem aplicativos com eficiência e desempenho aprimorado. Com suporte a React, 
    o Next.js permite aos desenvolvedores tirar proveito de todos os recursos do 
    React enquanto otimiza a velocidade de carregamento e a experiência do usuário.`} />,

    <Title2 key={5} text={`Server-Side Rendering (SSR) no Next.js`}/>,

    <Parag key={6} text={`O SSR é uma técnica que permite renderizar o 
    conteúdo do lado do servidor antes de enviá-lo ao cliente. Isso significa 
    que o navegador recebe uma página totalmente renderizada, melhorando o tempo 
    de carregamento e a otimização para SEO. Com o Next.js, o SSR é fácil de 
    implementar, pois ele gerencia a renderização do lado do servidor de forma 
    transparente, permitindo que os desenvolvedores se concentrem em criar o conteúdo.`} />,

    <Title2 key={7} text={`Páginas Estáticas no Next.js`}/>,

    <Parag key={8} text={`Além do SSR, o Next.js também suporta a criação de 
    Páginas Estáticas. Nesse modelo, as páginas são geradas no momento da 
    construção e servidas como arquivos HTML estáticos. Isso é especialmente útil 
    para conteúdo que não muda com frequência, pois permite que os usuários recebam 
    uma página pronta sem a necessidade de fazer uma chamada ao servidor toda vez 
    que acessam o site. O Next.js torna esse processo simples, pois as páginas 
    estáticas são geradas automaticamente durante o processo de construção.`} />,

    <Title2 key={9} text={`Benefícios de usar o Next.js`}/>,

    <Parag key={10} text={`Melhoria de Desempenho: O SSR e as Páginas Estáticas reduzem 
    significativamente o tempo de carregamento, resultando em uma experiência mais 
    rápida e suave para os usuários.`} />,    

    <Parag key={11} text={`SEO Aprimorado: A renderização no lado do servidor melhora a 
    indexação do conteúdo pelos motores de busca, impulsionando o ranking do site nos 
    resultados de pesquisa.`} />,

    <Parag key={12} text={`O Next.js é construído em cima do React, tornando a integração com 
    outras bibliotecas e estruturas uma tarefa fácil.`} />,

    <Parag key={13} text={`Com SSR e Páginas Estáticas, o Next.js é altamente escalável, permitindo 
    que os aplicativos suportem grandes volumes de tráfego sem sacrificar o desempenho.`} />,

    <Title2 key={14} text={`Conclusão`}/>,

    <Parag key={15} text={`O Next.js é uma poderosa ferramenta para criar aplicativos web modernos, 
    aproveitando o Server-Side Rendering e as Páginas Estáticas para melhorar o desempenho e a 
    experiência do usuário. Com sua integração perfeita com o React e a facilidade de uso, o 
    Next.js se tornou uma escolha popular entre desenvolvedores em busca de um framework 
    eficiente e robusto.`} />,

    <Parag key={16} text={`Portanto, se você deseja levar suas habilidades de desenvolvimento 
    web para o próximo nível e criar aplicativos incríveis e eficientes, o Next.js é a escolha 
    certa para você. Vamos embarcar nessa jornada juntos e explorar todo o potencial que o Next.js 
    tem a oferecer!`} />,

    <Parag key={17} text={`Esperamos que você tenha gostado deste post e que ele tenha despertado 
    seu interesse pelo Next.js e suas funcionalidades. Fique ligado para mais conteúdos 
    emocionantes sobre desenvolvimento web!`} />,    
]



export default function Blog_next_js_a_jornada_pelo_ssr() {
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
