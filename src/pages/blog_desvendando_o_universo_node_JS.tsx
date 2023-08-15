import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';
import Title2 from '../../components/postsComponents/Title2';
import Linkk from '../../components/postsComponents/Linkk';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/blog_desvendando_o_universo_node_JS_450.png`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={`Desvendando o universo do Node.js - Uma jornada 
    pelo ambiente de tempo de execução JavaScript`} />,

    <Parag key={2} text={`Node.js é um ambiente de tempo de execução JavaScript de código 
    aberto e multiplataforma, que permite que os desenvolvedores criem aplicações de rede 
    rápidas e escaláveis. Com uma comunidade ativa e apaixonada e um ecossistema repleto 
    de bibliotecas e módulos, o Node.js se tornou uma das tecnologias mais populares 
    para o desenvolvimento de aplicativos web modernos e servidores.`} />,

    <Title2 key={3} text={`O que é o Node.js?`}/>,

    <Parag key={4} text={`O Node.js é construído sobre o motor JavaScript V8 do Google 
    Chrome, que permite que o código JavaScript seja executado no lado do servidor, em 
    vez do lado do cliente. Isso possibilita que os desenvolvedores utilizem a mesma 
    linguagem de programação tanto no frontend quanto no backend, proporcionando uma 
    experiência de desenvolvimento mais consistente e eficiente.`} />,    

    <Parag key={5} text={`Além disso, o Node.js utiliza um modelo de E/S não bloqueante, 
    o que significa que ele é altamente eficiente e escalável, permitindo que um único 
    thread do Node.js possa manipular várias solicitações de forma concorrente, sem a 
    necessidade de criar novos threads para cada solicitação.`} />,

    <Title2 key={6} text={`Principais características`}/>,    

    <Parag key={7} text={`Rápido e Eficiente: O Node.js é conhecido por sua alta velocidade 
    de execução de código, graças ao motor V8. Sua arquitetura não bloqueante torna o 
    Node.js uma opção ideal para aplicações de alto desempenho e tempo real.`} />,    

    <Parag key={8} text={`Escalabilidade: A capacidade de manipular várias solicitações 
    simultaneamente torna o Node.js altamente escalável, sendo adequado para aplicações 
    com alta demanda de tráfego.`} />,    

    <Parag key={9} text={`Módulos e Bibliotecas: O Node.js possui um vasto repositório 
    de módulos e bibliotecas que facilitam o desenvolvimento, permitindo que os 
    desenvolvedores aproveitem a funcionalidade existente em vez de reinventar a roda.`} />,

    <Parag key={10} text={`Comunidade Ativa: A comunidade do Node.js é extremamente ativa 
    e colaborativa, proporcionando suporte e soluções para uma ampla gama de problemas.`} />,

    <Parag key={11} text={`Code Sharing: O Node.js facilita o compartilhamento de código 
    entre o frontend e o backend, permitindo uma maior reutilização e manutenção do código.`} />,

    <Title2 key={12} text={`Casos de uso`}/>,

    <Parag key={13} text={`O Node.js é amplamente utilizado em diversos casos de uso, incluindo:`} />,

    <Parag key={14} text={`Aplicações Web: O Node.js é uma escolha popular para desenvolvimento 
    de servidores web e aplicações web em tempo real, como chats, jogos online e plataformas 
    de colaboração.`} />,

    <Parag key={15} text={`APIs RESTful: O Node.js é frequentemente utilizado para 
    criar APIs RESTful eficientes e escaláveis para aplicativos móveis e web.`} />,   
    
    <Parag key={16} text={`Aplicações em Tempo Real: Graças à sua arquitetura não 
    bloqueante, o Node.js é amplamente adotado para criar aplicações em tempo real, 
    como aplicativos de bate-papo e monitoramento em tempo real.`} />,

    <Parag key={17} text={`Ferramentas de Desenvolvimento: O Node.js é usado para 
    criar várias ferramentas de desenvolvimento, como o gerenciador de pacotes npm, 
    que é essencial para qualquer projeto Node.js.`} />,

    <Title2 key={18} text={`Conclusão`}/>,
    
    <Parag key={19} text={`O Node.js é uma tecnologia poderosa e versátil que 
    revolucionou o desenvolvimento de aplicações web e servidores. Sua velocidade, 
    escalabilidade e eficiência o tornaram uma escolha popular entre desenvolvedores 
    em todo o mundo. Com uma comunidade ativa e uma rica coleção de bibliotecas e 
    módulos, o Node.js continuará sendo uma das principais opções para a construção 
    de aplicações modernas e inovadoras.`} />,

    <Parag key={20} text={`Se você está procurando uma plataforma confiável e flexível 
    para suas necessidades de desenvolvimento, o Node.js é certamente uma excelente 
    opção a ser considerada. Com suas muitas vantagens e vasta gama de casos de uso, 
    o Node.js continuará desempenhando um papel fundamental no futuro do desenvolvimento de software.`} />,

    <Title2 key={21} text={`Referências:`}/>,
   
    <Linkk
        key={22}
        urlLink={`https://nodejs.org/en`}
        description={`https://nodejs.org`}
    />,

    <Linkk
        key={23}
        urlLink={`https://www.w3schools.com/nodejs/`}
        description={`https://www.w3schools.com/nodejs`}
    />,

    <Linkk
        key={24}
        urlLink={`https://www.freecodecamp.org/news/what-is-node-js/`}
        description={`https://www.freecodecamp.org/news/what-is-node-js`}
    />,

    <Linkk
        key={25}
        urlLink={`https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js`}
        description={`https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js`}
    />
]



export default function Blog_desvendando_o_universo_node_JS() {
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
