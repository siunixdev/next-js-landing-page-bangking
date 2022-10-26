import Image from "next/image"
import styles from "../styles/Hero.module.css"

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Every transaction is special for us.</h1>
          <p>Aiciatis unde omnis iste natus error sit<br/>voluptatem accusantium doloremque laudan.</p>
        </div>
        <Image src="/images/hero-image.png" width="100%" height="100%" layout="responsive" objectFit="contain" alt="hero" />
      </div>
      <div className={styles.vendor}>
        <Image src="/images/logo/apple.png" width="100%" height="100%" layout="responsive" objectFit="contain" alt="apple" />
        <Image src="/images/logo/adobe.png" width="100%" height="100%" layout="responsive" objectFit="contain" alt="adobe" />
        <Image src="/images/logo/slack.svg" width="100%" height="100%" layout="responsive" objectFit="contain" alt="slack" />
        <Image src="/images/logo/spotify.png" width="100%" height="100%" layout="responsive" objectFit="contain" alt="spotify" />
        <Image src="/images/logo/google.png" width="100%" height="100%" layout="responsive" objectFit="contain" alt="google" />
      </div>
    </>
  )
}

export default Hero