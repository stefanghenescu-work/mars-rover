'use client';

import Starfield from './starfield';
import styles from './page.module.css'
import {
    FacebookShareButton,
    FacebookIcon, InstapaperShareButton, InstagramIcon, WorkplaceShareButton, WorkplaceIcon,
} from 'next-share'

export default function Home() {
    return (
        <>
            <div>
                <Starfield
                    starCount={2500}
                    startColor="white"
                    speedFactor={0.15}
                    backgroundColor="black"
                    />
                    <h1 className={styles.header}>Mars Rover</h1>

                <footer className={styles.footer}>
                    <FacebookShareButton
                        url={'https://www.facebook.com/MarsCuriosity/'}
                        quote={'Rover facebook account'}
                        hashtag={'#nextshare'}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <InstapaperShareButton
                        url={'https://www.instagram.com/marscuriosity/?hl=en'}
                        quote={'Rover instagram account'}>
                        <InstagramIcon size={32} round />
                    </InstapaperShareButton>

                    <WorkplaceShareButton
                        url={'https://science.nasa.gov/mission/msl-curiosity/'}
                        quote={'Rover page account'}>
                        <WorkplaceIcon size={32} round />
                    </WorkplaceShareButton>
                </footer>

            </div>
        </>
    );
}