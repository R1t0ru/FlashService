import styles from "@/styles/Home.module.css";
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import Main_module from "@/components/part_module";
import Link from 'next/link';

function Home(){
  return (
    <>
        {/* <div className={styles.main}>
          <Navigation/>
          <Main_module/>
          <Footer/>
        </div> */}
      <Navigation/>
      <main className={styles.app_main}>
        <Main_module/>
      </main>
      <Footer/>
    </>
  );
}

export default Home;