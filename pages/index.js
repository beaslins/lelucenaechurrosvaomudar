import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>lelucenaechurros vão mudar</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.bgheader}>
          <img src="/logo.png" alt="" />
        </header>

        <h1 className={styles.title}>Ajude a montar nossa casa:</h1>
        <div className={styles.list}>
          <div className={styles.item}>
              <Image src="/balde.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Balde</p>
              <p className={styles.itemPrice}>R$ 20,00</p>
              <Link href="">
                <a>Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/balde.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Balde</p>
              <p className={styles.itemPrice}>R$ 20,00</p>
              <Link href="">
                <a>Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/balde.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Balde</p>
              <p className={styles.itemPrice}>R$ 20,00</p>
              <Link href="">
                <a>Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/balde.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Balde</p>
              <p className={styles.itemPrice}>R$ 20,00</p>
              <Link href="">
                <a>Comprar</a>
              </Link>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>

      <div className={styles.pix}></div>
    </div>
  )
}
