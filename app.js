// Header Component
const Header = () => {
  return <h1>React Tic Tac Toe !!!!</h1>;
};

// Player Component
const Player = () => {
  return (
    <div className="X">
      <h2>Player X</h2>
      <h3>Wins: </h3>
    </div>
  );
};

// Square Component
const Square = () => {
  return (
    <div>
      <h4>square</h4>
    </div>
  );
};

const Board = () => {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

// App Component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Player />
        <Player />
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
