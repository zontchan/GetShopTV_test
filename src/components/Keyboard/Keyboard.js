import { v4 as uuidv4 } from 'uuid';
import {keyboardValues} from '../../data/keyboardValues';
import styles from './Keyboard.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setActiveKey} from "../../reducers/keyboardReducer";
import {addNumber, deleteNumber} from "../../reducers/phoneNumberReducer";

export default function Keyboard() {
    const {activeKey} = useSelector((state) => state.keyboard);
    const phone =useSelector((state) => state.phoneNumber);
    const dispatch = useDispatch();


    const handleClick = (key) => {
        if(key === activeKey) return;
        dispatch(setActiveKey({activeKey: key, category: 'keyboard'}));
        if(key === 'Remove' && phone.length === 0)  return;
        if(key === 'Remove') return dispatch(deleteNumber())
        if(phone.length === 10) return;
        dispatch(addNumber(key));
    }

    const setClassName= (key) => {
        if(key === 'Remove' && activeKey === key){
            return `${styles.keyBoardItem} ${styles.keyBoardItem_big} ${styles.keyBoardItem_active}`;
        }
        if(key === 'Remove'){
            return `${styles.keyBoardItem} ${styles.keyBoardItem_big}`;
        }
        if(activeKey === key){
            return `${styles.keyBoardItem} ${styles.keyBoardItem_active}`
        }
        return `${styles.keyBoardItem}`;
    }

    return (
        <div className={styles.keyBoard}>
            {keyboardValues.map((key) =>
                <button key={uuidv4()}
                        className={setClassName(key)}
                        onClick={() => handleClick(key)}
                >{key === 'Remove' ? 'Стереть' : key}</button>)}
        </div>
    );
}