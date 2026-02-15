export default function Callout({ type = 'info', children }) {
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    tip: '💡'
  };

  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-icon">{icons[type]}</div>
      <div className="callout-content">{children}</div>
    </div>
  );
}
