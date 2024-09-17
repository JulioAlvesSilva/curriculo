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
                    <p>
                        Sou desenvolvedor Full Stack com vasta experiência na criação e manutenção de projetos completos, abrangendo tanto o front-end quanto o back-end. Domino diversas tecnologias e frameworks, o que me permite entregar soluções robustas e escaláveis em diferentes áreas de desenvolvimento.<br/>
                        No front-end, trabalho com React.js, Vue.js e diversos frameworks para construir interfaces dinâmicas e intuitivas. No back-end, desenvolvo APIs com Spring Boot, Node.js e utilizo bancos de dados relacionais como PostgreSQL e MySQL, além de MongoDB para soluções NoSQL.<br/>
                        Aderindo às melhores práticas de desenvolvimento, como código limpo e reutilizável, tenho também experiência com Docker para gerenciamento de containers, o que proporciona flexibilidade e eficiência no desenvolvimento e deploy de aplicações.<br/>
                        Estou sempre em busca de aprender e me atualizar com novas tecnologias. Minha facilidade em adquirir novos conhecimentos é uma das minhas maiores habilidades. </p>
                </div>
            </div>
        </section>
    );
}
