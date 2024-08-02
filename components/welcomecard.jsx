import React, { useState } from 'react';
import styles from '@/styles/WelcomeCard.module.css';
import secondCardStyles from '@/styles/SecondCard.module.css';

function DismissableCard({ title, children, onClose, showCloseButton = true, isSecondCard = false }) {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClose = () => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    };
  
    if (!isVisible) return null;
  
    const cardStyles = isSecondCard ? secondCardStyles : styles;
  
    return (
      <div className={cardStyles.card}>
        {!isSecondCard && showCloseButton && (
          <button className={styles.closeButton} onClick={handleClose}>&times;</button>
        )}
        <h2 className={cardStyles.title}>{title}</h2>
        <div className={cardStyles.content}>
          {children}
        </div>
      </div>
    );
  }
  
  export default DismissableCard;