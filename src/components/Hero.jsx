import React from 'react';
import { Sparkles, ArrowRight, Activity } from 'lucide-react';
import { config } from '../config';

export default function Hero() {
  return (
    <section id="hero" style={styles.heroSection}>
      <div className="container" style={styles.gridContainer}>
        {/* Left Column: Text & CTA */}
        <div style={styles.textColumn} className="animate-fade-in">
          <div className="hero-badge">
            <Sparkles size={14} />
            <span>Precisión y Calidad Premium</span>
          </div>
          
          <h1 style={styles.title}>
            Llevamos tus ideas al mundo <br />
            <span className="gradient-text">físico en 3D</span>
          </h1>
          
          <p style={styles.description}>
            Explora nuestro catálogo de figuras coleccionables, prototipos mecánicos y objetos de decoración. 
            Sin sistemas de pago complejos: mira lo que te gusta, consúltanos directamente por WhatsApp 
            y coordinamos tu impresión en minutos.
          </p>
          
          <div style={styles.ctaContainer}>
            <a href="#catalog" className="btn btn-primary">
              Ver Catálogo
              <ArrowRight size={18} />
            </a>
            <a href="#custom-order" className="btn btn-secondary">
              Pedido Personalizado
            </a>
          </div>

          <div style={styles.techBadges}>
            <div style={styles.techBadgeItem}>
              <Activity size={16} style={{ color: 'var(--primary)' }} />
              <span>Impresión FDM</span>
            </div>
            <div style={styles.techBadgeItem}>
              <Activity size={16} style={{ color: 'var(--secondary)' }} />
              <span>PLA, PETG, ABS</span>
            </div>
            <div style={styles.techBadgeItem}>
              <Activity size={16} style={{ color: 'var(--accent)' }} />
              <span>Alta Definición</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive CSS Animation of a 3D Printer Printing */}
        <div style={styles.visualColumn}>
          <div style={styles.printerContainer}>
            {/* The Printing Bed Grid */}
            <div style={styles.printerBed}></div>
            
            {/* The 3D Object being printed (parametric shape) */}
            <svg style={styles.printedObject} viewBox="0 0 100 100">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="50%" stopColor="var(--secondary)" />
                  <stop offset="100%" stopColor="var(--accent)" />
                </linearGradient>
              </defs>
              {/* Spinning/rotating wireframe polyhedron */}
              <polygon 
                points="50,15 90,35 90,75 50,95 10,75 10,35" 
                fill="none" 
                stroke="url(#grad)" 
                strokeWidth="1.5"
                style={styles.rotatingPolygon}
              />
              <line x1="50" y1="15" x2="50" y2="95" stroke="url(#grad)" strokeWidth="0.8" opacity="0.6" />
              <line x1="10" y1="35" x2="90" y2="75" stroke="url(#grad)" strokeWidth="0.8" opacity="0.6" />
              <line x1="90" y1="35" x2="10" y2="75" stroke="url(#grad)" strokeWidth="0.8" opacity="0.6" />
              <circle cx="50" cy="55" r="22" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="3 3" />
            </svg>

            {/* Glowing laser lines indicating progress */}
            <div style={styles.laserLine}></div>
            <div style={styles.extruderNozzle}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    padding: '80px 0 100px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '60px',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // wraps on mobile
  },
  textColumn: {
    flex: '1 1 500px',
    maxWidth: '650px',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    lineHeight: '1.15',
    marginBottom: '24px',
  },
  description: {
    fontSize: '1.15rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '35px',
  },
  ctaContainer: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  techBadges: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },
  techBadgeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
  },
  visualColumn: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  printerContainer: {
    width: '320px',
    height: '320px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  printerBed: {
    position: 'absolute',
    bottom: '10px',
    width: '260px',
    height: '14px',
    background: 'var(--printer-bed-bg)',
    border: '1px solid var(--printer-bed-border)',
    borderRadius: '4px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
  },
  printedObject: {
    width: '200px',
    height: '200px',
    zIndex: 2,
    filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.05))',
  },
  rotatingPolygon: {
    transformOrigin: '50px 55px',
    animation: 'spin 20s linear infinite',
  },
  laserLine: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: '80%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
    boxShadow: '0 0 8px var(--primary)',
    animation: 'scan 4s ease-in-out infinite alternate',
    zIndex: 3,
  },
  extruderNozzle: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    backgroundColor: '#374151',
    border: '2px solid #4b5563',
    clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
    top: '23%', // dynamic positioning via keyframe alignment
    left: '47%',
    animation: 'moveExtruder 4s ease-in-out infinite alternate',
    zIndex: 4,
    boxShadow: '0 0 10px rgba(0,0,0,0.8)',
  }
};
