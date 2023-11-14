import styles from "./AgreementCheckbox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setIsChecked} from "../../reducers/phoneFormReducer";

export default function AgreementCheckbox() {
    const {activeKey, isChecked} = useSelector((state) => state.phoneForm);
    const dispatch = useDispatch();

    return (
        <div className={styles.agreement}>
            <label className={activeKey === 'Checkbox' ? `${styles.checkboxWrapper} ${styles.active}`:styles.checkboxWrapper}>
                <input type="checkbox" className={styles.agreementCheckbox} checked={isChecked} onChange={() => dispatch(setIsChecked())}/>
                <span></span>
            </label>
            <span className={styles.agreementText}>Согласие на обработку персональных данных</span>
        </div>
    );
}