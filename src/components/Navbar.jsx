import React, { useState } from 'react';
import { Layers, Menu, X, Mail, Info } from 'lucide-react';
import { config } from '../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass-navbar" style={styles.navbar}>
      <div className="container" style={styles.container}>
        {/* Logo / Brand */}
        <a href="#hero" style={styles.logo}>
          <Layers size={28} className="glow-icon" style={{ color: 'var(--primary)' }} />
          <span style={styles.logoText}>
            {config.storeName.split(' ')[0]}
            <span style={{ color: 'var(--primary)' }}> {config.storeName.split(' ')[1] || '3D'}</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={styles.desktopNav}>
          <a href="#catalog" style={styles.navLink}>Catálogo</a>
          <a href="#custom-order" style={styles.navLink}>Pedido Especial</a>
          <a href="#about" style={styles.navLink}>Tecnología</a>
          <a 
            href={`https://wa.me/${config.whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={styles.navBtn}
          >
            Contacto Directo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="mobile-menu-btn" style={styles.mobileMenuBtn} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div style={styles.mobileDropdown} className="animate-fade-in">
          <a href="#catalog" onClick={toggleMenu} style={styles.mobileNavLink}>Catálogo</a>
          <a href="#custom-order" onClick={toggleMenu} style={styles.mobileNavLink}>Pedido Especial</a>
          <a href="#about" onClick={toggleMenu} style={styles.mobileNavLink}>Tecnología</a>
          <a 
            href={`https://wa.me/${config.whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={toggleMenu}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '10px' }}
          >
            Contacto Directo
          </a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '16px 0',
    backgroundColor: 'var(--bg-navbar)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border-light)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    color: 'var(--accent)',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  navLink: {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color var(--transition-fast)',
  },
  // We can add hover transitions in global CSS
  navBtn: {
    padding: '8px 18px',
    fontSize: '0.9rem',
  },
  mobileMenuBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-main)',
    cursor: 'pointer',
  },
  mobileDropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'var(--bg-darkest)',
    borderBottom: '1px solid var(--border-light)',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  mobileNavLink: {
    color: 'var(--text-main)',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
    padding: '10px 0',
    borderBottom: '1px solid var(--border-light)',
  }
};
