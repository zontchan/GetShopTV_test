import styles from './PhoneEnterPage.module.css';
import SidePanelScreen from "../../components/SidePanelScreen/SidePanelScreen";
import SidePanel from "../../components/SidePanel/SidePanel";
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import CloseButton from "../../components/CloseButton/CloseButton";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addNumber, deleteNumber} from "../../reducers/phoneNumberReducer";
import {setIsChecked} from "../../reducers/checkboxReducer";
import {setActiveKey} from "../../reducers/keyboardReducer";

export default function PhoneEnterPage() {
    const {activeKey, category} = useSelector((state) => state.keyboard);
    const phone =useSelector((state) => state.phoneNumber);
    const dispatch = useDispatch();



    const handleKeyDown =(e) => {
        if(e.key === 'Enter'){
            if(category === 'keyboard') {
                if(activeKey === 'Remove') dispatch(deleteNumber());
                else {
                    if (phone.length === 10) return;
                    dispatch(addNumber(activeKey));
                }
            }
            if(category === 'checkbox'){
                dispatch(setIsChecked());
            }
        }
        if(e.key === 'Backspace'){
            dispatch(setActiveKey({activeKey: 'Remove', category: 'keyboard'}));
            dispatch(deleteNumber());
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    },[handleKeyDown]);
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