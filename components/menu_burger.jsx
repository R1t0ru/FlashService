import React, { useState } from 'react';
import styles from "@/styles/MenuBurger.module.css";

function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
        {isOpen && (
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuBurger;