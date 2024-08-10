import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Certification from './components/Certification';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Profile/>
     <Certification/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
