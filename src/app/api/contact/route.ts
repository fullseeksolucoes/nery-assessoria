import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const data = contactSchema.parse(body);

    await resend.emails.send({
        from: "Nery Assessoria <naoresponder@neryassessoria.com.br>",
        to: ["contato@neryassessoria.com.br"],
        replyTo: data.email,
        subject: "Novo contato pelo site - Nery Assessoria",
        html: `
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Novo contato - Nery Assessoria</title>
            </head>
            <body style="margin:0; padding:0; background-color:#f4f4f6; font-family: Arial, Helvetica, sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f6; padding:40px 0;">
                <tr>
                    <td align="center">
                    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden;">
                        
                        <!-- Header -->
                        <tr>
                        <td style="background-color:#4718AD; padding:24px 32px;">
                            <h1 style="margin:0; font-size:20px; color:#ffffff;">
                            Novo contato pelo site
                            </h1>
                        </td>
                        </tr>

                        <!-- Content -->
                        <tr>
                        <td style="padding:32px;">
                            <p style="margin:0 0 16px; color:#333333; font-size:15px;">
                            Você recebeu um novo contato através do site da <strong>Nery Assessoria Marketing</strong>.
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                            <tr>
                                <td style="padding:8px 0; color:#666666; font-size:14px;">
                                <strong>Nome:</strong><br />
                                ${data.name}
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:8px 0; color:#666666; font-size:14px;">
                                <strong>Email:</strong><br />
                                ${data.email}
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:8px 0; color:#666666; font-size:14px;">
                                <strong>Empresa:</strong><br />
                                ${data.company}
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:8px 0; color:#666666; font-size:14px;">
                                <strong>Telefone:</strong><br />
                                ${data.phone}
                                </td>
                            </tr>

                            ${
                                data.message
                                ? `
                            <tr>
                                <td style="padding:16px 0 8px; color:#666666; font-size:14px;">
                                <strong>Mensagem:</strong>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:12px 16px; background-color:#f7f7f9; border-radius:8px; color:#444444; font-size:14px; line-height:1.6;">
                                ${data.message}
                                </td>
                            </tr>
                            `
                                : ""
                            }
                            </table>
                        </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                        <td style="padding:24px 32px; background-color:#f7f7f9; text-align:center;">
                            <p style="margin:0; font-size:12px; color:#999999;">
                            Nery Assessoria Marketing<br />
                            Gestão completa do Instagram com foco em resultado
                            </p>
                        </td>
                        </tr>

                    </table>
                    </td>
                </tr>
                </table>
            </body>
            </html>
            `
        });

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Erro ao enviar mensagem";
        console.error("Erro no envio de contato:", error);
        return NextResponse.json({ success: false, message }, { status: 400 });
    }
}
