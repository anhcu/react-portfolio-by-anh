import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About2 from './pages/About2';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './Footer';


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About2') {
      return <About2 />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      {/* Footer Component Will Render Here <Footer/> */}
      <Footer/>
    </div>
  );
}
