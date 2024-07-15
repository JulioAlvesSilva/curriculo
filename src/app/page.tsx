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
import { useMediaQuery } from 'react-responsive';
import SmallScreen from './components/header/smallScreen';

export default function PageMain(){
    const [visivel, setVisivel] = useState("");
    const smallScreen = useMediaQuery({ query: '(max-width: 800px)' })
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
            {smallScreen? <SmallScreen/> : <HeaderMain nomeId={visivel}/>}
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