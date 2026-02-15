export default function RatingBox({ overall, ease, features, value }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '⯨'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="rating-box">
      <div className="rating-row">
        <span className="rating-label">Overall:</span>
        <span className="rating-stars">{renderStars(overall)}</span>
        <span className="rating-number">{overall}/5</span>
      </div>
      {ease && (
        <div className="rating-row">
          <span className="rating-label">Ease of Use:</span>
          <span className="rating-stars">{renderStars(ease)}</span>
          <span className="rating-number">{ease}/5</span>
        </div>
      )}
      {features && (
        <div className="rating-row">
          <span className="rating-label">Features:</span>
          <span className="rating-stars">{renderStars(features)}</span>
          <span className="rating-number">{features}/5</span>
        </div>
      )}
      {value && (
        <div className="rating-row">
          <span className="rating-label">Value:</span>
          <span className="rating-stars">{renderStars(value)}</span>
          <span className="rating-number">{value}/5</span>
        </div>
      )}
    </div>
  );
}
