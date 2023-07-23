import { useState } from "react";

export default function SvgIconMenu() {
    const [fill, setFill] = useState('#ffffff');

    const handleMouseOver = () => {
        setFill('#999999');
    };

    const handleMouseOut = () => {
        setFill('#ffffff');
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
                                d={`M56,48c2.209,0 4,1.791 4,4c0,2.209 -1.791,4 -4,
                                4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,
                                -2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0zM56,32c2.209,
                                0 4,1.791 4,4c0,2.209 -1.791,4 -4,4c-1.202,0 -38.798,0 -40,
                                0c-2.209,0 -4,-1.791 -4,-4c0,-2.209 1.791,-4 4,-4c1.202,
                                0 38.798,0 40,0zM56,16c2.209,0 4,1.791 4,4c0,2.209 -1.791,
                                4 -4,4c-1.202,0 -38.798,0 -40,0c-2.209,0 -4,-1.791 -4,-4c0,
                                -2.209 1.791,-4 4,-4c1.202,0 38.798,0 40,0z`}>
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
        </>
    );
}
