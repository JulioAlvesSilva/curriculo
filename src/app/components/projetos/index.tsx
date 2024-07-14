'use client'
import { useRef } from 'react';
import styles from './Projetos.module.scss';
import dados from './dados.json';
import { transitionCode } from '@/hooks/useTrasition';

export default function Projetos() {
    const referencia = useRef(null);
    const visivel = transitionCode(referencia);
    return (
        <section className={styles.projetos} ref={referencia} style={{opacity: visivel? 1:0}} id='PROJETOS'>
            <h2>PROJETOS</h2>
            <div className={styles.projetos_containers}>
                {dados.map(item => (
                    <a href={item.url} target='_blanc' key={item.id}>
                        <div style={{opacity: visivel? 1 : 0, width: visivel? '100%':0}}>
                            <img src={item.logo} alt={item.name} style={{width: visivel ? '150px' : 0}}/>
                            <span style={{ opacity: visivel? 1:0}}>{item.name}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}