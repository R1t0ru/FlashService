import styles from "@/styles/Card.module.css";
import React, { useState } from 'react';
import WelcomeCard from './welcomecard.jsx';

export default function Main_module() {
    const [showSecondCard, setShowSecondCard] = useState(false);
  
    const handleFirstCardClose = () => {
      setShowSecondCard(true); // Afficher la deuxième carte lorsque la première est supprimée
    };
  
    return (
      <div className={styles.main_module}>
        <WelcomeCard 
          title="Première Carte" 
          onClose={handleFirstCardClose}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, explicabo! Soluta quis temporibus quia iusto voluptate alias ad, quibusdam doloremque nihil asperiores quo voluptatem. Itaque, tempora repellendus? Eaque, vel laboriosam!</p>
        </WelcomeCard>
        {showSecondCard && (
          <WelcomeCard
          title="Deuxième Carte"
          isSecondCard={true}>
          <div className={styles.cardContent}>
          <img 
              src="@/public/testimg.png" 
              alt="Image du service demander ou map" 
              className={styles.imagePlaceholder}
            />
            <p>Type de Service : XXX</p>
            <p>Temps estimé : XXX</p>
            <p>Ville : XXX</p>
            <p>Description : XXX</p>
          </div>
        </WelcomeCard>
        )}
      </div>
    );
  }

// export default function Main_module(){
//     return(
//         <div className={style.main_module}>
//             <WelcomeCard>
//                 <h2>Bienvenue</h2>
//                 <p></p>
//             </WelcomeCard>
//         <div className={style.card}>
          
//         </div>
//         </div>
//     );
// }