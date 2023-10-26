import './App.scss';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <section>
        <Sidebar/>
        <Navbar />
        Hero
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>PortfolioDemo1</section>
      <section>PortfolioDemo2</section>
      <section>PortfolioDemo3</section>
      <section>Contact</section>
    </div>
  );
}

export default App
