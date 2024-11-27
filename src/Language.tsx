import './index.css';
import { useState } from 'react'
import Navbar from './components/organisms/NavBar';
import About from './components/organisms/About';
import Skills from './components/organisms/Skills';
export default function Language() {

    const [language, setLanguage] = useState('BR');
    
    return (
      <div className="App">
        <Navbar language={language} setLanguage={setLanguage} />
        <About language={language} />
        <Skills language={language} />
      </div>
    );
  }