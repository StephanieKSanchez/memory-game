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
  return (
    <div className="App">
      <h1>Canine Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
