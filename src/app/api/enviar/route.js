import nodemailer from 'nodemailer'

export async function POST(req) {
    if (req.method === 'POST') {
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

        try {
            const data = await transporter.sendMail(mailOptions);
            return Response.json(data)
        } catch (error) {
            console.error(error);
            Response.json(error)
        }
    }

    return { error: 'Método não permitido' };
};