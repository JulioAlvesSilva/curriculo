'use client'
import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import BannerMain from "./components/banner";
import Contato from './components/contato';
import Experiencia from './components/experiencia';
import Formacao from './components/formacao';
import Habilidades from './components/habilidades';
import HeaderMain from "./components/header";
import Projetos from './components/projetos';
import Rodape from './components/rodape';

export default function PageMain(){
    const [visivel, setVisivel] = useState("")
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setVisivel(sectionId);
                }
            });
        }, {
            root: null,
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return(
        <main className={styles.main}>
            <HeaderMain nomeId={visivel}/>
            <BannerMain/>
            <Experiencia/>
            <Formacao/>
            <Projetos/>
            <Habilidades/>
            <Contato/>
            <Rodape/>
        </main>
    )
}