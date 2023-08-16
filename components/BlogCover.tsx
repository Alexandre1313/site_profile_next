import { Suspense } from "react";
import style from "../src/styles/blogCover.module.css";
import AnimatedTitleH1Blog from "./AnimatedTitleH1Blog";
import AnimatedTitleH2Blog from "./AnimatedTitleH2Blog";

const BlogCover = () => {
  return (
    <>
      <div className={style.divMaster}>
        <Suspense fallback={<h1>Carregando...</h1>}>
          <AnimatedTitleH1Blog text={`BLOG`} />
          <AnimatedTitleH2Blog text={`Fique por dentro do mundo da tecnologia`}/>
        </Suspense>
      </div>
    </>
  );
};

export default BlogCover;
