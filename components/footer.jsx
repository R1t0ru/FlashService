import styles from "@/styles/Footer.module.css"

export default function Footer() {
  return (
    <>
      <footer className={styles.app_footer}>
        <button className={styles.swipe_button}>Swipe Left</button>
        <button className={styles.swipe_button}>Swipe Right</button>
      </footer>
    </>
  );
}
