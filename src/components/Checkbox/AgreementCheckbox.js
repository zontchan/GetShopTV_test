import styles from "./AgreementCheckbox.module.css";

export default function AgreementCheckbox({isChecked}) {
    return (
        <div className={styles.agreement}>
            <label className={styles.checkboxWrapper}>
                <input type="checkbox" className={styles.agreementCheckbox} checked={isChecked}/>
                <span></span>
            </label>
            <span className={styles.agreementText}>Согласие на обработку персональных данных</span>
        </div>
    );
}