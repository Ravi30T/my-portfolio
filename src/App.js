// import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'
import './App.css';

const App = () => {
  return (
    <div>
      
      <Home />
      <div className='bg-design'>
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App;
