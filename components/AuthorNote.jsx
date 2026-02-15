export default function AuthorNote({ children }) {
  return (
    <div className="author-note">
      <div className="author-note-header">
        <span className="author-note-icon">✍️</span>
        <span className="author-note-label">Author's Note</span>
      </div>
      <div className="author-note-content">
        {children}
      </div>
    </div>
  );
}
