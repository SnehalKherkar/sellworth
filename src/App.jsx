import { useEffect } from 'react'

import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
 

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default App
