export default function FloatingWhatsApp({ href = "#" }) {
  return (
    <a className="whatsapp-float" href={href} aria-label="Falar com a equipe">
      <span className="icon icon-whatsapp" aria-hidden="true" />
      WhatsApp
    </a>
  );
}
