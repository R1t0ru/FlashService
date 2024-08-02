import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Main.module.css';

function Login(){
    return (
        <>
      <div className={styles.logincontainer}>
        <div className={styles.card}>
          <div className={styles.center}><h2>Connexion</h2></div>
          <div className={styles.centerInCard}>
          <div className={styles.labelTop_inputDown}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='exemple@exemple.com' pattern=".+@example.com" size="30" required />
          </div>
          <div className={styles.labelTop_inputDown}>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="pass" name="password" minLength="8" required />
          </div>
          </div>
          <div className={styles.center}>
            <button className={styles.button}><a href="/signin">Se connecter</a></button>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Login;