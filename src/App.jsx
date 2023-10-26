import './App.scss';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <section id='Home'>
        <Sidebar />
        <Navbar />
        Hero
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>PortfolioDemo1</section>
      <section>PortfolioDemo2</section>
      <section>PortfolioDemo3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
}

export default App
