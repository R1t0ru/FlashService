import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Main.module.css';

function Signup(){
    return (
      <div className={styles.container}>
        <h1 className={styles.logo}>FlashService</h1>
        <div className={styles.card}>
          <h2>Se connecter</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" pattern=".+@example.com" size="30" required />
          </div>
          <div>
            <label htmlFor="name">Nom de profil</label>
            <input type="text" id="name" name="name" required minLength="4" maxLength="50" size="10" />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="pass" name="password" minLength="8" required />
          </div>
          <div>
            <label htmlFor="password">Confirmer Mot de passe</label>
            <input type="password" id="pass" name="confired_password" minLength="8" required />
          </div>
          <input type="submit" value="Sign up" />
        </div>
        <Link href="/">
          <button>Login</button>
        </Link>
        <Link href="/home">
          <button>Go to home</button>
        </Link>
      </div>
    );
  };
  
  export default Signup;