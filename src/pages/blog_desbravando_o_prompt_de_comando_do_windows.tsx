import React, { ReactNode } from 'react';
import PostGrid from "../../components/postsComponents/PostGrid";
import PostSingle from "../../components/postsComponents/PostSingle";
import Title1 from '../../components/postsComponents/Title1';
import Parag from '../../components/postsComponents/Parag';
import Imag from '../../components/postsComponents/Imag';
import Title2 from '../../components/postsComponents/Title2';
import ImagePostFull from '../../components/postsComponents/ImagePostFull';
import Command from '../../components/postsComponents/Command';
import { color } from 'framer-motion';



const arrayDivImage: ReactNode[] = [
    <Imag key={0} urlImage={`/images/pronpt_450.png`} />
]

const arraydivText: ReactNode[] = [
    <Title1 key={1} text={`Desbravando o prompt de comando do windows`} />,

    <Title2 key={2} text={`Principais comandos e dicas essenciais`}/>,

    <Parag key={3} text={`O Prompt de Comando do Windows é uma ferramenta poderosa que permite interagir 
    diretamente com o sistema operacional por meio de linhas de comando. Embora possa parecer intimidante 
    à primeira vista, dominar alguns comandos essenciais pode ser incrivelmente útil para tarefas de 
    manutenção, automação e solução de problemas. Neste post, exploraremos os principais comandos do 
    Prompt de Comando do Windows e ofereceremos dicas para utilizá-los com confiança.`} />,

    <Title2 key={4} text={`1 - dir : Navegação e listagem de arquivos`}/>,

    <Parag key={5} text={`O comando dir é usado para listar os arquivos e pastas no diretório atual. Você 
    pode adicionar opções como /w para exibir os resultados em colunas ou /p para exibir um 
    resultado por vez.`} />, 

    <Parag key={6} text={`Exemplo:`}/>,

    <Command key={7}
        colorBg={`blackC`}
        stepOneOne={`dir`} 
        paragColorClassOne={`whiteP`} 
        stepOneTwo={`/w`}
        paragColorClassTwo={`orangeP`}
    />,    

    <Title2 key={8} text={`2 - cd : Navegação entre diretórios`}/>,    

    <Parag key={9} text={`O comando cd permite navegar entre diretórios. Use cd nome_do_diretório 
    para entrar em um diretório e cd .. para voltar ao diretório pai.`} />,

    <Parag key={10} text={`Exemplo:`}/>,

    <Command key={11}
        colorBg={`blackC`}
        stepOneOne={`cd`} 
        paragColorClassOne={`orangeP`} 
        stepOneTwo={`C: \\Users`}
        paragColorClassTwo={`whiteP`}
    />,    

    <Title2 key={12} text={`3 - mkdir e rmdir : Criação e remoção de diretórios`}/>, 

    <Parag key={13} text={`Com o comando mkdir, você cria um novo diretório. Já o comando 
    rmdir é usado para remover um diretório vazio.`} />, 
    
    <Parag key={14} text={`Exemplo:`}/>,    

    <Command key={15}
        colorBg={`blackC`}
        stepOneOne={`mkdir MeuDiretorio`} 
        paragColorClassOne={`whiteP`} 
        stepTwoOne={`rmdir MeuDiretorio`}
        paragColorClassTwoOne={`whiteP`}
    />,    

    <Title2 key={16} text={`4 - copy e move : Copiar e mover arquivos`}/>,

    <Parag key={17} text={`O comando copy copia arquivos de um local para outro, enquanto o comando 
    move move arquivos.`} />, 
    
    <Parag key={18} text={`Exemplo:`}/>,

    <Command key={19}
        colorBg={`blackC`}
        stepOneOne={`copy`} 
        paragColorClassOne={`roseP`} 
        stepOneTwo={`arquivo.txt`}
        paragColorClassTwo={`greemP`}
        stepOneThree={`C:\\Destino`}
        paragColorClassThree={`whiteP`}        
        stepTwoOne={`move`} 
        paragColorClassTwoOne={`roseP`} 
        stepTwoTwo={`arquivo.txt`}
        paragColorClassTwoTwo={`greemP`}
        stepTwoThree={`C:\\Destino`}
        paragColorClassTwoThree={`whiteP`}
    />,   

    <Title2 key={20} text={`5 - del e ren : Excluir e renomear arquivos`}/>,

    <Parag key={21} text={`Use o comando del para excluir arquivos e ren para renomeá-los.`} />,

    <Parag key={22} text={`Exemplo:`}/>,    

    <Command key={23}
        colorBg={`blackC`}
        stepOneOne={`del`} 
        paragColorClassOne={`greemP`} 
        stepOneTwo={`arquivo.txt`}
        paragColorClassTwo={`roseP`}               
        stepTwoOne={`ren`} 
        paragColorClassTwoOne={`greemP`} 
        stepTwoTwo={`arquivo_antigo.txt`}
        paragColorClassTwoTwo={`roseP`}
        stepTwoThree={`arquivo_novo.txt`}
        paragColorClassTwoThree={`whiteP`}
    />,   

    <Title2 key={24} text={`6 - ipconfig : Informações de rede`}/>,

    <Parag key={25} text={`O comando ipconfig exibe informações sobre a configuração de rede, 
    como endereço IP, máscara de sub-rede e gateway padrão.`} />, 
    
    <Parag key={26} text={`Exemplo:`}/>,     

    <Command key={27}
        colorBg={`blackC`}
        stepOneOne={`ipconfig`} 
        paragColorClassOne={`whiteP`}         
    />,
    
    <Title2 key={28} text={`7 - tasklist e taskkill : Gerenciamento de processos`}/>,

    <Parag key={29} text={`O comando tasklist lista os processos em execução e o comando taskkill 
    é usado para encerrar processos.`} />, 
    
    <Parag key={30} text={`Exemplo:`}/>,    
    
    <Command key={31}
        colorBg={`blackC`}
        stepOneOne={`tasklist`} 
        paragColorClassOne={`whiteP`}                       
        stepTwoOne={`taskkill`} 
        paragColorClassTwoOne={`whiteP`} 
        stepTwoTwo={`/IM`}
        paragColorClassTwoTwo={`whiteP`}
        stepTwoThree={`nome_do_processo.exe`}
        paragColorClassTwoThree={`whiteP`}
        stepTwoFour={`/F`}
        paragColorClassTwoFour={`orangeP`}
    />,  

    <Title2 key={32} text={`8 - echo : Exibindo mensagens na tela`}/>,

    <Parag key={33} text={`O comando echo exibe mensagens na tela. Isso pode ser útil para mostrar 
    informações ou criar scripts simples.`} />, 
    
    <Parag key={34} text={`Exemplo:`}/>,     
    
    <Command key={35}
        colorBg={`blackC`}
        stepOneOne={`echo`} 
        paragColorClassOne={`orangeP`}                       
        stepOneTwo={`Olá, mundo!`} 
        paragColorClassTwo={`whiteP`}         
    />,  

    <Title2 key={36} text={`9 - ping : Testando a conectividade de rede`}/>,

    <Parag key={37} text={`O comando ping é usado para verificar a conectividade com um 
    servidor ou dispositivo de rede, bem como para medir o tempo de resposta.`} />, 
    
    <Parag key={38} text={`Exemplo:`}/>,     

    <Command key={39}
        colorBg={`blackC`}
        stepOneOne={`ping`} 
        paragColorClassOne={`orangeP`}                       
        stepOneTwo={`www.exemple.com`} 
        paragColorClassTwo={`whiteP`}         
    />, 

    <Title2 key={40} text={`10 - systeminfo : Informações do sistema`}/>,

    <Parag key={41} text={`O comando systeminfo exibe informações detalhadas sobre o hardware 
    e o software do seu sistema.`} />, 
    
    <Parag key={42} text={`Exemplo:`}/>,     
    
    <Command key={43}
        colorBg={`blueC`}
        stepOneOne={`systeminfo`} 
        paragColorClassOne={`whiteP`}               
    />, 

    <Title2 key={44} text={`11 - chkdsk : Verificação de Disco`}/>,

    <Parag key={45} text={`O comando chkdsk verifica a integridade do sistema de arquivos em um disco 
    e pode corrigir erros encontrados.`} />, 
    
    <Parag key={46} text={`Exemplo:`}/>,     

    <Command key={47}
        colorBg={`blueC`}
        stepOneOne={`chkdsk`} 
        paragColorClassOne={`orangeP`}                       
        stepOneTwo={`C:`} 
        paragColorClassTwo={`whiteP`}  
        stepOneThree={`/f`}  
        paragColorClassThree={`greemP`}  
    />, 

    <Title2 key={48} text={`12 - sfc : Verificação de Arquivos do Sistema`}/>,

    <Parag key={49} text={`O comando sfc verifica e repara arquivos do sistema corrompidos ou ausentes.`} />, 
    
    <Parag key={50} text={`Exemplo:`}/>,    

    <Command key={51}
        colorBg={`blueC`}
        stepOneOne={`sfc`} 
        paragColorClassOne={`orangeP`}                       
        stepOneTwo={`/scannow`} 
        paragColorClassTwo={`whiteP`}           
    />, 

    <Title2 key={52} text={`13 - assoc e ftype : Associação de arquivos`}/>,

    <Parag key={53} text={`O comando assoc mostra as associações de tipo de arquivo, e 
    o comando ftype exibe as ações associadas a esses tipos.`} />,    

    <Parag key={54} text={`Exemplo:`}/>,     

    <Command key={55}
        colorBg={`blueC`}
        stepOneOne={`assoc`} 
        paragColorClassOne={`whiteP`} 
        stepOneTwo={`.txt`}  
        paragColorClassTwo={`whiteP`}                   
        stepTwoOne={`ftype`} 
        paragColorClassTwoOne={`greemP`} 
        stepTwoTwo={`txtfile`}
        paragColorClassTwoTwo={`whiteP`}        
    />,      

    <Title2 key={56} text={`14 - cipher : Criptografia de dados`}/>,

    <Parag key={57} text={`O comando cipher é usado para criptografar e descriptografar arquivos e pastas.`} />, 
    
    <Parag key={58} text={`Exemplo:`}/>,     

    <Command key={59}
        colorBg={`blueC`}
        stepOneOne={`cipher`} 
        paragColorClassOne={`whiteP`} 
        stepOneTwo={`/e`}  
        paragColorClassTwo={`whiteP`}                   
        stepOneThree={`/s:C:\\PastaConfidencial`} 
        paragColorClassThree={`whiteP`} 
        stepTwoTwo={`txtfile`}
        paragColorClassTwoTwo={`whiteP`}        
    />,

    <Title2 key={60} text={`15 - format : Formatação de unidades de armazenamento`}/>,

    <Parag key={61} text={`O comando format permite formatar unidades de armazenamento, como discos 
    rígidos e pen drives.`} />, 
    
    <Parag key={62} text={`Exemplo:`}/>,     

    <Command key={63}
        colorBg={`blackC`}
        stepOneOne={`format`} 
        paragColorClassOne={`whiteP`} 
        stepOneTwo={`E:`}  
        paragColorClassTwo={`roseP`}                   
        stepOneThree={`/FS:NTFS /Q`} 
        paragColorClassThree={`greemP`}               
    />,

    <Title2 key={64} text={`16 - md e rd : Criando e removendo pastas`}/>,

    <Parag key={65} text={`Com o comando md, é possível criar novas pastas, enquanto o comando rd é 
    usado para remover pastas.`} />, 
    
    <Parag key={66} text={`Exemplo:`}/>,     

    <Command key={67}
        colorBg={`blueC`}
        stepOneOne={`md`} 
        paragColorClassOne={`greemP`} 
        stepOneTwo={`NovaPasta`}  
        paragColorClassTwo={`whiteP`}                   
        stepTwoOne={`rd`} 
        paragColorClassTwoOne={`greemP`}  
        stepTwoTwo={`PastaParaRemover`} 
        paragColorClassTwoTwo={`whiteP`}             
    />,

    <Title2 key={68} text={`17 - del e erase : Excluindo arquivos`}/>,

    <Parag key={69} text={`Juntamente com o já conhecido del, você também pode usar o comando erase 
    para excluir arquivos.`} />, 
    
    <Parag key={70} text={`Exemplo:`}/>,    

    <Command key={71}
        colorBg={`blueC`}
        stepOneOne={`del`} 
        paragColorClassOne={`greemP`} 
        stepOneTwo={`arquivo.txt`}  
        paragColorClassTwo={`whiteP`}                   
        stepTwoOne={`erase`} 
        paragColorClassTwoOne={`greemP`}  
        stepTwoTwo={`documento.doc`} 
        paragColorClassTwoTwo={`whiteP`}             
    />,

    <Title2 key={72} text={`18 - copy con : Criando arquivos de texto rapidamente`}/>,

    <Parag key={73} text={`O comando copy con permite criar rapidamente arquivos de texto diretamente 
    no Prompt de Comando.`} />, 
    
    <Parag key={74} text={`Exemplo:`}/>,    

    <Command key={75}
        colorBg={`blueC`}
        stepOneOne={`copy`} 
        paragColorClassOne={`orangeP`} 
        stepOneTwo={`con`}  
        paragColorClassTwo={`whiteP`}  
        stepOneThree={`meu_arquivo.txt`}  
        paragColorClassThree={`whiteP`}                   
        stepTwoOne={`Digite seu texto aqui.`} 
        paragColorClassTwoOne={`whiteP`}  
        stepTwoTwo={`Pressione Ctrl+Z para finalizar.`} 
        paragColorClassTwoTwo={`whiteP`}             
    />,

    <Title2 key={76} text={`19 - type : Exibindo conteúdo de arquivos`}/>,

    <Parag key={77} text={`Com o comando type, você pode exibir o conteúdo de um arquivo de 
    texto diretamente no Prompt de Comando.`} />, 
    
    <Parag key={78} text={`Exemplo:`}/>,    

    <Command key={79}
        colorBg={`blueC`}
        stepOneOne={`type`} 
        paragColorClassOne={`orangeP`} 
        stepOneTwo={`arquivo.txt`}  
        paragColorClassTwo={`whiteP`}                      
    />,

    <Title2 key={80} text={`20 - xcopy : Cópia avançada de arquivos e pastas`}/>,

    <Parag key={81} text={`O comando xcopy permite copiar arquivos e pastas de maneira mais avançada, 
    com opções como cópia recursiva e preservação de atributos.`} />, 
    
    <Parag key={82} text={`Exemplo:`}/>,    

    <Command key={83}
        colorBg={`blackC`}
        stepOneOne={`xcopy`} 
        paragColorClassOne={`roseP`} 
        stepOneTwo={`origem`}  
        paragColorClassTwo={`roseP`}  
        stepOneThree={`destino`}  
        paragColorClassThree={`roseP`}                   
        stepOneFour={`/E /H`} 
        paragColorClassFour={`orangeP`}                     
    />,

    <Title2 key={84} text={`21 - ren : Renomeando arquivos ou pastas`}/>,

    <Parag key={85} text={`Além de renomear arquivos (como já vimos), o comando ren também pode 
    ser usado para renomear pastas.`} />, 
    
    <Parag key={86} text={`Exemplo:`}/>,    

    <Command key={87}
        colorBg={`blueC`}
        stepOneOne={`ren`} 
        paragColorClassOne={`greemP`} 
        stepOneTwo={`antiga_pasta`}  
        paragColorClassTwo={`whiteP`}  
        stepOneThree={`nova_pasta`}  
        paragColorClassThree={`whiteP`}                            
    />,

    <Title2 key={88} text={`22 - attrib : Alterando atributos de arquivos`}/>,

    <Parag key={89} text={`O comando attrib é usado para visualizar e alterar os atributos de arquivos, 
    como oculto e somente leitura.`} />, 
    
    <Parag key={90} text={`Exemplo:`}/>,

    <Command key={91}
        colorBg={`blueC`}
        stepOneOne={`attrib`} 
        paragColorClassOne={`greemP`} 
        stepOneTwo={`+h`}  
        paragColorClassTwo={`whiteP`}  
        stepOneThree={`arquivo.txt`}  
        paragColorClassThree={`whiteP`} 
        stepTwoOne={`attrib`} 
        paragColorClassTwoOne={`greemP`} 
        stepTwoTwo={`-r`}  
        paragColorClassTwoTwo={`whiteP`}  
        stepTwoThree={`arquivo.txt`}  
        paragColorClassTwoThree={`whiteP`}                             
    />,

    <Title2 key={92} text={`23 - shutdown : Desligando ou reiniciando o computador`}/>,

    <Parag key={93} text={`O comando shutdown permite desligar ou reiniciar o computador 
    com opções específicas.`} />, 
    
    <Parag key={94} text={`Exemplo:`}/>,     

    <Command key={95}
        colorBg={`blueC`}
        stepOneOne={`shutdown`} 
        paragColorClassOne={`greemP`} 
        stepOneTwo={`/s`}  
        paragColorClassTwo={`whiteP`}  
        stepOneThree={`/f`}  
        paragColorClassThree={`whiteP`} 
        stepOneFour={`/t 0`}
        paragColorClassFour={`whiteP`}                           
    />,

    <Title2 key={96} text={`E vamos ficando por aqui`}/>,

    <Parag key={97} text={`Lembre-se de que a prática constante é essencial para dominar esses comandos. 
    Quanto mais você experimenta e se familiariza com as diversas opções, mais eficaz se torna no uso 
    do Prompt de Comando. O conhecimento desses comandos pode ser um verdadeiro trunfo para otimizar 
    tarefas e aprimorar sua experiência com o Windows. Continue explorando, experimentando e aprimorando 
    suas habilidades de linha de comando!`}/>,
]



export default function Blog_desbravando_o_prompt_de_comando_do_windows() {
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
