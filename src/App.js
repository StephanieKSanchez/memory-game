import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/images/cane-corso.png" },
  { src: "/images/chichuahua.png" },
  { src: "/images/doberman.png" },
  { src: "/images/german-shepherd.png" },
  { src: "/images/poodle.png" },
  { src: "/images/saint-bernard.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages];
    shuffledCards.sort(() => Math.random() - 0.5);
    shuffledCards.map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Canine Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="cover" src="/images/blank.png" alt="card cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
