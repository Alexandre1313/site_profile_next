import style from "../../src/styles/postSingle.module.css"
import React, { ReactNode } from 'react';

export interface PostSingleProps {
    divOneContent?: ReactNode[]
    divTwoContent?: ReactNode[]
}

const PostSingle: React.FC<PostSingleProps> = ({ divOneContent, divTwoContent }) => {
    return (
        <>
          <div className={style.divImage}>
            {divOneContent && divOneContent.map((component, index) => (
              <React.Fragment key={index}>{component}</React.Fragment>
            ))}
          </div>
          <div className={style.divContentText}>
            {divTwoContent && divTwoContent.map((component, index) => (
              <React.Fragment key={index}>{component}</React.Fragment>
            ))}
          </div>
        </>
      );
  }

export default PostSingle
