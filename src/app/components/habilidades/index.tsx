'use client'
import { useRef } from 'react';
import dados from './dados.json';
import styles from './Habilidades.module.scss';
import { transitionCode } from '@/hooks/useTrasition';

export default function Habilidades(){
    const referencia = useRef(null);
    const visivel = transitionCode(referencia);
    return(
        <section className={styles.habilidades} ref={referencia} id='HABILIDADES'>
            <h2>HABILIDADES</h2>
            <div className={styles.habilidades_lista}>
                {dados.habilidades.map(item=> (
                    <div key={item} className={visivel? styles.left:''} >
                        <h3>{item}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}