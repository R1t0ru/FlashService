import React, { useState } from 'react';
import styles from "@/styles/MenuBurger.module.css";

function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBurger;