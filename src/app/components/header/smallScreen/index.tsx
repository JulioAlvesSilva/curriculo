'use client'
import styles from './SmallScreen.module.scss';
import { CgMenuRound } from "react-icons/cg";
import dados from '../dados.json'
import { useState } from 'react';
export default function SmallScreen() {
    const [open, setOpen] = useState(false);

    function isOpen(){
        setOpen(!open)
    }

    return (
        <section className={styles.smallScreen}>
            <div className={styles.smallScreen_1pt}>
                <h1>Julio Cesar</h1>
                <CgMenuRound onClick={()=> isOpen()} style={{color: open? 'green':'blue'}}/>
            </div>
            <div style={{display: open? 'block': 'none'}}>
                {dados.map(item => (
                    <a key={item.name} href={`#${item.name}`}>
                        <h3>{item.name}</h3>
                    </a>
                ))}
            </div>
        </section>
    )
}