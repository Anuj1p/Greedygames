import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react'
import styles from './ResultsAndFormSection.module.css';
import { Results } from '../../Constants';

const ResultsAndFormSection = () => {
    const [name, setName] = useState('');
    const email = useRef();
    const mobile = useRef();
    const [link, setLink] = useState('');
    const [revenue, setRevenue] = useState();
    const [invalidEmail, setInvalidEmail] = useState('');
    const [invalidMobile, setInvalidMobile] = useState('');
    const [error, setError] = useState('');

    const _onSubmit = e => {
        e.preventDefault();
        const filterEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const filterMobile = /^\+91[0-9]{10}$/

        if (!email.current.value || !mobile.current.value || !revenue) {
            setError("Fill all necessary fields");
            return;
        }
        setError('')
        if (!filterEmail.test(email.current.value) && !filterMobile.test(mobile.current.value)) {
            setInvalidEmail("Invalid Email Address");
            email.current.focus();
            setInvalidMobile("Please enter a Valid phone number with country code");
            mobile.current.focus();
            return;
        }
        else if (!filterMobile.test(mobile.current.value)) {
            if (filterEmail.test(email.current.value)) {
                setInvalidEmail('')
            }
            setInvalidMobile("Please enter a Valid phone number with country code");
            mobile.current.focus();
            return;
        }
        else if (!filterEmail.test(email.current.value)) {
            setInvalidMobile('');
            setInvalidEmail("Invalid Email Address");
            email.current.focus();
            return;
        }

        else {
            setInvalidEmail('');
            setInvalidMobile('');
            return;
        }
    }


    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.heading}>Result-oriented</div>
                <Image
                    alt='main-logo'
                    src={require('../../assets/resultsOrinted.svg')}
                />
                <div className={styles.leftSubContainer}>
                    <div className={styles.subHeading}> performance campaigns for every objective</div>
                    <div className={styles.featuresContainer}>
                        {
                            Results.map(curr => (
                                <div key={curr.src} className={styles.features}>
                                    <div className={styles.image}>
                                        <Image
                                            alt='main-logo'
                                            src={curr.src}
                                        />
                                    </div>
                                    <div className={styles.featureContent}>{curr.content}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <form onSubmit={_onSubmit}>
                    <div className={styles.firstRow}>
                        <div className={styles.firstRowComponent}>
                            <label for="name">Name</label><br />
                            <input
                                className={styles.firstRowInput}
                                type="text"
                                id='name'
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your Full Name"
                            />
                        </div>
                        <div className={styles.firstRowComponent}>
                            <label for="email">Email</label><br />
                            <input
                                className={styles.firstRowInput}
                                type="email"
                                id='email'
                                ref={email}
                                placeholder="Enter your Email Address"
                            />
                            <div className={styles.errors}>{invalidEmail}</div>
                        </div>
                    </div>
                    <div className={styles.nextRows}>
                        <label for="pnumber">Phone Number</label><br />
                        <input
                            className={styles.nextRowsInput}
                            type="tel"
                            id='pnumber'
                            ref={mobile}
                            placeholder="Enter your phone number with country code"
                        />
                        <div className={styles.errors}>{invalidMobile}</div>
                    </div>
                    <div className={styles.nextRows}>
                        <label for="website">App/Website Link (optional)</label><br />
                        <input
                            className={styles.nextRowsInput}
                            type="text"
                            id='website'
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Enter you App/Website you wish to monetise"
                        />
                    </div>
                    <div className={styles.nextRows}>
                        <label for="revenue">Monthly Revenue (USD)</label><br />
                        <input
                            className={styles.nextRowsInput}
                            type="num"
                            id='revenue'
                            onChange={(e) => setRevenue(e.target.value)}
                            placeholder="Enter your Average monthly revenue in USD"
                        />
                    </div>
                    {error ? <div className={styles.errors} style={{ paddingTop: "5px" }}>{error}</div> : null}
                    <button className={styles.button}>Get Started</button>
                    <div className={styles.terms}>By signing up, you agree to our <span className={styles.spanTag}>Terms</span> and <span className={styles.spanTag}>Privacy Policy</span></div>
                </form>

            </div>
        </div>
    )
}

export default ResultsAndFormSection
