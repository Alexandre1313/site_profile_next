import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/historia_da_linguagem_java_script450.png`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={'História da linguagem Java Script'} />,

    <Parag key={2} text={`JavaScript é uma linguagem de programação popular, 
    conhecida por sua versatilidade e ampla aplicação na web. Sua história remonta
    aos primórdios da internet e está intrinsecamente ligada ao desenvolvimento
    da web moderna.`} />,

    <Parag key={3} text={`No início dos anos 90, a web estava se tornando cada vez 
    mais popular, mas faltava uma linguagem de programação adequada para interatividade
    e dinamismo nos navegadores.`} />,

    <Parag key={4} text={`Foi nesse contexto que Brendan Eich, um engenheiro da Netscape,
    criou o JavaScript em apenas 10 dias, em 1995. A linguagem originalmente se
    chamava LiveScript, mas foi renomeada para JavaScript para aproveitar o 
    sucesso da linguagem Java na época.`} />,

    <Parag key={5} text={`O JavaScript rapidamente se tornou uma parte essencial da web, 
    permitindo a criação de elementos interativos como formulários, botões e animações.`} />,

    <Parag key={6} text={`Com o lançamento do Internet Explorer 3.0 em 1996, o JavaScript 
    foi adotado como uma linguagem padrão em todos os navegadores modernos, consolidando 
    sua posição como a linguagem de programação para o desenvolvimento web.`} />,

    <Parag key={7} text={`Com o passar do tempo, surgiram novos recursos e aprimoramentos 
    na linguagem JavaScript. A especificação ECMAScript foi introduzida para padronizar 
    a linguagem e definir seu funcionamento em diferentes ambientes.`} />,

    <Parag key={8} text={`O lançamento do ECMAScript 3 em 1999 trouxe melhorias significativas, 
    como suporte a expressões regulares, manipulação de exceções e novas estruturas de controle.`} />,

    <Parag key={9} text={`Nos anos seguintes, surgiram versões adicionais do ECMAScript, com
    destaque para o ECMAScript 5 em 2009, que trouxe recursos como acesso aos elementos 
    de um array por meio de índices, métodos de iteração e melhorias na manipulação de strings.`} />,

    <Parag key={10} text={`No entanto, o JavaScript enfrentava desafios de desempenho e 
    limitações em relação ao desenvolvimento de aplicativos mais complexos. Isso mudou 
    com o lançamento do ECMAScript 6 (também conhecido como ES6 ou ES2015) em 2015.`} />,

    <Parag key={11} text={`O ECMAScript 6 trouxe recursos poderosos, como classes, arrow 
    functions, promessas, módulos e aprimoramentos na manipulação de arrays e objetos.`} />,

    <Parag key={12} text={`Desde então, novas versões do ECMAScript têm sido lançadas
    regularmente, trazendo mais recursos e melhorias à linguagem JavaScript.`} />,

    <Parag key={13} text={`Além do desenvolvimento web, o JavaScript também se expandiu
    para outros domínios, como desenvolvimento de aplicativos móveis (usando frameworks 
    como React Native), desenvolvimento de jogos (usando frameworks como Phaser) e 
    desenvolvimento de servidor (usando o Node.js).`} />,

    <Parag key={14} text={`A comunidade JavaScript cresceu exponencialmente, impulsionada
    por conferências, fóruns online e a colaboração entre desenvolvedores. A popularidade
    do JavaScript é evidente pela quantidade de bibliotecas, frameworks e ferramentas disponíveis.`} />,

    <Parag key={15} text={`Hoje, o JavaScript é amplamente reconhecido como a linguagem de
    programação padrão para o desenvolvimento web e continua evoluindo, fornecendo aos
    desenvolvedores as ferramentas necessárias para criar experiências interativas e dinâmicas na web.`} />,

    <Parag key={16} text={`A história do JavaScript é uma jornada de inovação, adaptabilidade
    e crescimento. Desde seu surgimento como uma solução rápida para a web até sua consolidação
    como uma linguagem poderosa e versátil, o JavaScript tem sido um pilar fundamental para o
    desenvolvimento web moderno. Com uma comunidade ativa e um ecossistema em constante
    evolução, o JavaScript continuará a moldar o futuro da web e além, fornecendo soluções
    criativas e interativas para os desafios da programação.`} />,   
]



export default function Blog_historia_da_linguagem_java_script() {
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
