import React from 'react';
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import ProfileCard from '@/components/ProfileCard';
import styles from '@/styles/Profile.module.css';
import Link from 'next/link';

export default function Profile(){
  return (
    <>
    <Navigation/>
    <div className={styles.profilePage}>
      <ProfileCard 
        profileImage="/public/testimg.png"
        name="John Doe"
        age="30"
        gender="Masculin"
        location="XX rue de XXX, Lyon"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        trustNote={<span>⭐⭐⭐</span>}
      />
      <Link href="/editProfile" className={styles.editLink}>Modifier le Profil</Link>
    </div>
    <Footer/>
    </>
  );
};