export default function CTAButton({ href, label }) {
  return (
    <div className="cta-button-wrapper">
      <a 
        href={href} 
        className="cta-button"
        rel="nofollow sponsored"
        target="_blank"
      >
        {label}
      </a>
    </div>
  );
}
