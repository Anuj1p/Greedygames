import Image from 'next/image';
import React from 'react';
import styles from './TopClients.module.css';
import {Clients} from '../../Constants';

const TopClients = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
        <div className={styles.heading}>Top Clients</div>
            <div className={styles.container}>
                {
                    Clients.map(curr => (
                        <div key={curr.src} className={styles.image}>
                            <Image
                                alt="logo-img"
                                src={curr.src}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
        
            <div></div>
    </div>
  )
}

export default TopClients
