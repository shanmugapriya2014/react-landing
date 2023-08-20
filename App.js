import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/contact';
import Menu from './page/Menu';
import Pagenotfound from './page/Pagenotfount';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="menu" element={<Menu />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;