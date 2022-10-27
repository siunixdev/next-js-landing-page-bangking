import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ABCI | Your Transation Provider</title>
        <meta name="description" content="Transaction Provider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='container'>
          <Navbar />
          <Hero />
          <Features />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
