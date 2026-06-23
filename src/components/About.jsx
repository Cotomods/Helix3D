import React from 'react';
import { Layers, Zap, Heart, Award } from 'lucide-react';
import { config } from '../config';

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div className="container">
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.subtitle}>Nuestra Tecnología</span>
          <h2 style={styles.title}>Impresión FDM de Alta Calidad</h2>
          <p style={styles.headerDesc}>
            Utilizamos extrusión precisa de termoplásticos para crear piezas mecánicas resistentes y figuras con acabados excepcionales.
          </p>
        </div>

        {/* Tech Info Row */}
        <div className="glass-panel" style={styles.techContainer}>
          <div style={styles.techText}>
            <h3 style={styles.techTitle}>{config.printingSpecs.fdm.techName}</h3>
            <p style={styles.techDescription}>{config.printingSpecs.fdm.description}</p>
          </div>
          
          <div className="about-materials" style={styles.materialsSection}>
            <h4 style={styles.materialsTitle}>Materiales Disponibles:</h4>
            <div style={styles.badgeContainer}>
              {config.printingSpecs.fdm.materials.map((mat, index) => (
                <span key={index} style={styles.materialBadge}>{mat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values / Features */}
        <div style={styles.valuesGrid}>
          <div style={styles.valueItem}>
            <Zap size={24} style={{ color: 'var(--primary)' }} />
            <h4 style={styles.valueTitle}>Precisión de Capa</h4>
            <p style={styles.valueText}>Espesores de capa de hasta 0.12mm para una gran resolución en detalles y terminaciones suaves.</p>
          </div>
          <div style={styles.valueItem}>
            <Award size={24} style={{ color: 'var(--secondary)' }} />
            <h4 style={styles.valueTitle}>Post-Procesado</h4>
            <p style={styles.valueText}>Retiro meticuloso de soportes de impresión y limpieza manual para garantizar piezas listas para usar.</p>
          </div>
          <div style={styles.valueItem}>
            <Heart size={24} style={{ color: 'var(--accent)' }} />
            <h4 style={styles.valueTitle}>Asesoría Personal</h4>
            <p style={styles.valueText}>Te ayudamos a elegir el filamento ideal (PLA, PETG, ABS, TPU) según el uso final y resistencia que necesites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-darkest)',
    borderTop: '1px solid var(--border-light)',
    borderBottom: '1px solid var(--border-light)',
  },
  header: {
    textAlign: 'center',
    maxWidth: '650px',
    margin: '0 auto 40px auto',
  },
  subtitle: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '12px',
    display: 'block',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '800',
    marginBottom: '16px',
    color: 'var(--accent)',
  },
  headerDesc: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  techContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '40px',
    marginBottom: '60px',
    alignItems: 'center',
  },
  techText: {
    flex: '1.2 1 300px',
  },
  materialsSection: {
    flex: '1 1 250px',
    paddingLeft: '30px',
    borderLeft: '1px solid var(--border-light)',
  },
  techTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: 'var(--accent)',
    marginBottom: '12px',
  },
  techDescription: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  materialsTitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '16px',
  },
  badgeContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  materialBadge: {
    padding: '6px 12px',
    backgroundColor: 'rgba(255, 90, 31, 0.06)',
    border: '1px solid rgba(255, 90, 31, 0.15)',
    borderRadius: '8px',
    color: 'var(--primary)',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '40px',
    borderTop: '1px solid var(--border-light)',
    paddingTop: '50px',
  },
  valueItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  valueTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--accent)',
  },
  valueText: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  }
};
