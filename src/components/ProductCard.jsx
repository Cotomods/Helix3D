import React from 'react';
import { MessageSquare, ExternalLink, HelpCircle } from 'lucide-react';
import { config } from '../config';

export default function ProductCard({ product, onViewDetails }) {
  const whatsappMessage = encodeURIComponent(`Hola, estaba interesado en el producto: ${product.name}`);
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="glass-panel" style={styles.card}>
      {/* Product Image */}
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <span style={styles.categoryBadge}>{product.category}</span>
      </div>

      {/* Product Details */}
      <div style={styles.content}>
        <h3 style={styles.title}>{product.name}</h3>
        
        {/* Specs summary */}
        <div style={styles.specs}>
          <div style={styles.specItem}>
            <span style={styles.specLabel}>Material:</span>
            <span style={styles.specValue}>{product.material}</span>
          </div>
          <div style={styles.specItem}>
            <span style={styles.specLabel}>Medidas:</span>
            <span style={styles.specValue}>{product.dimensions}</span>
          </div>
        </div>

        <p style={styles.description}>{product.description}</p>

        {/* Action Buttons */}
        <div style={styles.actions}>
          <button 
            onClick={() => onViewDetails(product)}
            className="btn btn-secondary" 
            style={styles.detailsBtn}
          >
            Ficha Técnica
          </button>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={styles.whatsappBtn}
          >
            <MessageSquare size={18} />
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    height: '100%',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '220px',
    backgroundColor: '#f3f4f6',
    overflow: 'hidden',
    borderBottom: '1px solid var(--border-light)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform var(--transition-normal)',
  },
  categoryBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '4px 10px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid var(--border-light)',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '12px',
    color: 'var(--accent)',
  },
  specs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '14px',
    fontSize: '0.85rem',
    padding: '10px 14px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid var(--border-light)',
  },
  specItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  specLabel: {
    color: 'var(--text-muted)',
    fontWeight: '500',
  },
  specValue: {
    color: 'var(--accent)',
    fontWeight: '500',
  },
  description: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
    marginBottom: '20px',
    flexGrow: 1,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  actions: {
    display: 'flex',
    gap: '10px',
    marginTop: 'auto',
  },
  detailsBtn: {
    flex: '1',
    padding: '10px 14px',
    fontSize: '0.875rem',
  },
  whatsappBtn: {
    flex: '1.3',
    padding: '10px 14px',
    fontSize: '0.875rem',
    gap: '6px',
  }
};
