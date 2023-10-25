import ReactPlayer from 'react-player'
import styles from './Video.module.css';

export default function Video() {
    return (
        <div className={styles.backgroundVideo}>
            <ReactPlayer url={`https://www.youtube-nocookie.com/embed/M7FIvfx5J10?start=0si=7s4fKAWqkUxrgPxp&amp;`}
                         muted={true}
                         width={'100%'}
                         height={'100%'}
                         playing={true}
                         loop={true}
                         ellapsed={{0:30}}
                         controls={false}/>
        </div>
    );
}