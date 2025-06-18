import styles from "./page.module.css";
import Calculadora from "./calculadora/page";
import BandeiraPolonia from "../components/bandeira_polonia.js"
import BandeiraBrasil from "../components/bandeira_brasil.js"

export default function Home() {
  return (
    <div className={styles.page}>

      <BandeiraPolonia/>

      <BandeiraBrasil/>

    </div>














  )
}
