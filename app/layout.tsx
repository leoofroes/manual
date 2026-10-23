
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manual de sobrevivência na internet",
  description:
    "Um projeto editorial de Leonardo Fróes sobre internet, criatividade e comunicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
