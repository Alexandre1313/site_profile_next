import Link from "next/link";
import { useState } from "react";

export default function SvgIconFacebook() {
    const [fill, setFill] = useState('#ffffff');

    const handleMouseOver = () => {
        setFill('#16a34a');
    };

    const handleMouseOut = () => {
        setFill('#ffffff');
    };

    return (
        <>
            <Link legacyBehavior href={"https://www.facebook.com/alexandre.cordeiro.714"}>
                <a target={`_blank`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                        width="30px"
                        height="30px"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>
                        <g
                            fill={fill}
                        >
                            <g transform="scale(5.12,5.12)">
                                <path
                                    d={`M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,
                                5 5,5h16.83203c0.10799,0.01785 0.21818,0.01785 0.32617,
                                0h5.67383c0.10799,0.01785 0.21818,0.01785 0.32617,
                                0h8.8418c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,
                                -5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,
                                3 -3,3h-8v-14h3.82031l1.40039,-7h-5.2207v-2c0,-0.55749 0.05305,
                                -0.60107 0.24023,-0.72266c0.18718,-0.12159 0.76559,
                                -0.27734 1.75977,-0.27734h3v-5.63086l-0.57031,-0.27149c0,
                                0 -2.29704,-1.09766 -5.42969,-1.09766c-2.25,0 -4.09841,
                                0.89645 -5.28125,2.375c-1.18284,1.47855 -1.71875,
                                3.45833 -1.71875,5.625v2h-3v7h3v14h-16c-1.66848,0 -3,
                                -1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM32,
                                15c2.07906,0 3.38736,0.45846 4,0.70117v2.29883h-1c-1.15082,
                                0 -2.07304,0.0952 -2.84961,0.59961c-0.77656,0.50441 -1.15039,
                                1.46188 -1.15039,2.40039v4h4.7793l-0.59961,
                                3h-4.17969v16h-4v-16h-3v-3h3v-4c0,-1.83333 0.46409,
                                -3.35355 1.28125,-4.375c0.81716,-1.02145 1.96875,-1.625 3.71875,-1.625z`}>
                                </path>
                            </g>
                        </g>
                    </svg>
                </a>
            </Link>
        </>
    );
}
