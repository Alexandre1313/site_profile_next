import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';
import Title2 from '../../components/postsComponents/Title2';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/tag_450.png`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={`Explorando as tags HTML`} />,

    <Title2 key={2} text={` Uma jornada pelas principais tags e suas finalidades`}/>,

    <Parag key={3} text={`Quando se trata de desenvolvimento web, as tags HTML são os blocos de construção 
    fundamentais que definem a estrutura e o conteúdo de uma página. Cada tag desempenha um papel único na 
    formatação e organização do conteúdo, permitindo que os desenvolvedores criem experiências web ricas 
    e interativas. Neste artigo, vamos explorar algumas das principais tags HTML e entender 
    suas finalidades.`} />,      

    <Title2 key={4} text={`<a> : Links`}/>,

    <Parag key={5} text={`A tag <a> cria links para outras páginas, recursos ou âncoras dentro da 
    mesma página. Ela permite que os usuários naveguem entre diferentes partes do seu site ou acessem 
    recursos externos.`} />,
    
    <Title2 key={6} text={`<abbr> : Abreviação ou acrônimo`}/>,   
   
    <Parag key={7} text={`A tag <abbr> é usada para definir abreviações ou acrônimos e fornecer a versão 
    completa do termo quando o cursor do mouse paira sobre a abreviação.`} />,

    <Title2 key={8} text={`<address> : Informações de contato`}/>,

    <Parag key={9} text={`A tag <address> é usada para fornecer informações de contato, como endereços 
    de e-mail, endereços físicos ou números de telefone.`} />,

    <Title2 key={10} text={`<article> : Conteúdo Autônomo`}/>,

    <Parag key={11} text={`A tag <article> é usada para definir um conteúdo autônomo, como uma postagem de 
    blog ou um artigo de notícias. Ela ajuda a estruturar o conteúdo e fornece informações semânticas sobre 
    o conteúdo específico.`} />,   

    <Title2 key={12} text={`<aside> : Conteúdo relacionado`}/>,   
    
    <Parag key={13} text={`A tag <aside> é usada para definir conteúdo relacionado ou complementar ao conteúdo 
    principal da página. Isso pode incluir barras laterais, widgets, anúncios ou outras informações que 
    não fazem parte do fluxo de conteúdo principal.`} />,    

    <Title2 key={14} text={`<audio>, <video> : Áudio e vídeo`}/>,   
   
    <Parag key={15} text={`As tags <audio> e <video> permitem incorporar e reproduzir arquivos de áudio e 
    vídeo diretamente na página. Elas suportam uma variedade de formatos de mídia e podem ser personalizadas 
    com controles de reprodução.`} />,

    <Title2 key={16} text={`<base> : URL base para links`} />,

    <Parag key={17} text={`A tag <base> é usada para especificar a URL base para todos os links relativos 
    na página. Isso permite que você defina um URL base padrão para os links, economizando a necessidade de 
    repetir o URL completo em cada link.`} />,

    <Title2 key={18} text={`<bdi> : Isolamento de texto bidirecional`} />,

    <Parag key={19} text={`A tag <bdi> é usada para isolar um trecho de texto que pode ter uma direção 
    bidirecional diferente da direção do texto ao redor. Isso é útil para evitar que caracteres de diferentes 
    idiomas interfiram uns nos outros.`} />,

    <Title2 key={20} text={`<blockquote> : Citação em bloco`}/>,

    <Parag key={21} text={`A tag <blockquote> é usada para formatar uma citação em bloco, que é geralmente 
    uma passagem mais longa e destacada do texto. Ela é frequentemente usada para destacar citações de 
    outras fontes.`} />,  

    <Title2 key={22} text={`<body> : O corpo da página`}/>,

    <Parag key={23} text={`A tag <body> contém o conteúdo visível da página, incluindo 
    textos, imagens, links, formulários e outros elementos visuais. É onde a maior parte 
    da estrutura e do conteúdo da página é definida.`} />,

    <Title2 key={24} text={`<button> : Botões`}/>,

    <Parag key={25} text={`A tag <button> cria botões interativos que os usuários podem clicar. Ela é usada 
    para criar botões de envio de formulário, botões de ação ou qualquer elemento interativo que execute 
    uma ação quando clicado.`} />,

    <Title2 key={26} text={`<canvas> : Desenhos gráficos`}/>,   
    
    <Parag key={27} text={`A tag <canvas> é usada para criar gráficos e desenhos diretamente na página 
    usando JavaScript. Ela oferece uma área de desenho onde você pode criar gráficos, animações e 
    visualizações de dados.`} />,  

    <Title2 key={28} text={`<cite> : Título de obra citada`}/>,   
    
    <Parag key={29} text={`A tag <cite> é usada para definir o título de uma obra citada, como o título 
    de um livro, filme, música ou outra criação artística.`} />,    
        
    <Title2 key={30} text={`<datalist> : Lista de opções para <input>`} />,

    <Parag key={31} text={`A tag <datalist> é usada para fornecer uma lista de opções para um campo de entrada 
    <inp ut> do tipo "text". Ela permite que os usuários escolham uma opção da lista enquanto digitam.`} />,

    <Title2 key={32} text={`<details> : Detalhes de conteúdo oculto`} />,
    
    <Parag key={33} text={`A tag <details> é usada para criar um elemento de conteúdo ocultável que pode ser 
    revelado ou oculto pelo usuário. Geralmente, é usado para exibir informações adicionais ou opções em um 
    elemento que pode ser expandido.`} />,

    <Title2 key={34} text={`<dfn> : Definição de termo`}/>,
    
    <Parag key={35} text={`A tag <dfn> é usada para definir a definição de um termo ou conceito. Ela 
    é frequentemente usada em conjunto com a tag <abbr> para fornecer informações sobre o significado 
    de abreviações.`} />,

    <Title2 key={36} text={`<dialog> : Caixa de diálogo`} />,

    <Parag key={37} text={`A tag <dialog> é usada para criar uma caixa de diálogo ou modal na página. Ela 
    pode conter conteúdo interativo ou informativo, e geralmente é usada para exibir informações adicionais 
    ou solicitar ação do usuário.`} />,

    <Title2 key={38} text={`<div> : Divisões`}/>,

    <Parag key={39} text={`A tag <div> é usada para agrupar e organizar elementos em blocos de conteúdo. 
    Ela é frequentemente usada em conjunto com folhas de estilo CSS para aplicar estilos e layout ao 
    conteúdo.`}/>,

    <Title2 key={40} text={`<embed> : Mídia incorporada`} />,

    <Parag key={41} text={`A tag <embed> é usada para incorporar conteúdo de mídia, como áudio, vídeo, 
    aplicativos interativos e muito mais, diretamente na página. Ela pode ser usada para adicionar 
    elementos de mídia de terceiros, como vídeos do YouTube.`} />,

    <Title2 key={42} text={`<fieldset>, <legend> : Conjunto de campos de formulário`} />,

    <Parag key={43} text={`As tags <fieldset> e <legend> são usadas para agrupar e fornecer uma legenda 
    para um conjunto de campos de formulário relacionados. Isso ajuda a organizar e estruturar formulários 
    mais complexos.`} />,

    <Title2 key={44} text={`<figure>, <figcaption> : Imagens com legenda`}/>,

    <Parag key={45} text={`As tags <figure> e <figcaption> são usadas para exibir imagens com legendas 
    associadas. A <figure> é usada para envolver a imagem, enquanto a <figcaption> é usada para fornecer 
    a legenda descritiva.`} />,

    <Title2 key={46} text={`<footer> : Rodapé`}/>,

    <Parag key={47} text={`A tag <footer> é usada para criar o rodapé da página, que geralmente contém 
    informações de contato, direitos autorais e links úteis.`} />,

    <Title2 key={48} text={`<form> : Formulários`}/>,

    <Parag key={49} text={`A tag <form> é usada para criar formulários interativos, permitindo que os 
    usuários enviem dados para o servidor. Ela contém vários elementos de entrada, como <input>, <textarea> 
    e <button>, que coletam informações dos usuários.`} />,    

    <Title2 key={50} text={`<h1>, <h2>, <h3>, <h4>, <h5>, <h6> : Títulos e subtítulos`}/>,

    <Parag key={51} text={`As tags <h1> a <h6> são usadas para definir cabeçalhos e títulos de diferentes 
    níveis de importância. O <h1> é geralmente o título principal da página, enquanto os <h2>, <h3>, etc., 
    são usados para títulos secundários e subtítulos.`} />,

    <Title2 key={52} text={`<head> : Metadados e informações da página`}/>,   
    
    <Parag key={53} text={`Dentro da tag <head>, você encontra metadados e 
    informações essenciais sobre a página, como o título exibido na guia do navegador 
    (<title>), links para folhas de estilo (<link>), scripts (<script>), e outros metadados importantes.`} />,

    <Title2 key={54} text={`<header> : Cabeçalho`}/>,   
    
    <Parag key={55} text={`A tag <header> é usada para criar o cabeçalho da página, que pode incluir logotipos, 
    títulos e outros elementos importantes.`} />,  
    
    <Title2 key={56} text={`<hgroup> : Grupo de títulos`} />,

    <Parag key={57} text={`A tag <hgroup> é usada para agrupar múltiplas tags de cabeçalho <h1> a <h6> que 
    pertencem a um título conjunto. Isso é útil para criar hierarquias de títulos e estruturar o conteúdo.`} />,

    <Title2 key={58} text={`<html> : A Raiz do documento`}/>,

    <Parag key={59} text={`A tag <html> é o ponto de partida de qualquer documento HTML. 
    Ela envolve todo o conteúdo da página e informa ao navegador que o conteúdo 
    é um documento HTML.`} />,

    <Title2 key={60} text={`<iframe> : Frames embutidos`}/>,

    <Parag key={61} text={`A tag <iframe> é usada para incorporar conteúdo de outras fontes, como páginas 
    da web externas ou vídeos incorporados. Ela cria um "frame" dentro da página onde o conteúdo externo 
    é exibido.`} />,

    <Title2 key={62} text={`<img> : Imagens`}/>,

    <Parag key={63} text={`A tag <img> é usada para incorporar imagens na página. Ela requer um atributo "src" 
    para especificar o caminho da imagem e pode incluir atributos opcionais, como "alt" para texto alternativo 
    e "width" e "height" para dimensionar a imagem.`} />,

    <Title2 key={64} text={`<input> : Entradas de dados`}/>,   
    
    <Parag key={65} text={`A tag <input> é usada para criar campos de entrada de dados, como caixas de 
    texto, botões de opção, caixas de seleção e outros elementos interativos. O atributo "type" determina 
    o tipo de entrada que será exibido.`} />,  
    
    <Title2 key={66} text={`<link> : Vinculando recursos externos`}/>,

    <Parag key={67} text={`A tag <link> é usada para vincular recursos externos à página, como arquivos 
    de estilo CSS ou ícones. Ela é frequentemente usada no elemento <head> para importar estilos de uma 
    folha de estilo externa.`} />,
    
    <Title2 key={68} text={`<keygen> : Geração de chave de criptografia`} />,

    <Parag key={69} text={`A tag <keygen> era usada para criar pares de chaves de criptografia e formulários 
    de envio seguro. No entanto, ela foi considerada obsoleta e removida no HTML5 devido à sua complexidade 
    e falta de suporte generalizado.`} />,

    <Title2 key={70} text={`<main> : Conteúdo principal`}/>,   
   
    <Parag key={71} text={`A tag <main> é usada para identificar o conteúdo principal da página. Ela ajuda 
    os mecanismos de busca e tecnologias assistivas a entender qual é o conteúdo 
    mais relevante da página.`} />,

    <Title2 key={72} text={`<mark> : Destaque de texto`}/>,

    <Parag key={73} text={`A tag <mark> é usada para destacar partes do texto que são especialmente relevantes 
    ou importantes. Geralmente, o texto destacado é realçado com uma cor de fundo amarela para chamar a 
    atenção do leitor.`} />,

    <Title2 key={74} text={`<menu> : Menus de navegação contextual`} />,

    <Parag key={75} text={`A tag <menu> é usada para criar menus de navegação contextual que geralmente são 
    acionados por um botão direito do mouse. Ela pode conter itens de menu que executam ações específicas 
    quando selecionados.`} />,

    <Title2 key={76} text={`<meta> : Metadados da página`}/>,   
   
    <Parag key={77} text={`A tag <meta> fornece metadados sobre a página, como descrição, palavras-chave, 
    codificação de caracteres e informações de autor. Esses metadados são usados por mecanismos de busca 
    e redes sociais para entender o conteúdo da página.`} />,

    <Title2 key={78} text={`<meter> : Barra de medição`} />,

    <Parag key={79} text={`A tag <meter> é usada para criar uma barra de medição que representa um valor dentro 
    de um intervalo específico. Ela é usada para exibir visualmente informações de medição, como progresso, 
    porcentagem de conclusão ou pontuações.`} />,

    <Title2 key={80} text={`<nav> : Navegação`}/>,

    <Parag key={81} text={`A tag <nav> é usada para definir uma seção de navegação dentro da página. Ela 
    geralmente contém links para outras partes do site, como menus de navegação.`} />,  
    
    <Title2 key={82} text={`<noembed> : Conteúdo alternativo para plug-ins`} />,

    <Parag key={83} text={`A tag <noembed> era usada para fornecer conteúdo alternativo para navegadores que 
    não suportam plug-ins embutidos, como o <embed>. No entanto, ela foi considerada obsoleta e removida no 
    HTML5.`} />,

    <Title2 key={84} text={`<noscript> : Conteúdo alternativo para navegadores sem JavaScript`}/>,

    <Parag key={85} text={`A tag <noscript> é usada para fornecer conteúdo alternativo que será exibido 
    para navegadores que não suportam JavaScript ou quando o JavaScript está desativado. Isso é útil 
    para garantir que os usuários tenham uma experiência adequada mesmo sem JavaScript.`} />,

    <Title2 key={86} text={`<optgroup>, <option> : Grupos e opções de seleção`} />,

    <Parag key={87} text={`As tags <optgroup> e <option> são usadas para criar listas suspensas e caixas 
    de seleção em formulários. <optgroup> agrupa opções relacionadas, enquanto <option> define cada opção 
    individual dentro do grupo.`} />,

    <Title2 key={88} text={`<output> : Resultado de cálculos ou scripts`} />,

    <Parag key={89} text={`A tag <output> é usada para exibir o resultado de cálculos ou scripts em um 
    formulário. Ela pode exibir informações processadas que são geradas com base nos valores inseridos 
    pelo usuário.`} />,
    
    <Title2 key={90} text={`<p> : Parágrafos`}/>,   
   
    <Parag key={91} text={`A tag <p> é usada para criar parágrafos de texto. Ela é essencial para 
    estruturar o conteúdo em blocos legíveis e separados.`} />,

    <Title2 key={92} text={`<pre> : Texto pré-formatado`}/>,   
   
    <Parag key={93} text={`A tag <pre> é usada para exibir texto pré-formatado, preservando 
    espaços em branco e quebras de linha exatamente como são escritos no código HTML.`} />,

    <Title2 key={94} text={`<progress> : Barra de progresso`} />,

    <Parag key={95} text={`A tag <progress> é usada para criar uma barra de progresso que indica visualmente 
    o progresso de uma tarefa em porcentagem. Ela é frequentemente usada para mostrar o progresso de 
    carregamento ou conclusão de uma ação.`} />,

    <Title2 key={96} text={`<q> : Citação curta`}/>,

    <Parag key={97} text={`A tag <q> é usada para indicar uma citação curta no texto. Ela é 
    frequentemente usada dentro de parágrafos para destacar uma citação direta.`} />,  

    <Title2 key={98} text={`<ruby>, <rt>, <rp> : Anotações de texto em ruby`} />,

    <Parag key={99} text={`As tags <ruby>, <rt> e <rp> são usadas para adicionar anotações de texto em 
    ruby a caracteres ou palavras em idiomas que usam a notação ruby, como o japonês. <rt> contém o texto 
    a ser exibido acima ou abaixo do caractere, enquanto <rp> define a apresentação de parênteses de 
    anotação.`} />,

    <Title2 key={100} text={`<s> : Texto tachado`} />,

    <Parag key={101} text={`A tag <s> é usada para aplicar uma linha horizontal através do texto, indicando 
    que o texto foi riscado ou considerado obsoleto. Geralmente, é usado para mostrar alterações ou 
    atualizações em documentos.`} />,

    <Title2 key={102} text={`<samp> : Saída de amostra`} />,

    <Parag key={103} text={`A tag <samp> é usada para representar a saída de um programa de computador ou 
    script. O texto dentro da tag é exibido em uma fonte monoespaçada, indicando que é uma saída de código ou 
    programa.`} />,

    <Title2 key={104} text={`<script> : Scripts JavaScript`}/>,

    <Parag key={105} text={`A tag <script> é usada para incorporar scripts JavaScript na página. Isso 
    permite que os desenvolvedores adicionem interatividade e funcionalidade à página. Ela pode ser 
    colocada no <head> ou no final do <body> para otimizar o carregamento da página.`} />,  
    
    <Title2 key={106} text={`<section> : Seções de conteúdo`}/>,

    <Parag key={107} text={`A tag <section> é usada para dividir o conteúdo da página em seções temáticas 
    ou funcionais. Ela ajuda a organizar e estruturar o conteúdo de maneira lógica.`} />, 
    
    <Title2 key={108} text={`<select> : Lista suspensa de seleção`} />,

    <Parag key={109} text={`A tag <select> é usada para criar uma lista suspensa de opções de seleção em 
    formulários. Os usuários podem escolher uma opção da lista para inserir como valor.`} />,

    <Title2 key={110} text={`<small> : Texto de menor importância`} />,

    <Parag key={111} text={`A tag <small> é usada para indicar que o texto é de menor importância ou tamanho 
    reduzido. Geralmente, ela é usada para notas de rodapé, avisos legais ou informações secundárias.`} />,

    <Title2 key={112} text={`<source> : Fonte de mídia para <audio> e <video>`} />,

    <Parag key={113} text={`A tag <source> é usada em conjunto com as tags <audio> e <video> para fornecer 
    diferentes fontes de mídia, como formatos de áudio ou vídeo diferentes. Isso permite que os navegadores 
    escolham a fonte apropriada com base na capacidade de reprodução do dispositivo.`} />,

    <Title2 key={114} text={`<span> : Span`}/>,

    <Parag key={115} text={`A tag <span> é usada para aplicar estilos ou scripts a uma parte específica do 
    texto, sem afetar o layout ou a estrutura geral da página. Ela é frequentemente usada quando você precisa 
    segmentar um trecho de texto para aplicar estilos ou interações semânticas.`} />, 

    <Title2 key={116} text={`<strong> : Texto forte`} />,

    <Parag key={117} text={`A tag <strong> é usada para destacar o texto como importante ou enfatizado. 
    Geralmente, o texto forte é exibido em negrito para chamar a atenção do leitor.`} />,
    
    <Title2 key={118} text={`<style> : Estilos embutidos`}/>,

    <Parag key={119} text={`A tag <style> é usada para inserir estilos CSS diretamente na página HTML. 
    Isso permite aplicar estilos específicos a elementos individuais.`} />,

    <Title2 key={120} text={`<sub> : Texto subscrito`} />,

    <Parag key={121} text={`A tag <sub> é usada para exibir texto subscrito, que é posicionado ligeiramente 
    abaixo da linha de base. É comumente usado para fórmulas químicas, notações de data e outras situações 
    semelhantes.`} />,

    <Title2 key={122} text={`<summary> : Sumário de <details>`} />,

    <Parag key={123} text={`A tag <summary> é usada em conjunto com a tag <details> para fornecer um título ou 
    sumário para o conteúdo ocultável. Quando o usuário clica no sumário, o conteúdo associado é revelado ou 
    oculto.`} />,

    <Title2 key={124} text={`<sup> : Texto sobrescrito`} />,

    <Parag key={125} text={`A tag <sup> é usada para exibir texto sobrescrito, que é posicionado ligeiramente 
    acima da linha de base. É comumente usado para expoentes, notas de rodapé e outras situações semelhantes.`} />,
    
    <Title2 key={126} text={`<svg> : Gráficos vetoriais escaláveis`}/>,

    <Parag key={127} text={`A tag <svg> é usada para criar gráficos vetoriais escaláveis, que são imagens 
    baseadas em vetores que podem ser dimensionadas sem perda de qualidade. Ela é usada para criar ícones, 
    ilustrações e gráficos complexos.`} />,   

    <Title2 key={128} text={`<table>, <tr>, <td> : Tabelas`}/>,   
   
    <Parag key={129} text={`As tags <table>, <tr> e <td> são usadas para criar tabelas que exibem dados de 
    forma organizada. <table> define a tabela, <tr> cria linhas de tabela e <td> define células de dados 
    individuais.`} />,

    <Title2 key={130} text={`<template> : Modelo de conteúdo`} />,

    <Parag key={131} text={`A tag <template> é usada para conter um fragmento de conteúdo que não é exibido 
    imediatamente quando a página é carregada. Pode ser clonado e inserido no DOM usando JavaScript para 
    criar componentes reutilizáveis ou conteúdo dinâmico.`} />,

    <Title2 key={132} text={`<textarea> : Áreas de texto multilinha`}/>,

    <Parag key={133} text={`A tag <textarea> é usada para criar áreas de texto multilinha, onde os usuários 
    podem inserir grandes quantidades de texto, como comentários ou mensagens.`} />,

    <Title2 key={134} text={`<time> : Representação de data e hora`}/>,

    <Parag key={135} text={`A tag <time> é usada para representar datas e horários em um formato específico. 
    Isso é útil para máquinas e tecnologias assistivas interpretarem e exibirem informações temporais de 
    maneira adequada.`} />, 

    <Title2 key={136} text={`<track> : Trilhas de texto para <video> e <audio>`} />,

    <Parag key={137} text={`A tag <track> é usada em conjunto com as tags <video> e <audio> para fornecer 
    legendas, descrições de áudio ou metadados para arquivos de mídia. Ela permite que o conteúdo de mídia 
    seja acessível e compreensível para um público mais amplo.`} />,

    <Title2 key={138} text={`<tt> : Texto teletipo`} />,

    <Parag key={139} text={`A tag <tt> é usada para exibir texto em uma fonte de estilo teletipo, que é 
    monoespaçada e é usada para representar o formato de texto de máquina de escrever ou código fonte.`} />,
    
    <Title2 key={140} text={`<u> : Texto sublinhado`} />,

    <Parag key={141} text={`A tag <u> é usada para aplicar um sublinhado ao texto. Embora não seja mais 
    comummente usado para indicar hiperlinks (para isso, a tag <a> é preferível), ainda pode ser usado para 
    outros fins de formatação.`} />,

    <Title2 key={142} text={`<ul>, <ol>, <li> : Listas não ordenadas e ordenadas`}/>,   
    
    <Parag key={143} text={`As tags <ul>, <ol> e <li> são usadas para criar listas de itens. <ul> e <ol> 
    representam listas não ordenadas e ordenadas, respectivamente, e <li> define cada item da lista.`} />, 

    <Title2 key={144} text={`<var> : Variáveis`} />,

    <Parag key={145} text={`A tag <var> é usada para indicar que o texto representa uma variável em um 
    contexto de programação ou matemática. Ela é frequentemente usada para destacar variáveis em exemplos 
    ou demonstrações.`} />,

    <Title2 key={146} text={`<wbr> : Quebra opcional de palavra`} />,

    <Parag key={147} text={`A tag <wbr> é usada para indicar um ponto opcional de quebra de linha em um 
    texto. Ela pode ser usada para controlar onde uma palavra pode ser quebrada em linhas múltiplas, 
    ajudando a melhorar a legibilidade.`} />,

    <Title2 key={148} text={`Conclusão`}/>,

    <Parag key={149} text={`Neste extenso guia sobre as tags HTML, exploramos uma variedade de elementos 
    que desempenham papéis fundamentais na criação de páginas web. Cada tag tem sua própria finalidade 
    e uso específico, permitindo que os desenvolvedores estruturem, formem e apresentem conteúdo de 
    maneira eficaz e acessível.`} />,       

    <Parag key={150} text={`Ao compreender e dominar essas tags, você estará bem equipado para criar 
    páginas web ricas em conteúdo, visualmente atraentes e interativas. Lembre-se de que a prática 
    constante, a experimentação e a busca por melhores práticas de desenvolvimento web são essenciais 
    para aprimorar suas habilidades e criar experiências excepcionais para os usuários.`} />,

    <Parag key={151} text={`À medida que a web continua a evoluir, novas tags e recursos podem ser 
    introduzidos. Portanto, fique atualizado com as últimas tendências e tecnologias para continuar 
    aprimorando suas habilidades como desenvolvedor web. Com uma base sólida em tags HTML e uma 
    mentalidade de aprendizado contínuo, você estará pronto para enfrentar os desafios emocionantes 
    do desenvolvimento web moderno.`} /> 
]



export default function Blog_uma_jornada_pelas_tags_html() {
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
