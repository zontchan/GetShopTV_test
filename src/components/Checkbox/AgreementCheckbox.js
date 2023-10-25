import styles from "./AgreementCheckbox.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setIsChecked} from "../../reducers/checkboxReducer";

export default function AgreementCheckbox() {
    const {isChecked}= useSelector((state) => state.checkbox);
    const {activeKey} = useSelector((state) => state.keyboard);
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