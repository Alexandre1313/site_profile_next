import Image from "next/image";
import { useState } from "react";
import styles from "../src/styles/videoComponent.module.css";

export interface VideoComponentProps {
    urlVideo: string;
    titleVideo: string;
    videoWidth?: string;
    videoHeight?: string;
    videoAllow?: string;
}

const VideoComponent = (props: VideoComponentProps) => {
    const [isPlaying, setIsPlaying] = useState(false);    

    const handlePlayButtonClick = () => {
        setIsPlaying(true);        
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);        
    };

    return (
        <div className={styles.divVideo}>
            <h2 className={styles.titleVideo}>{props.titleVideo}</h2>
            <div className={styles.overlay}>                                
                    <div className={`${!isPlaying ? styles.overlayBefore
                        : styles.hiddenn}`}>
                        <button className={styles.btn} onClick={handlePlayButtonClick}
                        onTouchStart={handlePlayButtonClick} onTouchEnd={handleVideoEnd}
                        onTouchStartCapture={handlePlayButtonClick}
                        onTouchEndCapture={handleVideoEnd}>
                            <Image
                                src={`/images/play_green.png`}
                                alt={`Ícone de player`}
                                width={70}
                                height={70}
                                priority={true}
                            />
                        </button>
                    </div>                                   
                    <iframe
                        className={styles.iframeVideo}
                        width={props.videoWidth}
                        height={props.videoHeight}
                        src={props.urlVideo}
                        allow={props.videoAllow}
                        allowFullScreen                        
                    ></iframe>                 
            </div>
        </div>
    );
};

export default VideoComponent;
