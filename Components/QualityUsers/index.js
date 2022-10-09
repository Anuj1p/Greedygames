import Image from 'next/image';
import React from 'react';
import styles from './QualityUsers.module.css';

const QualityUsers = () => {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.container}>
                <div className={styles.heading}>Acquire quality users, not just installs</div>
                <div className={styles.imgContainer}>
                    <Image
                        alt='quality-logo'
                        src={require('../../assets/quality.png')}
                    />
                </div>
                <br />
                <div className={styles.content}>Talk to us today and start creating mobile marketing campaigns that deliver results.</div>
            </div>
            <div></div>
        </div>
    )
}

export default QualityUsers
