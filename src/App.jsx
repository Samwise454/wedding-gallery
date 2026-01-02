// App.jsx
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Nav from './components/Nav';
    import Home from './components/Home';
    import Gallery from './components/Gallery';
    import Show from './components/Show';
    import Story from './components/Story';
    import Control from './components/Control';
    import Admin from './components/Admin';
    import Controladmin from './components/Controladmin';
    import Controldash from './components/Controldash';

    function App() {
      return (
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/show" element={<Show />} />
          <Route path="/story" element={<Story />} />
          <Route path="/control" element={<Control />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Controladmin" element={<Controladmin />} />
          <Route path="/controldash" element={<Controldash />} />
        </Routes>
      );
    }

    export default App;