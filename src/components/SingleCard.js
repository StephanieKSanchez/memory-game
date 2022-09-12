import "./SingleCard.css";

export default function SingleCard() {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="cover" src="/images/blank.png" alt="card cover" />
      </div>
    </div>
  );
}
