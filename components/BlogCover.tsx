import style from "../src/styles/blogCover.module.css"

const BlogCover = () => {
    return (
        <>
            <div className={style.block}></div>
            <div className={style.divMaster}>
                <h1 className={style.blogTitle}>
                    BLOG
                </h1>
                <h2 className={style.blogComplement}>
                    Fique por dentro do mundo da tecnologia
                </h2>
            </div>
        </>
    )
}

export default BlogCover
