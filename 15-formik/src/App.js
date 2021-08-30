import './App.css';
import rocketImg from './assets/rocket.png';
import Signup from './components/Signup';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src={rocketImg} alt="Rocket" />
        </div>
      </div>
    </div>
  );
}

export default App;
