import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import styles from './PhoneEnterPage.module.css';
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import SidePanel from "../../components/SidePanel/SidePanel";
import SidePanelScreen from "../../components/SidePanelScreen/SidePanelScreen";
import {
    setActiveKey,
    arrowUpAction,
    arrowDownAction,
    arrowLeftAction,
    arrowRightAction,
    handleKeyDown
} from "../../reducers/phoneFormReducer";
import {addNumber, deleteNumber} from "../../reducers/phoneNumberReducer";
import {setIsChecked} from "../../reducers/phoneFormReducer";
import CloseButton from "../../components/CloseButton/CloseButton";

export default function PhoneEnterPage() {
    const {activeKey, category} = useSelector((state) => state.phoneForm);
    const phone =useSelector((state) => state.phoneNumber);
    const dispatch = useDispatch();

    const onKeyDown = (e) => {
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
            if(!isNaN(e.key) && e.code !== 'Space'){
                if(phone.length === 10) return;
                dispatch(setActiveKey({activeKey: e.key, category: 'keyboard'}))
                dispatch(addNumber(e.key));
            }
            if(e.key === 'ArrowUp') dispatch(arrowUpAction());
            if(e.key === 'ArrowDown') dispatch(arrowDownAction());
            if(e.key === 'ArrowRight') dispatch(arrowRightAction());
            if(e.key === 'ArrowLeft') dispatch(arrowLeftAction());
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