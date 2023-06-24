import katrie from "../assets/katie-zaferes.png";
import star from "../assets/star.png";

export default function Card() {
  return (
    <div src={katrie} className="card--image">
      <div className="card--stats">
        <img src={katrie} alt="images" className="card--image" />
        <div className="card--stats">
          <img src={star} alt="images" className="card--star" />
          <span>5.0</span>
          <span>(6)</span>
          <span>USA</span>
        </div>
        <p>Life Lessons with Katie Zafares</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
