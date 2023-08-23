import style from "../../src/styles/postGrid.module.css"
import React from 'react';

interface PostGrid{
    children: React.ReactNode;
}

const PostGrid: React.FC<PostGrid> = ({ children }) => {
    return (
        <div className={style.divGridOne}>
            <div className={style.divGridTwo}>
                {children}
            </div>
        </div>
    )    
};

export default PostGrid
