import React from "react";
import Link from "next/link";
import styles from "@/styles/Main.module.css";

function Signin() {
  return (
    <div className={styles.logincontainer}>
      <div className={styles.card}>
        <h2>Inscription</h2>
        <div className={styles.centerInCard}>
        <div className={styles.labelTop_inputDown}>
          <label htmlFor="name">Nom du profil</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="4"
            maxLength="50"
            size="10"
          />
        </div>
        <div className={styles.labelTop_inputDown}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern=".+@example.com"
            size="30"
            required
          />
        </div>
        <div className={styles.labelTop_inputDown}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            required
          />
        </div>
        <div className={styles.labelTop_inputDown}>
          <label htmlFor="password">Confirmer Mot de passe</label>
          <input
            type="password"
            id="pass"
            name="confired_password"
            minLength="8"
            required
          />
        </div>
        </div>
        <div className={styles.center}>
            <button className={styles.button}><a href="/">S'inscrire</a></button>
          </div>
      </div>
    </div>
  );
}

export default Signin;
