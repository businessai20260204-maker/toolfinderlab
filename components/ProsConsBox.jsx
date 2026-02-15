export default function ProsConsBox({ pros = [], cons = [] }) {
  return (
    <div className="pros-cons-box">
      <div className="pros-section">
        <h4 className="pros-title">✅ Pros</h4>
        <ul className="pros-list">
          {pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
      </div>
      <div className="cons-section">
        <h4 className="cons-title">❌ Cons</h4>
        <ul className="cons-list">
          {cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
