import Starfield from './starfield';
import styles from './page.module.css'

export default function Home() {
    return (
        <>
            <div>
                <Starfield
                    starCount={2500}
                    starCount={2500}
                    startColor="white"
                    speedFactor={0.15}
                    star
                    backgroundColor="black"
                    />
                    <h1 className={styles.header}>Mars Rover</h1>
            </div>
        </>
    );
}