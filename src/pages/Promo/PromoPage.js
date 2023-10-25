import Video from "../../components/Video/Video";
import Banner from "../../components/Banner/Banner";
import styles from './PromoPage.module.css';

export default function PromoPage() {
    return (
        <div className={styles.promoPage}>
            <Video/>
            <Banner/>
        </div>
    );
}