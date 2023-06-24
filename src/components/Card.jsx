export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <div className="card--image">
      <div className="card--stats">
        <img src={img} alt="images" className="card--image" />
        <div className="card--stats">
          <img src={img} alt="images" className="card--star" />
          <span>{rating}</span>
          <span>({reviewCount})</span>
          <span>{country}</span>
        </div>
        <p>{title}</p>
        <p>
          <span className="bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
}
