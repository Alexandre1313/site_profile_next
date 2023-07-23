import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Title2 from '../../components/postsComponents/Title2';
import Linkk from '../../components/postsComponents/Linkk';
import Imag from '../../components/postsComponents/Imag';



const arrayDivImage: ReactNode[] = [
    <Imag key={1} urlImage={`/images/java_script_vs_json450.jpg`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={'Java Script - Objeto vs JSON'} />,

    <Title2 key={2} text={`JSON versus Objeto`} />,

    <Parag key={3} text={`Sabemos que o formato Json hoje é amplamente utilizado
    para a interoperabilidade dos sitemas, por ser este um formato simples e
    compatível com a maioria das tecnologias disponíveis.`} />,

    <Parag key={4} text={`Porém, um objeto embora muito semelhante com um Json não
    é a mesma coisa deste< embora a sigla queira dizer "Java Script Object Notation",
    como disse anteriormente< não se trata de um objeto, mas de uma formato textual
    para interoperabilidade entre sistemas, pois não carrega em si nenhuma,
    digamos assim, especificação de uma linguagem em específico.`} />,

    <Parag key={5} text={`No java script temos algumas funções para conversão de 
    objetos para json e vice -versa, vejamos algumas logo mais...`} />,

    <Title2 key={6} text={`JSON.parse()`} />,

    <Parag key={7} text={`A função JSON.parse() recebe Json nos parãmetros de entrada
    e os converte para objetos, note que apenas o que se refere à atributos é convertido,
    funções são desconsideradas no retorno deste método,vamos à um exemplo de chamada
    desta função :`} />,

    <Parag key={8} text={`JSON.parse('{"a": 1, "b": 2, "c": 3}'), note que o JSON repassado
    contém seus nomes de atributos sempre envolvidos por um par de aspas duplas,
    do contrário dará erro, porém o mesmo não acontece com os valores destes atributos,
    que devem ser envolvidos também por aspas duplas somente quando se tratar de strings.`} />,

    <Parag key={9} text={`Podemos também passar arrays e objetos no parãmetro de entrada
    desta função, claro me refiro aqui como valor de um determinado atributo, veja abixo
    um exemplo de chamada deste método utilizando vários tipos do java script:`} />,

    <Parag key={10} text={`console.log(JSON.parse('{"a": 1,7, "b": "String", "c": true, 
    "d": {}, "e": [1, 2, 3]}'))`} />,

    <Parag key={11} text={`Você pode verificar se um determinado Json é válido no link abaixo:`} />,

    <Linkk key={12} urlLink={`https://jsonformatter.curiousconcept.com`}
        description={`< Seguir Link />`} />,

    <Title2 key={13} text={`JSON.stringify()`} />,

    <Parag key={14} text={`Já a função JSON.stringify() faz o inverso da citada anteriormente,
    nos parâmetros de entrada se fornece o objeto, e este é convertido para o formato JSON,
    segue exemple de chamada para o método:`} />,

    <Parag key={15} text={`console.log(JSON.stringify(obj)), note que nesta chamada já
    utilizamos um console.log() para imprímí-lo na tela.`} />,
]



export default function Blog_java_script_objeto_vs_json() {
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
