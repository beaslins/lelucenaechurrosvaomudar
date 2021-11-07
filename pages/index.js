import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  if (typeof window !== "undefined") {
    var video = document.querySelector('video');
    video.muted = true;
    video.play()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>lelucenaechurros vão mudar</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <header className={styles.bgheader}>

          <video loop="true" autoplay="autoplay" className={styles.myVideo}>
            <source src="/leevi.mp4" type="video/mp4" />
          </video>
          
          <img src="/logo.png" alt="" />
        </header>

        <h1 className={styles.title}>Ajude a montar nossa casa:</h1>
        <div className={styles.list}>
          <div className={styles.item}>
              <Image src="/pano.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Pano de prato</p>
              <p className={styles.itemPrice}>R$ 10,00</p>
              <Link href="https://pag.ae/7XGxiW1G7">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/balde.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Balde</p>
              <p className={styles.itemPrice}>R$ 20,00</p>
              <Link href="https://pag.ae/7XGxEiUB1">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/baldegamer.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Balde Gamer</p>
              <p className={styles.itemPrice}>R$ 30,00</p>
              <Link href="https://pag.ae/7XGxEHvBa">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/casamento.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Fazer o Vinicius pedir a Leticia em noivado</p>
              <p className={styles.itemPrice}>R$ 44,00</p>
              <Link href="https://pag.ae/7XGxFBUNN">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
        </div>


        <div className={styles.list}>
          <div className={styles.item}>
              <Image src="/panela.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Panela</p>
              <p className={styles.itemPrice}>R$ 50,00</p>
              <Link href="https://pag.ae/7XGxHkiHN">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/copo.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Conjunto de Copos</p>
              <p className={styles.itemPrice}>R$ 60,00</p>
              <Link href="https://pag.ae/7XGxHUHNG">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/ashe.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Cama para Ashe</p>
              <p className={styles.itemPrice}>R$ 80,00</p>
              <Link href="https://pag.ae/7XGxJh_TK">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/tacas.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Conjunto de Taças</p>
              <p className={styles.itemPrice}>R$ 100,00</p>
              <Link href="https://pag.ae/7XGxJHsVs">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
              <Image src="/almofada.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Almofadas</p>
              <p className={styles.itemPrice}>R$ 120,00</p>
              <Link href="https://pag.ae/7XGxKCVB7">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/cobertor.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Cobertor</p>
              <p className={styles.itemPrice}>R$ 150,00</p>
              <Link href="https://pag.ae/7XGxLwYHN">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/escada.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Escada</p>
              <p className={styles.itemPrice}>R$ 180,00</p>
              <Link href="https://pag.ae/7XGxLYgw1">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/impressora.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Impressora</p>
              <p className={styles.itemPrice}>R$ 200,00</p>
              <Link href="https://pag.ae/7XGxMGf-s">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
        </div>



        <div className={styles.list}>
          <div className={styles.item}>
              <Image src="/privada.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Privada Gamer</p>
              <p className={styles.itemPrice}>R$ 250,00</p>
              <Link href="https://pag.ae/7XGxPjFxN">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/pratps.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Conjunto de Pratos</p>
              <p className={styles.itemPrice}>R$ 300,00</p>
              <Link href="https://pag.ae/7XGxQitQs">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/forno.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Forno</p>
              <p className={styles.itemPrice}>R$ 400,00</p>
              <Link href="https://pag.ae/7XGxQXG9v">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/pc.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Parcela PC Gamer</p>
              <p className={styles.itemPrice}>R$ 500,00</p>
              <Link href="https://pag.ae/7XGxRegm1">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
              <Image src="/cadeira.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Cadeira Gamer</p>
              <p className={styles.itemPrice}>R$ 600,00</p>
              <Link href="https://pag.ae/7XGxRN2Qs">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/cama.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Cama</p>
              <p className={styles.itemPrice}>R$ 700,00</p>
              <Link href="https://pag.ae/7XGxShEGa">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/carro.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Parcela do Carro</p>
              <p className={styles.itemPrice}>R$ 800,00</p>
              <Link href="https://pag.ae/7XGxSDjjs">
                <a target="_blank">Comprar</a>
              </Link>
            </div>
            <div className={styles.item}>
              <Image src="/barba.png" alt="" width={300} height={400} layout='responsive'/>
              <p className={styles.itemName}>Tirar a barba do Vinicius</p>
              <p className={styles.itemPrice}>R$ 1000,00</p>
              <Link href="https://pag.ae/7XGxTsJVm">
                <a target="_blank">Comprar</a>
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
