'use client';

import { useRef } from 'react';
import styles from './Banner.module.scss';
import dados from './dados.json';
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { transitionCode } from '@/hooks/useTrasition';

export default function BannerMain() {
    const referencia = useRef(null);
    const visivel = transitionCode(referencia);
    return (
        <section className={styles.banner}>
            <div className={styles.banner_1pg}>
                <img src="/imagens/banner/perfil.jpg" alt="fotoPerfil" />
                <div className={styles.banner_1pg_infs}>
                    <ul>
                        {dados.dadosInfs.map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <a href={item.href} target='_blanck'>{item.inf}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.banner_2pg}>
                <div ref={referencia} className={`${styles.banner_2pg_soc} ${visivel ? styles.show : ''}`}>
                    <a href="https://www.linkedin.com/in/j%C3%BAlio-cesar-alves-da-silva-b72732a8/" target='_blanck'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/JulioAlvesSilva" target='_blanck'>
                        <FaSquareGithub />
                    </a>
                    <a href="https://www.instagram.com/julioalves0013?igsh=MTl1YWdkc21wdW9mdQ==" target='_blanck'>
                        <FaInstagramSquare />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100000207741200&mibextid=ZbWKwL" target='_blanck'>
                        <FaFacebookSquare />
                    </a>
                </div>
                <div className={`${styles.banner_2pg_resumo} ${visivel ? styles.showText : ''}`} ref={referencia}>
                    <h2>RESUMO</h2>
                    <p>Sou desenvolvedor Full Stack e dedico-me a criar e aprimorar diversos projetos. Meu foco atual é no desenvolvimento web, utilizando a arquitetura SPA (Single Page Application) como padrão de trabalho. Tenho amplo conhecimento em diversas bibliotecas e frameworks, o que me permite garantir a qualidade e eficiência das minhas aplicações.</p>
                    <p>Sou fascinado por código limpo e reutilizável. Atualmente, trabalho no ambiente web e utilizo Next.js como minha principal ferramenta. Escolhi Next.js pela sua versatilidade em utilizar client-side e server-side em um único framework. No entanto, também tenho experiência com Angular e Vue.js, e não teria problemas em migrar para outras tecnologias, se necessário.</p>
                    <p>Para o back-end, utilizo Prisma como facilitador e PostgreSQL/MySQL para banco de dados relacional, além de MongoDB para banco de dados não relacional, e já trabalhei com Spring Boot para a criação de APIs. Sou apaixonado por codificação e estou sempre em busca de aprender e me aprimorar. A facilidade com que absorvo novos conhecimentos é uma das minhas maiores habilidades. Trabalhar como desenvolvedor não é apenas minha profissão, mas minha paixão. Sinto-me realizado e feliz codificando.</p>
                </div>
            </div>
        </section>
    );
}
