import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { EnvelopeIcon, PhoneIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.bookAction}>
          <h2>Move even faster with Your<br />guide in the digital age.</h2>
          <div className={styles.action}>
            <Link href="" passHref>
              <div className="button button-white">
                Let’s Talk
              </div>
            </Link>
            <Link href="" passHref>
              <div className="button button-outline">
                Book Your Consultation
              </div>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className={styles.items}>
            <div className={styles.content}>
              <h5>Company Info</h5>
              <p>Reach out to us anytime and lets create a better future for all technology users together, forever. We are open to all types of collab offers and tons more.</p>
              <div className={styles.textWithIcon}>
                <ClockIcon className={styles.icon} />
                <div>
                  <p>Office Hours</p>
                  <p>Monday-Friday 9 AM-5 PM PST</p>
                </div>
              </div>
              <div className={styles.textWithIcon}>
                <ChatBubbleLeftRightIcon className={styles.icon} />
                <div>
                  <p>Support Hours</p>
                  <p>24/7 365</p>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h5>Contact Info</h5>
              <div className={styles.textWithIcon}>
                <EnvelopeIcon className={styles.icon} />
                <p>info@techyessolutions.com</p>
              </div>
              <div className={styles.textWithIcon}>
                <PhoneIcon className={styles.icon} />
                <p>858-227-4878</p>
              </div>
            </div>
            <div className={styles.content}>
              <h5>Our Services</h5>
              <div>
                <ul>
                  <li><p>Information Systems Strategy</p></li>
                  <li><p>Custom Software</p></li>
                  <li><p>Integration Services</p></li>
                  <li><p>Business Automation</p></li>
                  <li><p>Web, Ecommerce & Mobiel Apps</p></li>
                  <li><p>Creative</p></li>
                </ul>
              </div>
            </div>
            <div className={styles.content}>
              <h5>Our Location</h5>
              <Image src="/images/map.png" width="100%" height="50%" layout="responsive" objectFit="contain" alt="map" />
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2022 UIDesign.to - All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer