import style from "@/styles/Footer.module.css"

function  Footer() {
  return (
    <>
        <div className={style.footer_navigation}>
          <div></div>
          <div className={style.footer_mark}>
            <p>©Flash Service 2024</p>
          </div>
        </div>
    </>
  );
}

export default Footer;