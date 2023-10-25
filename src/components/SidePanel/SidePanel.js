import styles from './SidePanel.module.css';
export default function SidePanel(props) {

    return (
        <div className={styles.sidePanel}>
            {props.children}
        </div>
    );
}