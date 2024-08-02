import styles from "@/styles/Nav.module.css";
import MenuBurger from "./menu_burger";
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div className={styles.main_navigation}>
        <div className={styles.content_navigation}></div>
          <div className={styles.title_navigation}>
            <a href="/home"><h1>Flash Service</h1></a>
          </div>
        <div className={styles.content_navigation}>
          <MenuBurger/>
        </div>
      </div>
    </>
  );
}

