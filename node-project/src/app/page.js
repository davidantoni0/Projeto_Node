import styles from "./page.module.css";
import BandeiraPolonia from "../components/bandeira_polonia.js"

export default function Home() {
  return (
    <div className={styles.page}>

      <BandeiraPolonia/>

    </div>
  )
}
