import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>it&apos;s me</title>
        <meta name="description" content="Generated my portfolio with next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
            <a
              href="https://github.com/CodingBapthi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>By CodingBapthi aka me</p>
            </a>
        </div>

        <div className={styles.center}>
          <p> Hey would you like, contact me!!!</p>
        </div>

        <div className={styles.grid}>
          <a
            href="/learn"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn something from me, that&apos;s why you&apos;re here isn&apos;t it?
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Me <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover Me, I&apos;m a very interesting person. Not!
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Hear a some of my projects. Or what I&apos;m doing as a Frontend Developer!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
