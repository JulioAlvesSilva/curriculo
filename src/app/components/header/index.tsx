import styles from  "./Header.module.scss";
import dados from  './dados.json';
export default function HeaderMain(){
    return(
        <section className={styles.header}>
            <h1>Julio Cesar Alves da Silva</h1>
            <div>
                {dados.map(item => <h3 key={item.name}>{item.name}</h3>)}
            </div>
        </section>
    )
}