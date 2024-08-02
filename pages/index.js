import React, { useState } from 'react';
import styles from "@/styles/Main.module.css";
import Login from './login';
import Signup from './signup';
import Footer from '@/components/footer';
import Navigation from '@/components/nav';


export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.container}>
      <header>
        <Navigation/>
      </header>
      <main>
      {isLogin ? (
        <Login/>
      ) : (
        <Signup/>
      )}
      <div className={styles.no_underline}>
      <a onClick={toggleForm}>
        {isLogin ? "Pas encore inscrit ? S'inscrire" : 'Déjà inscrit ? Se connecter'}
      </a>
      </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
