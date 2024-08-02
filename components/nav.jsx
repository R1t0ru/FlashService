import styles from "@/styles/Nav.module.css";
import MenuBurger from "./menu_burger";
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div className={styles.app_container}>
      <div className={styles.nav_bar}>
        <h1 className={styles.title}>FlashService</h1>
        <div className={styles.loginButtonContainer}>
        <Link href="/">
            <button className={styles.swipe_button}>Login</button>
          </Link>
          <Link href="/profile">
            <button className={styles.swipe_button}>Profile</button>
          </Link>
        </div>
        {/* <MenuBurger/> */}
        </div>
      </div>
    </>
  );
}
