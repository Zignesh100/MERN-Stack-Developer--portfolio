import logo from './logo.svg';
import './App.css';
import Portfolio from './component/Portfolio';
import AnimatedHeader from './Animation/AnimatedHeader';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <AnimatedHeader/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
