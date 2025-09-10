import { sendEmail } from "@/lib/email";
import { prisma } from "@/lib/prismaDB";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const formatedEmail = email.toLowerCase();

  const user = await prisma.user.findUnique({
    where: {
      email: formatedEmail,
    },
  });

  if (!user) {
    return new NextResponse("User doesn't exist", { status: 400 });
  }

  const resetToken = crypto.randomBytes(20).toString("hex");

  const passwordResetTokenExp = new Date();
  passwordResetTokenExp.setMinutes(passwordResetTokenExp.getMinutes() + 10);

  await prisma.user.update({
    where: {
      email: formatedEmail,
    },
    data: {
      passwordResetToken: resetToken,
      passwordResetTokenExp,
    },
  });

  const resetURL = `${process.env.SITE_URL}/reset-password/${resetToken}`;

  try {
    await sendEmail({
      to: formatedEmail,
      subject: "Restaura tu contraseña",
      html: ` 
      <div>
        <h1>Solicitaste una restauración de contraseña</h1>
        <p>Haz clic en el siguiente enlace para restaurar tu contraseña</p>
        <a href="${resetURL}" target="_blank">Restaurar Contraseña</a>
      </div>
      `,
    });

    return NextResponse.json(
      "Un correo ha sido enviado a tu bandeja de entrada",
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      "Ha ocurrido un error. Por favor intenta de nuevo!",
      {
        status: 500,
      }
    );
  }
}
