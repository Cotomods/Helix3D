import React, { useState } from 'react';
import { Layers, Menu, X, Mail, Info, Sun, Moon } from 'lucide-react';
import { config } from '../config';

export default function Navbar({ theme, toggleTheme }) {
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
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            style={styles.themeToggle} 
            aria-label="Alternar tema oscuro/claro"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

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
          
          {/* Mobile Theme Toggle Row */}
          <div style={styles.mobileToggleRow}>
            <span style={styles.mobileToggleText}>Modo {theme === 'dark' ? 'Oscuro' : 'Claro'}</span>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              style={styles.mobileThemeToggle} 
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun size={18} style={{ color: 'var(--primary)' }} /> : <Moon size={18} />}
            </button>
          </div>

          <a 
            href={`https://wa.me/${config.whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={toggleMenu}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '5px' }}
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
  },
  themeToggle: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '50%',
    transition: 'all var(--transition-fast)',
    backgroundColor: 'var(--bg-darkest)',
    border: '1px solid var(--border-light)',
  },
  mobileToggleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid var(--border-light)',
  },
  mobileToggleText: {
    color: 'var(--text-main)',
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  mobileThemeToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-dark)',
    border: '1px solid var(--border-light)',
  }
};
