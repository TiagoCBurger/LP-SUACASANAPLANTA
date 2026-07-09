import { HomeAltSlim } from "iconoir-react";

export default function ImagePlaceholder({ className = "", title = "Espaço para foto ou render", subtitle = "" }) {
  return (
    <div className={`image-placeholder ${className}`.trim()}>
      <div className="placeholder-inner">
        <span className="placeholder-mark" aria-hidden="true">
          <HomeAltSlim className="placeholder-icon" />
        </span>
        <span className="placeholder-eyebrow">Sua Casa na Planta</span>
        <strong>{title}</strong>
        {subtitle ? <span>{subtitle}</span> : null}
      </div>
    </div>
  );
}
