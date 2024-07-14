'use client';
import { FormEvent, useState } from 'react';
import styles from './Contato.module.scss';

interface DadosEmail {
    nome: string;
    email: string;
    telefone: number | undefined | string;
    mensagem: string;
}

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState<number | undefined | string>();
    const [mensagem, setMensagem] = useState("");
    const [enviando, setEnviando] = useState(false);

    async function enviar(e: FormEvent<HTMLFormElement>) {
        setEnviando(true);
        e.preventDefault();
        const dadosEmail = {
            nome: nome,
            email: email,
            telefone: telefone,
            mensagem: mensagem
        };
        try {
            const res = await fetch('/api/enviar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosEmail)
            });
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const dados = await res.json();
            console.log('Dados enviados:', dados);
        } catch (error) {
            console.log('Erro:', error);
        }
        alert("Sua mensagem foi enviada");
        setEnviando(false);
        setNome("");
        setEmail("");
        setTelefone("");
        setMensagem("");
    }
    return (
        <>
            {enviando === false ?
                <section className={styles.contato} id='CONTATO'>
                    <h2>CONTATO</h2>
                    <form onSubmit={enviar}>
                        <div className={styles.contato_2seq}>
                            <input
                                type="text"
                                placeholder='Nome'
                                name='nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder='E-mail'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder='Telefone'
                                name='telefone'
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.valueAsNumber)}
                                minLength={11}
                                maxLength={14}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder='Digite sua mensagem'
                                name='mensagem'
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                required
                            />
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </section>
                :
                <section className={styles.contato} id='CONTATO'>
                    <h2>Enviando...</h2>
                </section>
            }
        </>
    )
}
