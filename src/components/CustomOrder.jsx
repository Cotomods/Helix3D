import React, { useState } from 'react';
import { Send, FileCode, CheckCircle, HelpCircle } from 'lucide-react';
import { config } from '../config';

export default function CustomOrder() {
  const [material, setMaterial] = useState('PLA+');
  const [size, setSize] = useState('Mediano (10cm - 20cm)');
  const [description, setDescription] = useState('');
  const [hasStl, setHasStl] = useState('no');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      alert('Por favor, describe brevemente tu pedido.');
      return;
    }

    const message = encodeURIComponent(
      `Hola! Me gustaría cotizar una impresión 3D personalizada:\n\n` +
      `• Material preferido: ${material}\n` +
      `• Tamaño aproximado: ${size}\n` +
      `• Archivo STL listo: ${hasStl === 'yes' ? 'Sí, tengo el archivo' : 'No, necesito ayuda/diseño'}\n` +
      `• Descripción del objeto: ${description}\n\n` +
      `¿Me podés indicar el presupuesto y cómo coordinamos el archivo?`
    );

    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${message}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    
    // Set temporary success state
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="custom-order" style={styles.section}>
      <div className="container" style={styles.gridContainer}>
        {/* Left Column: Form info */}
        <div style={styles.infoColumn} className="animate-fade-in">
          <span style={styles.sectionBadge}>Servicio a Pedido</span>
          <h2 style={styles.title}>¿Tenés un diseño propio o un repuesto que quieras imprimir?</h2>
          
          <p style={styles.description}>
            Si descargaste un archivo STL de sitios como Thingiverse o Printables, o si tenés un bosquejo de una pieza rota, 
            completá este formulario. Te redirigirá a WhatsApp con toda la información técnica lista para que te demos un presupuesto.
          </p>

          <div style={styles.cardsWrapper}>
            <div className="glass-panel" style={styles.cardItem}>
              <div style={styles.cardHeader}>
                <FileCode size={20} style={{ color: 'var(--primary)' }} />
                <h4 style={styles.cardTitle}>Formatos Soportados</h4>
              </div>
              <p style={styles.cardText}>Aceptamos archivos .STL, .OBJ, .3MF y links de descarga.</p>
            </div>

            <div className="glass-panel" style={styles.cardItem}>
              <div style={styles.cardHeader}>
                <CheckCircle size={20} style={{ color: 'var(--secondary)' }} />
                <h4 style={styles.cardTitle}>Asesoramiento Gratis</h4>
              </div>
              <p style={styles.cardText}>Te aconsejamos sobre cuál es el mejor material y orientación para tu pieza.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div style={styles.formColumn}>
          <form onSubmit={handleSubmit} className="glass-panel" style={styles.form}>
            <h3 style={styles.formTitle}>Cotizador Express</h3>
            <p style={styles.formSubtitle}>Completá los detalles de tu pieza:</p>

            {/* Material selector */}
            <div className="form-group">
              <label className="form-label">Material sugerido</label>
              <select 
                value={material} 
                onChange={(e) => setMaterial(e.target.value)} 
                className="form-select"
              >
                <option value="PLA+">PLA+ (Figuras, decoración, prototipos)</option>
                <option value="PETG">PETG (Piezas de exterior, resistencia química)</option>
                <option value="ABS">ABS / ASA (Resistencia técnica y mecánica)</option>
                <option value="Flexible (TPU)">Flexible TPU (Gomas, juntas, fundas)</option>
                <option value="No estoy seguro">No estoy seguro (Te asesoramos)</option>
              </select>
            </div>

            {/* Size selector */}
            <div className="form-group">
              <label className="form-label">Tamaño aproximado</label>
              <select 
                value={size} 
                onChange={(e) => setSize(e.target.value)} 
                className="form-select"
              >
                <option value="Chico (Menos de 10cm)">Chico (Menos de 10cm)</option>
                <option value="Mediano (10cm - 20cm)">Mediano (10cm - 20cm)</option>
                <option value="Grande (20cm - 30cm)">Grande (20cm - 30cm)</option>
                <option value="Muy Grande (Más de 30cm - Requiere ensamble)">Muy Grande (Más de 30cm)</option>
              </select>
            </div>

            {/* STL files status */}
            <div className="form-group">
              <label className="form-label">¿Tenés el archivo 3D listo (.stl, .obj)?</label>
              <div style={styles.radioGroup}>
                <label style={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="stl" 
                    value="yes"
                    checked={hasStl === 'yes'}
                    onChange={() => setHasStl('yes')}
                    style={styles.radioInput}
                  />
                  <span>Sí, tengo el archivo</span>
                </label>
                <label style={styles.radioLabel}>
                  <input 
                    type="radio" 
                    name="stl" 
                    value="no"
                    checked={hasStl === 'no'}
                    onChange={() => setHasStl('no')}
                    style={styles.radioInput}
                  />
                  <span>No, necesito ayuda</span>
                </label>
              </div>
            </div>

            {/* Description textarea */}
            <div className="form-group">
              <label className="form-label">Descripción de tu idea o pieza</label>
              <textarea 
                rows="4"
                placeholder="Ej: Necesito un engranaje de repuesto de 5cm de diámetro con 15 dientes, o quiero imprimir un busto de Batman que vi en internet..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-textarea"
                style={{ resize: 'vertical' }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-whatsapp" 
              style={{ width: '100%', padding: '14px', borderRadius: '10px', fontSize: '1rem', marginTop: '10px' }}
            >
              <Send size={18} />
              Enviar a mi WhatsApp
            </button>

            {isSubmitted && (
              <div style={styles.successMessage}>
                ✓ Redirigiendo a WhatsApp... ¡Envíale el mensaje para iniciar tu consulta!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 0',
    background: 'radial-gradient(ellipse at bottom, var(--radial-glow) 0%, var(--bg-darkest) 70%)',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoColumn: {
    flex: '1 1 450px',
    maxWidth: '600px',
  },
  sectionBadge: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '12px',
    display: 'block',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '24px',
    color: 'var(--accent)',
  },
  description: {
    fontSize: '1.05rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  cardsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cardItem: {
    padding: '20px 24px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--accent)',
  },
  cardText: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    paddingLeft: '32px',
  },
  formColumn: {
    flex: '1 1 400px',
    maxWidth: '520px',
    width: '100%',
  },
  form: {
    padding: '40px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--accent)',
    marginBottom: '4px',
  },
  formSubtitle: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    marginBottom: '24px',
  },
  radioGroup: {
    display: 'flex',
    gap: '24px',
    marginTop: '6px',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontSize: '0.925rem',
  },
  radioInput: {
    accentColor: 'var(--primary)',
    cursor: 'pointer',
    width: '16px',
    height: '16px',
  },
  successMessage: {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: 'rgba(37, 211, 102, 0.1)',
    border: '1px solid rgba(37, 211, 102, 0.3)',
    borderRadius: '8px',
    color: '#25D366',
    fontSize: '0.85rem',
    textAlign: 'center',
  }
};
