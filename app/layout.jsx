import "./globals.css";

export const metadata = {
  title: "Sua Casa na Planta",
  description: "Wireframe da LP e página de obrigado da Sua Casa na Planta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
