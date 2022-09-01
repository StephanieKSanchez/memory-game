import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/images/blank.png" },
  { src: "/images/cane-corso.png" },
  { src: "/images/chichuahua.png" },
  { src: "/images/doberman.png" },
  { src: "/images/german-shepherd.png" },
  { src: "/images/poodle.png" },
  { src: "/images/saint-bernard.png" },
  { src: "/images/white.png" },
];

function App() {
  const [cards, setCards] = useState([]);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages];
    shuffledCards.sort(() => Math.random() - 0.5);
    shuffledCards.map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };
  return (
    <div className="App">
      <h1>Canine Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
