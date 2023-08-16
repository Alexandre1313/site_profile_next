import Image from "next/image";
import styles from "../../src/styles/imagePostFull.module.css";

interface ImagePostFullProps {
  urlImage: string;
}

const ImagePostFull = (props: ImagePostFullProps) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.customImage}
        src={props.urlImage}
        alt={`Image Post`}  
        width={500}  
        height={500}    
        priority={true}
      />
    </div>
  );
};

export default ImagePostFull;
