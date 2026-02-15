export default function PricingTable({ children }) {
  return (
    <div className="pricing-table-wrapper">
      <table>
        {children}
      </table>
    </div>
  );
}