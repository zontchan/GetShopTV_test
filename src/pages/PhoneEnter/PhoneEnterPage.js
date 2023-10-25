import styles from './PhoneEnterPage.module.css';
import SidePanelScreen from "../../components/SidePanelScreen/SidePanelScreen";
import SidePanel from "../../components/SidePanel/SidePanel";
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import CloseButton from "../../components/CloseButton/CloseButton";

export default function PhoneEnterPage() {

    return (
        <div className={styles.phoneEnterPage}>
            <SidePanelScreen>
                <SidePanel>
                    <PhoneForm/>
                    <CloseButton buttonStyle={'phoneEnterPageCloseButton'}/>
                </SidePanel>
            </SidePanelScreen>
        </div>
    );
}