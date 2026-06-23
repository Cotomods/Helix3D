import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import CustomOrder from './components/CustomOrder';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={styles.appContainer}>
      {/* Main Layout Components */}
      <Navbar />
      
      <main>
        <Hero />
        <Catalog onSelectProduct={handleSelectProduct} />
        <CustomOrder />
        <About />
      </main>

      <Footer />

      {/* Extended Product Detail Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  }
};
