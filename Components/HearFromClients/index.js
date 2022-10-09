import Image from 'next/image';
import React from 'react';
import styles from './HearFromClients.module.css';

const HearFromClients = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.heading}>Hear it from Clients</div>
            <div className={styles.container}>
                <Image
                    alt="logo-img"
                    src={require('../../assets/Clients/Dream11.png')}
                />
                <div className={styles.subHeading}>22.4 Mn minutes of branding results in 25k high-quality registrations</div>
                <div className={styles.content}>The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.</div>
                <div className={styles.link}>Read Casestudy</div>
            </div>
            <div></div>
        </div>
    )
}

export default HearFromClients
