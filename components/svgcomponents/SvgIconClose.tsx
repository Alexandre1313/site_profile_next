import { useState } from "react";

export default function SvgIconClose() {
    const [fill, setFill] = useState('#15803d');    

    const handleMouseOver = () => {
        setFill('#dc2626');
    };

    const handleMouseOut = () => {
        setFill('#15803d');
    };

    return (
        <>
            <button className={''}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"                    
                    viewBox="0,0,256,256"
                    width="30px"
                    height="39px"                    
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <g
                        fill={fill}                                              
                    >
                        <g transform="scale(5.12,5.12)">
                            <path
                                d={`M51.092,15.737l-2.829,-2.829l-16.263,16.264l-16.263,
                                -16.264l-2.829,2.829l16.264,16.263l-16.264,16.263l2.829,
                                2.829l16.263,-16.264l16.263,16.264l2.829,-2.829l-16.264,-16.263z`}>
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
        </>
    );
}
