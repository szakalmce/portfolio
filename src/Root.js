import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import './styles/style.css';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Root = () => {
  return (
    <div>
      <Navbar />
      <div>
        <About />
        <Technologies />
        <Services />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
