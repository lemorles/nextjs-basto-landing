import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Bastó",
  description:
    "Cerca virtual para la gestión de sistema de pastoreo de precisión. Aumentamos la eficiencia, la rentabilidad y la sustentabilidad de la producción ganadera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
