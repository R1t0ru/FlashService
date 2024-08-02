import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Main.module.css';

function Login(){
    return (
        <>
      <div className={styles.logincontainer}>
        <div className={styles.card}>
          <h2>Connexion</h2>
          <div className={styles.labelTop_inputDown}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" pattern=".+@example.com" size="30" required />
          </div>
          <div className={styles.labelTop_inputDown}>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="pass" name="password" minLength="8" required />
          </div>
          <Link href="/signin">
          <button className={styles.button}>Se connecter</button>
        </Link>
        </div>
      </div>
      </>
    );
  };
  
  export default Login;