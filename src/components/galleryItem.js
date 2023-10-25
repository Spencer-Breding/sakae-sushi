import Image from 'next/image';
import styles from '../styles/galleryItems.module.css';

export default function GalleryItem({ item, setCurrentIndex, index }) {
    const handleClick = () => {
        setCurrentIndex(index);
    };

    if (!item) {
        return <div>No item available</div>;
    }

    return (
        <div className={styles.gallery_item}>
            <div className={styles.imageWrapper} onClick={handleClick}>
                <Image
                    src={item.source}
                    alt={item.description}
                    loading="lazy"
                    priority={false}
                    fill
                />
            </div>
            <p>{item.description}</p>
        </div>
    );
}