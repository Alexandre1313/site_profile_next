import Image from "next/image"
import style from "../src/styles/gridPageAbout.module.css"
import Accordion from "./Accordion"
import { useEffect, useState } from "react";
import tagRandon, {tag} from "@/utils/tagRandon";

const GridPageAbout = () => {

    const [tag0, setTag0] = useState<tag | null>(null);

    useEffect(() => {
        // Verifica se o código está rodando no lado do cliente
        if (typeof window !== 'undefined') {
            setTag0(tagRandon());
        }
    }, []);

    const [tag11, setTag11] = useState<tag | null>(null);

    useEffect(() => {
        // Verifica se o código está rodando no lado do cliente
        if (typeof window !== 'undefined') {
            setTag11(tagRandon());
        }
    }, []);
    
    return (
        <div className={style.divflex}>
            <div className={style.gridMaster}>
                <div className={style.gridTitle}>
                    <h2 className={style.titlePage}>Sobre</h2>
                </div>
                <div className={style.secondaryGrid}>
                    <Image className={style.imgPerfil}
                        src={`/images/foto_page_sobre_perfil.jpg`}
                        alt={`Foto de Alexandre Cordeiro`}
                        width={350}
                        height={438}
                        priority={true}
                    />
                    <p className={style.paragrafyLegend}>Alexandre Cordeiro</p>
                </div>
                <div className={style.fourthGrid}>
                    <Image className={style.imgPerfil}
                        src={`/images/blumenau_sc_brasil.jpg`}
                        alt={`Foto de Blumenau - SC - Brasil`}
                        width={350}
                        height={438}
                        priority={true}
                    />
                    <p className={style.paragrafyLegend}>Blumenau - SC - Brasil</p>
                </div>
                <div className={style.thirdGrid}>
                    <h1 className={style.title1}>
                        <span className={style.adorno}>
                            {!tag0 ? '' : tag0.ct === '/' ? `<${tag0.ot}` : `<${tag0.ot}>`} 
                        </span>
                         ? ? ? 
                        <span className={style.adorno}>
                            {!tag0 ? '' : tag0.ct === '/' ? `${tag0.ct}>` : `<${tag0.ct}>`}
                        </span>
                    </h1>
                    <p className={style.paragrafy}>
                        Olá! Meu nome é Alexandre Cordeiro e sou natural de Blumenau, uma bela cidade
                        localizada em Santa Catarina, Brasil. Com 44 anos de idade, nasci em 1979 e tive a
                        oportunidade de crescer em meio às belezas naturais e cultura encantadora desse lugar.
                    </p>
                    <p className={style.paragrafy}>
                        Sou filho de Eva de Lourdes Policarpo e tenho a alegria de ser pai de três filhos
                        maravilhosos: uma moça de 16 anos e dois rapazes com 18 e 23 anos, respectivamente.
                        Minha família é uma parte fundamental da minha vida e me inspira a buscar sempre o
                        melhor em todas as minhas realizações.
                    </p>
                    <p className={style.paragrafy}>
                        Ao longo da minha trajetória profissional, tive experiências diversas antes de me
                        dedicar à área de programação. Iniciei como servente de pedreiro nos anos de 1998 a
                        2001, o que me proporcionou aprendizados sobre trabalho em equipe e resiliência. Em
                        seguida, atuei como estoquista de 2001 a 2010, desenvolvendo habilidades de organização e
                        gestão de materiais.
                    </p>
                    <p className={style.paragrafy}>
                        No período de 2010 a 2022, desempenhei o papel de auxiliar de almoxarifado, onde
                        aprimorei meus conhecimentos em logística e controle de estoque. Essas experiências
                        anteriores me deram uma base sólida de habilidades transferíveis, que se tornaram
                        valiosas no meu caminho profissional.
                    </p>
                    <p className={style.paragrafy}>
                        Foi em 2022 que tive minha primeira oportunidade na área de programação, ao trabalhar
                        em uma empresa onde pude me dedicar ao desenvolvimento de sites utilizando WordPress
                        e Elementor. Durante esse período, pude aprofundar meus conhecimentos em Python e PHP,
                        obtendo certificados com carga horária de 40 horas em ambas as linguagens. Além disso,
                        concluí minha graduação em Análise e Desenvolvimento de Sistemas pela Uniasselvi em janeiro de 2023.
                    </p>
                    <p className={style.paragrafy}>
                        Durante minha formação acadêmica, tive a chance de explorar diferentes tecnologias,
                        sendo a linguagem JavaScript uma das principais. Atualmente, estou focado em aprimorar
                        minhas habilidades em Next.js, uma poderosa ferramenta para desenvolvimento web. Além
                        disso, possuo experiência sólida em WordPress e, mais especificamente, no Elementor,
                        que me permite criar sites incríveis de forma intuitiva e eficiente.
                    </p>
                    <p className={style.paragrafy}>
                        Visualizo meu futuro continuando a me especializar em tecnologias web, como também
                        explorando o campo da inteligência artificial. Pretendo me manter atualizado sobre
                        as últimas tendências e inovações, contribuindo para projetos impactantes e relevantes.
                    </p>
                    <p className={style.paragrafy}>
                        Estou entusiasmado em compartilhar minha jornada e conhecimentos com você. Agradeço
                        por visitar minha página <strong> &quot;Sobre&quot; </strong>  e espero que você tenha a oportunidade de conhecer
                        um pouco mais sobre mim e minhas paixões no mundo da tecnologia. Sinta-se à vontade
                        para explorar o conteúdo do meu site e entrar em contato comigo para qualquer dúvida
                        ou projeto interessante.
                    </p>
                </div>
                <div className={style.thirdGrid2}>
                <h2 className={style.title1}>
                        <span className={style.adorno}>
                            {!tag11 ? '' : tag11.ct === '/' ? `<${tag11.ot}` : `<${tag11.ot}>`}
                        </span>
                        Sobre minha terra natal...
                        <span className={style.adorno}>
                            {!tag11 ? '' : tag11.ct === '/' ? `${tag11.ct}>` : `<${tag11.ct}>`}
                        </span>
                    </h2>
                    <p className={style.paragrafy}>
                        Blumenau, localizada no estado de Santa Catarina, Brasil, é uma cidade com uma rica história e
                        cultura. Fundada em 1850 por imigrantes alemães, a cidade leva consigo as influências da cultura
                        germânica até os dias de hoje.
                    </p>
                    <p className={style.paragrafy}>
                        No início, Blumenau era uma pequena vila agrícola, onde os imigrantes se dedicavam principalmente à
                        agricultura e à produção de cerveja. Ao longo dos anos, a cidade cresceu e se desenvolveu, tornando-se
                        um importante centro industrial e comercial da região.
                    </p>
                    <p className={style.paragrafy}>
                        Um dos marcos mais conhecidos de Blumenau é a Oktoberfest, uma festa tradicional que celebra a
                        cultura alemã com música, dança, gastronomia e, é claro, cerveja. A Oktoberfest de Blumenau é
                        considerada uma das maiores festas do gênero fora da Alemanha, atraindo visitantes de todo o país.
                    </p>
                    <p className={style.paragrafy}>
                        Além disso, a cidade é conhecida por sua arquitetura encantadora, com muitas construções que
                        preservam o estilo enxaimel, típico da região da Baviera, na Alemanha. O turismo é uma importante
                        fonte de renda para a cidade, que recebe visitantes interessados em explorar suas belezas naturais,
                        como o Rio Itajaí-Açu e as belas paisagens da região.
                    </p>
                    <p className={style.paragrafy}>
                        Blumenau também se destaca no cenário educacional, com diversas instituições de ensino superior
                        e uma forte cultura de valorização da educação. A cidade é reconhecida pela qualidade de vida
                        oferecida aos seus habitantes, com uma infraestrutura moderna, serviços de saúde de excelência
                        e um ambiente seguro e acolhedor.
                    </p>
                    <p className={style.paragrafy}>
                        Em resumo, Blumenau é uma cidade com uma história fascinante, que combina influências alemãs,
                        belezas naturais e um ambiente culturalmente diverso. Com seu charme peculiar e forte identidade,
                        Blumenau encanta residentes e visitantes, tornando-se um destino imperdível para aqueles que
                        desejam conhecer o melhor do sul do Brasil.
                    </p>
                </div>
                <div className={style.divCertificates}>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default GridPageAbout
