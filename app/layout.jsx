import "./globals.css";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "./components/GoogleTagManager";

export const metadata = {
  title: "Sua Casa na Planta",
  description: "Landing page e página de obrigado da Sua Casa na Planta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <GoogleTagManagerHead />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Ramsina&display=swap"
        />
      </head>
      <body>
        <GoogleTagManagerBody />
        {children}
      </body>
    </html>
  );
}
