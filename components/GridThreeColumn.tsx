import style from "../src/styles/GridThreeColumn.module.css"
import React from 'react';

interface GridThreeColumn {
    children: React.ReactNode;
}

const GridThreeColumn: React.FC<GridThreeColumn> = ({ children }) => {
    return  <div className={style.divGridOne}>
        <div className={style.divGridTwo}>
            {children}
        </div>
    </div>;    
};

export default GridThreeColumn
