import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <h1>abci</h1>
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Features</Link>
          </li>
          <li>
            <Link href="">Showcase</Link>
          </li>
          <li>
            <Link href="">Pricing</Link>
          </li>
        </ul>
        <Link href="" passHref>
          <div className="button">
            Sign In
          </div>
        </Link>
      </div>
    </>
  )
}

export default Navbar