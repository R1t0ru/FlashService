import styles from "@/styles/Home.module.css";
import Navigation from "@/components/nav";
import Footer from "@/components/footer";
import Main_module from "@/components/part_module";

function Home(){
  return (
    <>
      <div className={styles.app_container}>
      <Navigation/>
      <main>
        <Main_module/>
      </main>
      <Footer/>
      </div> 
    </>
  );
}

export default Home;