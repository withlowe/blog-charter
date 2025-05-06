import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'The Letter Service';
export const siteTitle = 'The Letter Service';

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name=""
                    content=""
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                <Link href="/" className={utilStyles.colorInherit}>
                            <h1 className={utilStyles.heading2Xl}>Charter Blog</h1>
                    </Link>
            </header>
            <main className={styles.container}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">Contents</Link>
                </div>
            )}
        </div>
    );
}
