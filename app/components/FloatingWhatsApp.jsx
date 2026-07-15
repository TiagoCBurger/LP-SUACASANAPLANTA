import { Whatsapp } from "iconoir-react";
import { WHATSAPP_LINKS } from "../lib/whatsapp";

export default function FloatingWhatsApp({ href = WHATSAPP_LINKS.default }) {
  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a equipe no WhatsApp"
    >
      <Whatsapp className="whatsapp-icon" aria-hidden="true" />
    </a>
  );
}
