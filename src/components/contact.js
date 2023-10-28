import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.address_container}>
                <p className={styles.title }>Location</p>
                <p className={styles.body_text }>1601 Redondo Beach Blvd.<br />Gardena, CA 90247</p>
            </div>
            <div className={styles.hours_container}>
                <p className={styles.title}>Hours</p>
                <p className={styles.body_text}>Wednesday-Sunday: 9am to 4pm</p>
                <p className={styles.body_text}>Monday: Closed</p>
                <p className={styles.body_text}>Tuesday: Closed</p>
            </div>
            <div className={styles.phone_container}>
                <p className={styles.title}>Phone</p>
                <p className={styles.body_text}>(310) 532-4550</p>
            </div>
        </div>
    )
}