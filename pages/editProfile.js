import React, { useState } from 'react';
import styles from '@/styles/EditProfile.module.css';
import main from '@/styles/Main.module.css'
import Footer from '@/components/footer';
import Navigation from '@/components/nav';

export default function EditProfile (){

  const [profile, setProfile] = useState({
    profileImage: '/profile.jpg',
    name: 'John Doe',
    age: '30',
    gender: 'Masculin',
    location: 'XX rue de XXX, Lyon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    trustNote: '⭐⭐⭐'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <div className={main.container}>
    <Navigation/>
    <div className={styles.editProfilePage}>
      <h2 className={styles.title}>Modifier le Profil</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Nom:
          <input
            className={styles.input} 
            type="text" 
            name="name" 
            value={profile.name} 
            onChange={handleChange} 
          />
        </label>
        <label className={styles.title}>
          Âge:
          <input 
            type="text" 
            name="age" 
            value={profile.age} 
            onChange={handleChange} 
          />
        </label>
        <label className={styles.title}>
          Genre:
          <input 
            type="text" 
            name="gender" 
            value={profile.gender} 
            onChange={handleChange} 
          />
        </label>
        <label className={styles.title}>
          Location:
          <input 
            type="text" 
            name="location" 
            value={profile.location} 
            onChange={handleChange} 
          />
        </label>
        <label className={styles.title}>
          Description:
          <textarea 
            name="description" 
            value={profile.description} 
            onChange={handleChange} 
          />
        </label>
        <div className={styles.buttons}>
          {/* <button className={styles.button} type="button" onClick={handleSave}>Sauvegarder</button> */}
          {/* <button className={styles.button} type="button" onClick={handleCancel}>Annuler</Link></button> */}
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};