import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dex Sistemas",
  description: "Gestão de Fornecedores, Prestadores, Opme e Medicamento...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
