import React from 'react'
import styles from './StickyScrollComponent.module.css';

const StickyScrollComponent = () => {

    const _onCLick = () => {
        window.scrollTo(0,830);
    };

    return (
        <div className={styles.mainComponent}>
            <div className={styles.container}>
                <div className={styles.content}>Get a Call back from us</div>
                <button className={styles.button} onClick={_onCLick}>Get Started</button>
            </div>
        </div>
    );
}

export default StickyScrollComponent;
