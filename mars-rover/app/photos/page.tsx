import Image from 'next/image'
import { promises as fs } from 'fs';
import styles from './photos.module.css'

export default async function Page() {
    const file = await fs.readFile('/Work/Training/nasa-rover/photos/photos.json', 'utf8');
    const data = JSON.parse(file);
    const arrayData = Array.from(data.photos)
    return (
        <ul className={styles.list}>
            {arrayData.map((photo) => (
                <li key={photo.id} className={styles.item}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={photo.img_src}
                            alt={photo.camera.full_name}
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                        <div className={styles.overlay}>
                            <p>{photo.camera.full_name}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}