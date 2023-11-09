import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Spline from '@splinetool/react-spline';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Spline scene='https://prod.spline.design/oEfI1M6uT3gDzr5G/scene.splinecode' />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section>PortfolioDemo1</section>
      <section>PortfolioDemo2</section>
      <section>PortfolioDemo3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
}

export default App
