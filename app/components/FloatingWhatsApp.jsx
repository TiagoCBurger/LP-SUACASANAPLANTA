import { Whatsapp } from "iconoir-react";

export default function FloatingWhatsApp({ href = "#" }) {
  return (
    <a className="whatsapp-float" href={href} aria-label="Falar com a equipe no WhatsApp">
      <Whatsapp className="whatsapp-icon" aria-hidden="true" />
    </a>
  );
}
