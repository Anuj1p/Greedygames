import React from 'react';
import styles from './TopPartners.module.css';
import { ImagesFile } from '../../Constants';
import Image from 'next/image';

const TopPartners = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.heading}>Top Partners</div>
            <div className={styles.container}>
                {
                    ImagesFile.map(curr => (
                        <div key={curr.src} className={styles.image}>
                            <Image
                                alt="logo-img"
                                src={curr.src}
                            />
                        </div>
                    ))
                }
            </div>
            <div></div>
        </div>
    )
}

export default TopPartners
