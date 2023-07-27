import Image from "next/image";
import { useState } from "react";
import styles from "../src/styles/videoComponent.module.css";
import build from "next/dist/build";

export interface VideoComponentProps {
    urlVideo: string;
    titleVideo: string;
    videoWidth?: string;
    videoHeight?: string;
    videoAllow?: string;
}

const VideoComponent = (props: VideoComponentProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
        setVideoEnded(false);
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setVideoEnded(true);
    };

    return (
        <div className={styles.divVideo}>
            <h2 className={styles.titleVideo}>{props.titleVideo}</h2>
            <div className={styles.overlay}>
                {!isPlaying && !videoEnded && (
                    <div className={styles.overlayBefore}>
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
                )}
                {isPlaying && (                    
                    <iframe
                        className={styles.iframeVideo}
                        width={props.videoWidth}
                        height={props.videoHeight}
                        src={props.urlVideo}
                        allow={props.videoAllow}
                        allowFullScreen
                        onEnded={handleVideoEnd}
                    ></iframe>                  
                )}
            </div>
        </div>
    );
};

export default VideoComponent;
