import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Currículo Julio Cesar - Dev",
  description: "Júlio Cesar Alves da Silva - Desenvolvedor Full Stack especializado em React.js, Next.js, Node.js, entre outras tecnologias. Experiência em criação de websites, integração de APIs, manipulação de bancos de dados SQL e NoSQL, e práticas de SEO. Habilidades em metodologias ágeis, desenvolvimento de código limpo e escalável, e forte capacidade de trabalho em equipe."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
