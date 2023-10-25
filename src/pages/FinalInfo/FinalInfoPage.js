import SidePanel from "../../components/SidePanel/SidePanel";
import styles from './FinalInfoPage.module.css';
import SidePanelScreen from "../../components/SidePanelScreen/SidePanelScreen";
import CloseButton from "../../components/CloseButton/CloseButton";
export default function FinalInfoPage() {
    return (
        <div className={styles.finalInfoPage}>
            <SidePanelScreen>
                <SidePanel>
                    <div className={styles.sideContent}>
                        <h1 className={styles.title}>Заявка принята</h1>
                        <span className={styles.subtitle}>Держите телефон под рукой.<br/>Скоро с Вами свяжется наш менеджер.</span>
                    </div>
                    <CloseButton buttonStyle={'finalInfoPageCloseButton'}/>
                </SidePanel>
            </SidePanelScreen>
        </div>
    );
}