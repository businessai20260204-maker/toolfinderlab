export default function ComparisonTable({ children }) {
  return (
    <div className="comparison-table-wrapper">
      <table>
        {children}
      </table>
    </div>
  );
}