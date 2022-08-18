import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import './styles/style.css';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        <About />
        <Technologies />
      </div>
    </div>
  );
};

export default Root;
