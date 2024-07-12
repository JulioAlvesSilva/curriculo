import styles from './Banner.module.scss';
import  dados from './dados.json';
import { FaLinkedin } from "react-icons/fa";
export default function BannerMain() {
    return (
        <section className={styles.banner}>
            <div className={styles.banner_1pg}>
                <img src="/imagens/banner/perfil.jpg" alt="fotoPerfil" />
                <div className={styles.banner_1pg_infs}>
                    <ul >
                        {dados.dadosInfs.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <a href="">{item.inf}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.banner_2pg}>
                    <div className={styles.banner_2pg_soc}>
                        <FaLinkedin/>
                    </div>
            </div>
        </section>
    )
}