import Image from "next/image"
import styles from "./style.module.css"
import { ServeSection } from "@/links/Links"
import ContactUs from "../mainbutton/ContactUs"
import { useTranslations } from "next-intl"

const Serve = () => {
  const serve = ServeSection();
  const t = useTranslations("ServeSection")
  return (
    <section className={styles.serveSection}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div className={styles.sectionLeftContainer}>
            <p className={`${styles.sectionText} ${styles.colorDarkGrey}`}>{t("FirstTexts.serveMainText")}</p>
            <h2 className={`${styles.sectionTitle} ${styles.colorPrimary}`}>{t("FirstTexts.serveMainTitle")}</h2>
            <Image className={styles.sectionImage} src="/assets/img/BusinessPeople.png" alt="Business People Image" width={480} height={300} />
          </div>
          <div className={styles.sectionRightContainer}>
            {
              serve.map(({ id, icon, text }) => {
                return (
                  <div key={id} className={styles.rightContainerItems}>
                    <span className={`${styles.diamondIcon} ${styles.colorPrimary}`}>{icon}</span>
                    <p className={`${styles.sectionSubText} ${styles.colorDarkGrey}`}>{text}</p>
                  </div>
                )
              })
            }
            <div className={styles.buttonContainer}>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Serve