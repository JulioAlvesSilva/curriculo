'use client';
import styles from "./Header.module.scss";
import dados from './dados.json';

interface Props {
    nomeId: string | any;
}

export default function HeaderMain({ nomeId }: Props) {
    return (
        <section className={styles.header}>
            <h1>Julio Cesar Alves da Silva</h1>
            <div>
                {dados.map(item => (
                    <a key={item.name} href={`#${item.name}`}>
                        <h3 style={{ color: nomeId === item.name ? 'red' : 'gray' }}>{item.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    );
}