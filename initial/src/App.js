import "./App.css";
import swing from "./Images/swing.jpg";
import swinger from "./Images/swinger.jpg";
import slider from "./Images/slider.jpg";
import "./styles.css";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <div className="main">
        <img className="thumbnail" src={swing} alt="swing" />
        <img className="thumbnail" src={swinger} alt="swinger" />
        <img className="thumbnail" src={slider} alt="slider" />
      </div>
    </div>
  );
}

export default App;
