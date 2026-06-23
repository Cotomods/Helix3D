import React, { useState } from 'react';
import { Search, Filter, Cpu, SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';

export default function Catalog({ onSelectProduct }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="catalog" style={styles.catalogSection}>
      <div className="container">
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.headerText}>
            <span style={styles.subtitle}>Galería de Diseños</span>
            <h2 style={styles.title}>Nuestras Impresiones</h2>
          </div>
          
          {/* Search bar & Category select */}
          <div style={styles.filterContainer}>
            {/* Search Input */}
            <div style={styles.searchWrapper}>
              <Search size={18} style={styles.searchIcon} />
              <input 
                type="text" 
                className="search-input"
                placeholder="Buscar figuras, soportes, materiales..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            
            {/* Category Pill Filters (Desktop) */}
            <div style={styles.categoriesWrapper}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    ...styles.categoryPill,
                    ...(selectedCategory === cat.id ? styles.categoryPillActive : {})
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid-cols-3d">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onViewDetails={onSelectProduct} 
              />
            ))}
          </div>
        ) : (
          <div style={styles.noResults} className="glass-panel">
            <Cpu size={48} style={{ color: 'var(--secondary)', marginBottom: '16px', opacity: 0.7 }} />
            <h3>No encontramos resultados</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
              Intenta buscando con otras palabras o limpia los filtros.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('todos'); }}
              className="btn btn-secondary"
              style={{ marginTop: '20px' }}
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  catalogSection: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-darkest)',
    borderTop: '1px solid var(--border-light)',
    borderBottom: '1px solid var(--border-light)',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '50px',
  },
  headerText: {
    flex: '1 1 300px',
  },
  subtitle: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    display: 'block',
    marginBottom: '8px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--accent)',
  },
  filterContainer: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: '1.5 1 400px',
    justifyContent: 'flex-end',
  },
  searchWrapper: {
    position: 'relative',
    flex: '1 1 240px',
    maxWidth: '400px',
  },
  searchIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--text-dark)',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px 12px 42px',
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-light)',
    borderRadius: '12px',
    color: 'var(--text-main)',
    fontSize: '0.95rem',
    transition: 'all var(--transition-fast)',
    outline: 'none',
  },
  categoriesWrapper: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  categoryPill: {
    padding: '10px 18px',
    background: '#ffffff',
    border: '1px solid var(--border-light)',
    borderRadius: '30px',
    color: 'var(--text-muted)',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
  categoryPillActive: {
    background: 'var(--primary)',
    border: '1px solid var(--primary)',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(255, 90, 31, 0.2)',
  },
  noResults: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 40px',
    textAlign: 'center',
  }
};
