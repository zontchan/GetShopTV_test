import styles from './PhoneForm.module.css';
import KeyBoard from "../Keyboard/Keyboard"
import AgreementCheckbox from "../Checkbox/AgreementCheckbox";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


export default function PhoneForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const phone = useSelector((state) => state.phoneNumber);


    useEffect(() => {
        let template = '+7(___)___-__-__';
        phone.forEach(i => template = template.replace(/_/, i));
        setPhoneNumber(template);
    },[phone]);

    return (
        <div className={styles.phoneForm}>
            <h3 className={styles.title}>Введите ваш номер мобильного телефона</h3>
            <div className={styles.phoneNumber}>{phoneNumber}</div>
            <p className={styles.subtitle}>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
            <KeyBoard/>
            <AgreementCheckbox/>
            <ConfirmButton/>
        </div>
    );
}