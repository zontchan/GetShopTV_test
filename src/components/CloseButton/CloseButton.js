import styles from "./CloseButton.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";

export default function CloseButton({buttonStyle}) {
    const {activeKey} = useSelector((state) => state.phoneForm);
    let ref = useRef(null);
    useEffect(() => {
        if(ref.current) {
            if (activeKey === 'CloseButton') {
                ref.current.focus();
            } else ref.current.blur();
        }
    }, [activeKey]);

    return (<Link to={'/'}>
        <button  ref={ref} className={buttonStyle === 'phoneEnterPageCloseButton' ? `${styles.closeButton} ${styles.phoneEnterPageCloseButton}` : `${styles.closeButton} ${styles.finalInfoPageCloseButton}`}>
            <div className={styles.closeButtonContent}></div>
        </button>
    </Link>);
}