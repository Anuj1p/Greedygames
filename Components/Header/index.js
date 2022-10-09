import React from 'react';
import Image from 'next/image'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.childContainer}>
                <div className={styles.menuIcon}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>


                <Image
                    alt="logo-img"
                    src={require('../../assets/logo.svg')}
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default Header
