import {useDispatch} from "react-redux";
import {useEffect} from "react";
import styles from './PhoneEnterPage.module.css';
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import SidePanel from "../../components/SidePanel/SidePanel";
import SidePanelScreen from "../../components/SidePanelScreen/SidePanelScreen";
import {handleKeyDown} from "../../reducers/phoneFormReducer";
import CloseButton from "../../components/CloseButton/CloseButton";

export default function PhoneEnterPage() {
    const dispatch = useDispatch();

    const onKeyDown = (e) => {
        dispatch(handleKeyDown({key: e.key, code: e.code}));
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    },[onKeyDown]);

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