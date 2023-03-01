import * as React from 'react';
import Header from '../../components/Header/index';
import MainBody from '../../components/MainBody/index';
import Footer from '../../components/Footer/index';
import './homePageStyles.css';
function HomePage() {
  return (
    <div className="Homepage">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default HomePage;
