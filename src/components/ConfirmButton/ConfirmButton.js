import styles from "./ConfirmButton.module.css";
import {Link} from "react-router-dom";


export default function ConfirmButton({isDisabled}) {
    return  (
        <Link to={'/final-info'} ><button className={isDisabled ? `${styles.confirmButton}` : `${styles.confirmButton} ${styles.active}`}
                                          disabled={isDisabled}>
            Подтвердить номер</button></Link>
    );
}