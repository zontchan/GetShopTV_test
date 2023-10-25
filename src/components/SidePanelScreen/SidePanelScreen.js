
import styles from "./SidePanelScreen.module.css";

export default function SidePanelScreen(props) {
    return (
        <div className={styles.promoScreen}>
            {props.children}
            <div className={styles.additionalInfo}>
                <p className={styles.infoText}>Сканируйте QR-код для получения дополнительной информации</p>
                <img src={'static/qr-code.png'} alt=""/>
            </div>
        </div>
    );
}