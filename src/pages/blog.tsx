import BlogCover from "../../components/BlogCover";
import GridThreeColumn from "../../components/GridThreeColumn";
import ImageTitleParagrafy from "../../components/ImageTitleParagrafy";

export default function Blog() {
    return (
        <>            
            <BlogCover />
            <GridThreeColumn>
                <ImageTitleParagrafy
                    urlImage={`/images/ja_pensou_como_surgiu_a_internet250.jpg`}
                    priorityImage={false}
                    urlpost={`/blog_ja_pensou_como_surgiu_a_internet`}
                    titleComponent={`Já pensou como surgiu a Internet?`}
                    paragrafyComponent={`A internet é uma das inovações mais impactantes da
                    história moderna. Desde seu surgimento, ela revolucionou a forma como nos 
                    comunicamos, compartilhamos informações e realizamos negócios.
                    Neste texto, vamos explorar`}
                />
                <ImageTitleParagrafy
                    urlImage={`/images/java_script_vs_json250.jpg`}
                    priorityImage={false}
                    urlpost={`/blog_java_script_objeto_vs_json`}
                    titleComponent={`Java Script - Objeto vs JSON`}
                    paragrafyComponent={`Sabemos que o formato Json hoje é amplamente utilizado
                    para a interoperabilidade dos sitemas, por ser este um formato simples e
                    compatível com a maioria das tecnologias`}
                />
                <ImageTitleParagrafy
                    urlImage={`/images/historia_da_linguagem_java_script250.png`}
                    priorityImage={false}
                    urlpost={`/blog_historia_da_linguagem_java_script`}
                    titleComponent={`História da linguagem Java Script`}
                    paragrafyComponent={`JavaScript é uma linguagem de programação popular,
                    conhecida por sua versatilidade e ampla aplicação na web. Sua história
                    remonta aos primórdios da internet e está intrinsecamente ligada ao 
                    desenvolvimento da web moderna.`}
                />                
            </GridThreeColumn>           
        </>
    )
}
