import styles from "./CloseButton.module.css";
import {Link} from "react-router-dom";


export default function CloseButton({buttonStyle}) {
    return (<Link to={'/'}>
        <button className={buttonStyle === 'phoneEnterPageCloseButton' ? `${styles.closeButton} ${styles.phoneEnterPageCloseButton}` : `${styles.closeButton} ${styles.finalInfoPageCloseButton}`}>
            <div className={styles.closeButtonContent}></div>
        </button>
    </Link>);
}