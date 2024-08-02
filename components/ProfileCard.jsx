import React from 'react';
import styles from '@/styles/Profile.module.css';

const ProfileCard = ({ profileImage, name, age, gender, location, description, trustNote }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileImageContainer}>
        <img src={profileImage} alt="Photo de profil" className={styles.profileImage} />
      </div>
      <div className={styles.biography}>
        <h2>Biographie</h2>
        <p>Nom : {name}</p>
        <p>Âge : {age}</p>
        <p>Genre : {gender}</p>
        <p>Location : {location}</p>
        <p>Description : {description}</p>
        <p>Trust Note : {trustNote}</p>
      </div>
    </div>
  );
};

export default ProfileCard;