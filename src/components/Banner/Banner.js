import styles from './Banner.module.css';
import './Banner-transition.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";

export default function Banner() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 5 * 1000)
    }, []);
    return (
        <>
            <CSSTransition in={isActive} classNames={'alert'} timeout={500} unmountOnExit>
                <div className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <h4 className={styles.bannerTitle}>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br/>
                            ПОДАРИТЕ ЕМУ СОБАКУ!</h4>
                        <img src={'static/qr-code.png'} className={styles.qrCode} alt=""/>
                        <p className={styles.bannerText}>Сканируйте QR-код
                            или нажмите ОК</p>
                        <Link to={'/phone-entering'}><button className={styles.okButton}>Ок</button></Link>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
}