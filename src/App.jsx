// App.jsx
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Nav from './components/Nav';
    import Home from './components/Home';
    import Gallery from './components/Gallery';
    import Show from './components/Show';
    import Story from './components/Story';

    function App() {
      return (
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/show" element={<Show />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      );
    }

    export default App;