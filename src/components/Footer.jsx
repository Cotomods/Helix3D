import React from 'react';
import { Layers, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { config } from '../config';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.topSection}>
          {/* Logo & Info */}
          <div style={styles.brandCol}>
            <div style={styles.logo}>
              <Layers size={24} style={{ color: 'var(--primary)' }} />
              <span style={styles.logoText}>
                {config.storeName.split(' ')[0]}
                <span style={{ color: 'var(--secondary)' }}> {config.storeName.split(' ')[1] || '3D'}</span>
              </span>
            </div>
            <p style={styles.subtitle}>{config.storeSubtitle}</p>
            <p style={styles.location}>
              <MapPin size={16} style={{ color: 'var(--accent)' }} />
              <span>{config.socials.location}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div style={styles.linksCol}>
            <h4 style={styles.colTitle}>Navegación</h4>
            <ul style={styles.linksList}>
              <li><a href="#hero" style={styles.link}>Inicio</a></li>
              <li><a href="#catalog" style={styles.link}>Catálogo de Productos</a></li>
              <li><a href="#custom-order" style={styles.link}>Pedido Personalizado</a></li>
              <li><a href="#about" style={styles.link}>Tecnología y Materiales</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div style={styles.contactCol}>
            <h4 style={styles.colTitle}>Contacto Directo</h4>
            <div style={styles.contactItems}>
              <a 
                href={`https://wa.me/${config.whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.contactLink}
              >
                <MessageSquare size={18} style={{ color: '#25D366' }} />
                <span>Enviar WhatsApp</span>
              </a>
              <a href={`https://instagram.com/${config.socials.instagram}`} target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                <Instagram size={18} style={{ color: '#E1306C' }} />
                <span>@{config.socials.instagram}</span>
              </a>
              <a href={`mailto:${config.socials.email}`} style={styles.contactLink}>
                <Mail size={18} style={{ color: 'var(--primary)' }} />
                <span>{config.socials.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} {config.storeName}. Creado para exhibir impresiones 3D.
          </p>
          <button onClick={scrollToTop} style={styles.scrollBtn} aria-label="Volver arriba">
            <span>Volver arriba</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--bg-dark)',
    padding: '80px 0 40px 0',
    borderTop: '1px solid var(--border-light)',
    color: 'var(--text-muted)',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap',
    marginBottom: '60px',
  },
  brandCol: {
    flex: '1.5 1 300px',
    maxWidth: '400px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
  },
  logoText: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: 'var(--accent)',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    color: 'var(--text-main)',
    fontWeight: '500',
  },
  linksCol: {
    flex: '1 1 180px',
  },
  colTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '24px',
  },
  linksList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  link: {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontSize: '0.925rem',
    transition: 'color var(--transition-fast)',
  },
  contactCol: {
    flex: '1.2 1 220px',
  },
  contactItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contactLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'var(--text-main)',
    textDecoration: 'none',
    fontSize: '0.925rem',
    fontWeight: '500',
    transition: 'opacity var(--transition-fast)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--border-light)',
    marginBottom: '30px',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  copyright: {
    fontSize: '0.85rem',
  },
  scrollBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'background var(--transition-fast)',
  }
};
