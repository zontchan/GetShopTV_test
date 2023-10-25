import styles from './PhoneForm.module.css';
import KeyBoard from "../Keyboard/Keyboard"
import AgreementCheckbox from "../Checkbox/AgreementCheckbox";
import ConfirmButton from "../ConfirmButton/ConfirmButton";


export default function PhoneForm() {

    return (
        <div className={styles.phoneForm}>
            <h3 className={styles.title}>Введите ваш номер мобильного телефона</h3>
            <div className={styles.phoneNumber}>phone</div>
            <p className={styles.subtitle}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <KeyBoard/>
            <AgreementCheckbox/>
            <ConfirmButton/>
        </div>
    );
}