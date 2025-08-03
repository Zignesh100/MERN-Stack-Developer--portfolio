import logo from './logo.svg';
import './App.css';
import Portfolio from './component/Portfolio';
import AnimatedHeader from './Animation/AnimatedHeader';
import Footer from './component/Footer';
import Nav from "./component/Nav"
function App() {
  return (
    <div className="App">
    <Nav/>
      <AnimatedHeader/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
