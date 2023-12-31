import Link from "next/link";
import { useState } from "react";

export default function SvgIconInstagram() {
    const [fill, setFill] = useState('#ffffff');

    const handleMouseOver = () => {
        setFill('#16a34a');
    };

    const handleMouseOut = () => {
        setFill('#ffffff');
    };

    return (
        <>
            <Link legacyBehavior href={"https://www.instagram.com/alexandre.13a"}>
                <a target={`_blank`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                        width="30px"
                        height="30px"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <g
                            fill={fill}
                        >
                            <g transform="scale(5.12,5.12)">
                                <path
                                    d={`M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,
                                13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,
                                -13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,
                                11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,
                                -11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,
                                0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,
                                4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,
                                -11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,
                                4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,
                                -9 9,-9z`}>
                                </path>
                            </g>
                        </g>
                    </svg>
                </a>
            </Link>
        </>
    );
}
