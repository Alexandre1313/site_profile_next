import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';
import Title2 from '../../components/postsComponents/Title2';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/blog_desvendando_o_hook_use_effect_do_react_450.png`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={`Desvendando o Hook UseEffect do React`} />,

    <Title2 key={2} text={`Gerenciando efeitos colaterais de forma eficiente`}/>,

    <Parag key={3} text={`O React, uma das bibliotecas JavaScript mais populares para construção 
    de interfaces de usuário, introduziu uma poderosa ferramenta para lidar com efeitos colaterais 
    em componentes funcionais: o Hook useEffect. Esse hook desempenha um papel crucial ao permitir 
    que desenvolvedores controlem o ciclo de vida e comportamento de seus componentes de maneira 
    mais eficiente e organizada.`} />,

    <Parag key={4} text={`O principal propósito do useEffect é lidar com operações que ocorrem 
    fora do fluxo principal de renderização de um componente. Isso inclui tarefas como buscar dados 
    de APIs, manipular o DOM, assinar eventos externos e outras atividades que não estão diretamente 
    relacionadas à renderização da interface.`} />,    

    <Parag key={5} text={`O useEffect opera em conjunto com o conceito de "efeitos colaterais". 
    Efeitos colaterais são ações que ocorrem além da simples renderização de um componente, e que 
    muitas vezes envolvem interações com o ambiente externo, como solicitações de rede ou atualizações 
    do DOM. O useEffect permite que esses efeitos sejam gerenciados de maneira mais 
    controlada e previsível.`} />,

    <Parag key={6} text={`Ao usar o useEffect, os desenvolvedores podem especificar uma 
    função que será executada após cada renderização do componente. Essa função pode realizar 
    diversas tarefas, como:`} />,    

    <Title2 key={7} text={`Busca e atualização de dados`}/>,   
    
    <Parag key={8} text={`O useEffect é frequentemente utilizado para buscar dados de APIs ou 
    bancos de dados externos e atualizar o estado do componente com base nessas informações.`} />,    

    <Title2 key={9} text={`Assinatura de eventos`}/>,

    <Parag key={10} text={`Ele pode ser usado para assinar eventos globais ou do navegador, como 
    cliques de mouse, pressionamentos de teclas ou redimensionamento da janela.`} />,

    <Title2 key={11} text={`Atualização do DOM`}/>,

    <Parag key={12} text={`É possível usar o useEffect para manipular o DOM, seja para adicionar 
    ou remover elementos, alterar estilos ou executar outras operações de manipulação.`} />,

    <Title2 key={13} text={`Lidando com recursos`}/>,   
   
    <Parag key={14} text={`Se um componente precisar alocar recursos, como conexões de socket, o 
    useEffect também é útil para garantir a liberação adequada desses recursos quando o componente 
    for desmontado.`} />,

    <Title2 key={15} text={`Otimização de renderização:`}/>,

    <Parag key={16} text={`O useEffect pode ser utilizado para otimizar a renderização, evitando que 
    certas operações sejam executadas em todas as renderizações.`} />,

    <Parag key={17} text={`Uma característica poderosa do useEffect é a capacidade de controlar 
    quando ele é executado. Isso é feito passando um array de dependências como segundo argumento 
    para o hook. Quando essas dependências mudam entre renderizações, o useEffect é acionado 
    novamente. Caso contrário, ele é ignorado. Essa otimização ajuda a evitar execuções desnecessárias 
    e a controlar cuidadosamente quais efeitos devem ocorrer.`} />,

    <Parag key={18} text={`Em resumo, o useEffect é uma ferramenta fundamental no kit de ferramentas 
    do React para lidar com efeitos colaterais de maneira organizada e controlada. Ele oferece aos 
    desenvolvedores um meio eficiente de gerenciar tarefas assíncronas, atualizações do DOM e outras 
    operações que ocorrem fora do fluxo principal de renderização. Ao aproveitar o poder do useEffect, 
    os desenvolvedores podem criar componentes mais eficientes, robustos e responsivos, proporcionando 
    uma melhor experiência aos usuários.`} />,        
]



export default function Blog_desvendando_o_hook_use_effect_do_react() {
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
