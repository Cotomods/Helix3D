import React, { useEffect } from 'react';
import { X, MessageSquare, Shield, Clock, Compass, Ruler } from 'lucide-react';
import { config } from '../config';

export default function ProductModal({ product, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola! Estaba interesado en el producto "${product.name}".\n\n` +
    `• Material: ${product.material}\n` +
    `• Dimensiones: ${product.dimensions}\n` +
    `• Terminación: ${product.finish}\n\n` +
    `¿Tenés disponibilidad para realizar este trabajo?`
  );
  
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div 
        className="glass-panel animate-fade-in" 
        style={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button onClick={onClose} style={styles.closeBtn} aria-label="Cerrar modal">
          <X size={22} />
        </button>

        {/* Modal Grid */}
        <div style={styles.modalGrid}>
          {/* Left Column: Image */}
          <div style={styles.imageColumn}>
            <img src={product.image} alt={product.name} style={styles.image} />
          </div>

          {/* Right Column: Information */}
          <div style={styles.infoColumn}>
            <span style={styles.category}>{product.category}</span>
            <h2 style={styles.title}>{product.name}</h2>
            
            <p style={styles.description}>{product.description}</p>

            <h3 style={styles.subTitle}>Especificaciones de Impresión</h3>
            
            <div style={styles.specsGrid}>
              <div style={styles.specItem}>
                <Shield size={18} style={styles.icon} />
                <div>
                  <div style={styles.specLabel}>Material</div>
                  <div style={styles.specVal}>{product.material}</div>
                </div>
              </div>
              
              <div style={styles.specItem}>
                <Ruler size={18} style={styles.icon} />
                <div>
                  <div style={styles.specLabel}>Dimensiones (Aprox)</div>
                  <div style={styles.specVal}>{product.dimensions}</div>
                </div>
              </div>
              
              <div style={styles.specItem}>
                <Compass size={18} style={styles.icon} />
                <div>
                  <div style={styles.specLabel}>Terminación</div>
                  <div style={styles.specVal}>{product.finish}</div>
                </div>
              </div>

              <div style={styles.specItem}>
                <Clock size={18} style={styles.icon} />
                <div>
                  <div style={styles.specLabel}>Tiempo Estimado</div>
                  <div style={styles.specVal}>{product.printTime}</div>
                </div>
              </div>
            </div>

            <div style={styles.disclaimer}>
              Nota: El tiempo de impresión y disponibilidad pueden variar según la demanda. El color de filamento/resina se puede coordinar por WhatsApp.
            </div>

            {/* Main WhatsApp CTA */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={styles.ctaButton}
            >
              <MessageSquare size={20} />
              Encargar Impresión por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200,
    padding: '20px',
  },
  modalContent: {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    maxHeight: '90vh',
    overflowY: 'auto',
    backgroundColor: 'var(--bg-dark)',
    border: '1px solid var(--border-light)',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
    padding: '0', // padded inside components
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-close-btn)',
    border: '1px solid var(--border-light)',
    color: 'var(--accent)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all var(--transition-fast)',
  },
  modalGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '500px',
  },
  imageColumn: {
    flex: '1 1 400px',
    height: '450px',
    backgroundColor: 'var(--bg-image-fallback)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  infoColumn: {
    flex: '1.2 1 400px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  category: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '8px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    marginBottom: '16px',
    color: 'var(--accent)',
  },
  description: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '28px',
  },
  subTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: 'var(--accent)',
    borderBottom: '1px solid var(--border-light)',
    paddingBottom: '8px',
  },
  specsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '28px',
  },
  specItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
  },
  icon: {
    color: 'var(--primary)',
    marginTop: '2px',
  },
  specLabel: {
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  specVal: {
    fontSize: '0.925rem',
    color: 'var(--text-main)',
    fontWeight: '500',
  },
  disclaimer: {
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontStyle: 'italic',
    marginBottom: '30px',
  },
  ctaButton: {
    width: '100%',
    padding: '14px 28px',
    fontSize: '1.05rem',
    fontWeight: '600',
    borderRadius: '14px',
  }
};
