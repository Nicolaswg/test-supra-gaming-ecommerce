import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Página de Inicio de Sesión | SupraGaming | Next.js E-commerce Boilerplate",
  description:
    "Esta es la página de inicio de sesión para la plantilla SupraGaming",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
