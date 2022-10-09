import React from 'react'
import styles from './NumbersSection.module.css';

const NumbersSection = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.numbersContainer}>
                    <div className={styles.childContainer}>
                        <div className={styles.numbers}>300+</div>
                        <div className={styles.name}>Affiliates</div>
                    </div>
                    <div className={styles.childContainer}>
                        <div className={styles.numbers}>5K+</div>
                        <div className={styles.name}>Apps Inventory</div>
                    </div>
                    <div className={styles.childContainer}>
                        <div className={styles.numbers}>1M+</div>
                        <div className={styles.name}>App Installs</div>
                    </div>
                    <div className={styles.childContainer}>
                        <div className={styles.numbers}>3K+</div>
                        <div className={styles.name}>Active Campaigns</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default NumbersSection
