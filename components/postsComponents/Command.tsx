import styles from "../../src/styles/command.module.css";

interface CommandProps {
  colorBg: string;

  stepOneOne: string;
  stepOneTwo?: string;
  stepOneThree?: string;
  stepOneFour?: string;

  paragColorClassOne: string;
  paragColorClassTwo?: string;
  paragColorClassThree?: string;
  paragColorClassFour?: string;

  stepTwoOne?: string;
  stepTwoTwo?: string;
  stepTwoThree?: string;
  stepTwoFour?: string;

  paragColorClassTwoOne?: string;
  paragColorClassTwoTwo?: string;
  paragColorClassTwoThree?: string;  
  paragColorClassTwoFour?: string; 

  stepThreeOne?: string;
  stepThreeTwo?: string;
  stepThreeThree?: string;

  paragColorClassThreeOne?: string;
  paragColorClassThreeTwo?: string;
  paragColorClassThreeThree?: string; 

  stepFourOne?: string;
  stepFourTwo?: string;
  stepFourThree?: string;

  paragColorClassFourOne?: string;
  paragColorClassFourTwo?: string;
  paragColorClassFourThree?: string; 

}

const Command = (props: CommandProps) => {
  return (
    <div className={styles[props.colorBg]}>
        <div className={styles.divParagrafhis}>
            <div className={styles[props.paragColorClassOne]}>
                <p>{props.stepOneOne}</p>
            </div>
            <div className={props.stepOneTwo ? (props.paragColorClassTwo ? styles[props.paragColorClassTwo] : '') : styles.paragOcul}>
                <p>{props.stepOneTwo}</p>
            </div>
            <div className={props.stepOneThree ? (props.paragColorClassThree ? styles[props.paragColorClassThree] : '') : styles.paragOcul}>
                <p>{props.stepOneThree}</p>
            </div>
            <div className={props.stepOneFour ? (props.paragColorClassFour ? styles[props.paragColorClassFour] : '') : styles.paragOcul}>
                <p>{props.stepOneFour}</p>
            </div>
        </div>

        <div className={props.stepTwoOne ? styles.divParagrafhis : styles.paragOcul}>
            <div className={props.stepTwoOne ? (props.paragColorClassTwoOne ? styles[props.paragColorClassTwoOne] : '') : styles.paragOcul}>
                <p>{props.stepTwoOne}</p>
            </div>
            <div className={props.stepTwoTwo ? (props.paragColorClassTwoTwo ? styles[props.paragColorClassTwoTwo] : '') : styles.paragOcul}>
                <p>{props.stepTwoTwo}</p>
            </div>
            <div className={props.stepTwoThree ? (props.paragColorClassTwoThree ? styles[props.paragColorClassTwoThree] : '') : styles.paragOcul}>
                <p>{props.stepTwoThree}</p>
            </div>
            <div className={props.stepTwoFour ? (props.paragColorClassTwoFour ? styles[props.paragColorClassTwoFour] : '') : styles.paragOcul}>
                <p>{props.stepTwoFour}</p>
            </div>
        </div> 

         <div className={props.stepThreeOne ? styles.divParagrafhis : styles.paragOcul}>
            <div className={props.stepThreeOne ? (props.paragColorClassThreeOne ? styles[props.paragColorClassThreeOne] : '') : styles.paragOcul}>
                <p>{props.stepThreeOne}</p>
            </div>
            <div className={props.stepThreeTwo ? (props.paragColorClassThreeTwo ? styles[props.paragColorClassThreeTwo] : '') : styles.paragOcul}>
                <p>{props.stepThreeTwo}</p>
            </div>
            <div className={props.stepThreeThree ? (props.paragColorClassThreeThree ? styles[props.paragColorClassThreeThree] : '') : styles.paragOcul}>
                <p>{props.stepThreeThree}</p>
            </div>
        </div> 

        <div className={props.stepFourOne ? styles.divParagrafhis : styles.paragOcul}>
            <div className={props.stepFourOne ? (props.paragColorClassFourOne ? styles[props.paragColorClassFourOne] : '') : styles.paragOcul}>
                <p>{props.stepFourOne}</p>
            </div>
            <div className={props.stepFourTwo ? (props.paragColorClassFourTwo ? styles[props.paragColorClassFourTwo] : '') : styles.paragOcul}>
                <p>{props.stepFourTwo}</p>
            </div>
            <div className={props.stepFourThree ? (props.paragColorClassFourThree ? styles[props.paragColorClassFourThree] : '') : styles.paragOcul}>
                <p>{props.stepFourThree}</p>
            </div>
        </div> 

    </div>
  );
};

export default Command;
