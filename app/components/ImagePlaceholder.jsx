export default function ImagePlaceholder({ className = "", children }) {
  return (
    <div className={`image-placeholder ${className}`.trim()}>
      <span className="icon icon-home-large" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
