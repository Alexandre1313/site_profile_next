import styles from "../src/styles/homeGridWithBackgroundImage.module.css"
import VideoComponent from "./VideoComponent"

const HomeGridWithBackgroundImage = () => {
    return (
        <>
            <div className={styles.divMaster}>
                <VideoComponent
                    titleVideo={`Por que usar Next JS?`}
                    urlVideo={`https://www.youtube.com/embed/TzufYnZUmz4`}                    
                    videoAllow={`accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`}
                    videoHeight={`315`}
                    videoWidth={`560`}                    
                />
            </div>
        </>
    )
}

export default HomeGridWithBackgroundImage
