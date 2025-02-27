const TestimonialCard = ({ image, name, role, quote }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="profile-image" />
        <div className="testimonial-info">
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
      <div className="testimonial-rating">
        ★★★★★
      </div>
      <p className="testimonial-text">{quote}</p>
    </div>
  );
};