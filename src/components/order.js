import styles from '../styles/Order.module.css';

export default function Order() {
    return (
        <div className={styles.container}>
            <div className={styles.address_container}>
                <p className={styles.title }>Location</p>
                <p className={styles.body_text }>1601 Redondo Beach Blvd.<br />Gardena, CA 90247</p>
            </div>
            <div className={styles.phone_container}>
                <p className={styles.title}>Phone</p>
                <p className={styles.body_text}>(310) 532-4550</p>
            </div>
            <p className={styles.pickup }><em>* Please pick up all orders at the pick-up window around the back *</em></p>
        </div>
    )
}