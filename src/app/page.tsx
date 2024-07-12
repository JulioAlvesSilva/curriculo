import styles from './Main.module.scss';
import BannerMain from "./components/banner";
import HeaderMain from "./components/header";

export default function PageMain(){
    return(
        <main className={styles.main}>
            <HeaderMain/>
            <BannerMain/>
        </main>
    )
}