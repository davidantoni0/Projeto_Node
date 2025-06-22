import styles from "./page.module.css";
import Calculadora from "./calculadora/page";
import BandeiraBrasil from "../components/bandeira_brasil"
import BandeiraGrecia from "../components/bandeira_grecia"
import BandeiraGuineBissau from "../components/bandeira_guine_bissau"
import BandeiraItalia from "../components/bandeira_italia"
import BandeiraJapao from "../components/bandeira_japao"
import BandeiraKuwait from "../components/bandeira_kuwait"
import BandeiraMacedonia from "../components/bandeira_macedonia"
import BandeiraPolonia from "../components/bandeira_polonia"
import BandeiraSuecia from "../components/bandeira_suecia"
import BandeiraTrinidadTobago from "../components/bandeira_trinidad_tobago"


export default function Home() {
  return (
    <div className={styles.page}>

      <BandeiraBrasil/>

      <BandeiraGrecia/>

      <BandeiraGuineBissau/>

      <BandeiraItalia/>

      <BandeiraJapao/>

      <BandeiraKuwait/>

      <BandeiraMacedonia/>

      <BandeiraPolonia/>

      <BandeiraSuecia/>

      <BandeiraTrinidadTobago/>

    </div>














  )
}
