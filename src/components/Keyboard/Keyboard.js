import { v4 as uuidv4 } from 'uuid';
import {keyboardValues} from '../../data/keyboardValues';
import styles from './Keyboard.module.css';

export default function Keyboard() {

    const setClassName= (key) => {
        if(key === 'Remove'){
            return `${styles.keyBoardItem} ${styles.keyBoardItem_big}`;
        }
        return `${styles.keyBoardItem}`;
    }

    return (
        <div className={styles.keyBoard}>
            {keyboardValues.map((key) =>
                <button key={uuidv4()}
                        className={setClassName(key)}
                >{key === 'Remove' ? 'Стереть' : key}</button>)}
        </div>
    );
}