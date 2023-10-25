import styles from "./ConfirmButton.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";

export default function ConfirmButton({isDisabled}) {
    const {activeKey} = useSelector((state) => state.keyboard);
    const ref = useRef(null);
    useEffect(() => {
        if(ref.current) {
            if (activeKey === 'ConfirmButton') {
                ref.current.focus();
            } else ref.current.blur();
        }
    }, [activeKey]);

    return  (
        <Link to={'/final-info'}><button className={isDisabled ? `${styles.confirmButton}` : `${styles.confirmButton} ${styles.active}`}
                                          ref={ref}
                                          disabled={isDisabled}>
            Подтвердить номер</button></Link>
    );
}