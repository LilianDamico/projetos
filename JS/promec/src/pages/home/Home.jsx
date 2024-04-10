import React from 'react';
import Head from '../../components/head/Head';
import Footer from '../../components/footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Head />
      <section className='container'>
        <div class="grid-container">
          <div class="grid-item full-width">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
        </div>
      </section>      
      <Footer />
    </div>
  )
}

export default Home;
