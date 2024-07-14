'use client'
import { transitionCode } from '@/hooks/useTrasition';
import styles from './Formacao.module.scss';
import dados from './dados.json';
import { useRef } from 'react';

export default function Formacao() {
    const referencia = useRef(null);
    const visivel = transitionCode(referencia);
    return (
        <section className={styles.experiencia} ref={referencia} id='FORMAÇÃO'>
            <h2>FORMAÇÃO</h2>
            {dados.tempoCargo.map(item => (
                <div key={item.id} className={styles.experiencia_container} >
                    <div className={`${styles.experiencia_container_1pt} ${visivel ? styles.left : ''}`}>
                        <label>{item.dataInicio} - {item.dataFinal}</label>
                        <label>{item.cargo}</label>
                    </div>
                    <div className={styles.experiencia_container_2pt}>
                        <span className={visivel ? styles.mostrar : ''}>●</span>
                        <div className={visivel ? styles.cima : ''}></div>
                        <span className={visivel ? styles.mostrar : ''}>●</span>
                    </div>
                    <div className={`${styles.experiencia_container_3pt} ${visivel ? styles.direi : ''}`}>
                        <span>{item.nomeEmpresa}</span>
                        <label dangerouslySetInnerHTML={{ __html: item.descricao }}></label>
                    </div>
                </div>
            ))}
        </section>
    )
}