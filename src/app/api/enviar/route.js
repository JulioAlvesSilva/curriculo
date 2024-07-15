import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        console.log(body);
        
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: process.env.HOST_MAIL,
            port: process.env.HOST_PORT,
            secure: true,
            auth: {
                user: process.env.HOST_USER,
                pass: process.env.HOST_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: 'aps.juliocs@gmail.com',
            to: 'jsilvawebsite@gmail.com',
            subject: `Enviado através do currículo - ${body.nome}`,
            html: `Nome: ${body.nome} <br>
                E-mail: ${body.email}<br>
                Telefone: ${body.telefone}<br>
                Mensagem: ${body.mensagem}
            `
        };

        const data = await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Erro ao enviar o e-mail' }), { status: 500 });
    }
}
