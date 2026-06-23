import cyberpunkFigure from '../assets/cyberpunk_figure.png';
import headphoneStand from '../assets/headphone_stand.png';
import geometricLamp from '../assets/geometric_lamp.png';
import cableOrganizer from '../assets/cable_organizer.png';
import dragonBust from '../assets/dragon_bust.png';
import mechanicalGear from '../assets/mechanical_gear.png';

export const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'coleccionables', name: 'Coleccionables' },
  { id: 'funcional', name: 'Funcionales' },
  { id: 'decoracion', name: 'Decoración' }
];

export const products = [
  {
    id: 'cyberpunk-figure',
    name: 'Figura Cyberpunk Warrior',
    description: 'Estatua detallada de estilo cyberpunk. Impresa en PLA+ de alta resolución con detalles definidos y gran precisión geométrica. Ideal para exhibir en tu setup o pintar.',
    category: 'coleccionables',
    image: cyberpunkFigure,
    images: [cyberpunkFigure, dragonBust, geometricLamp],
    material: 'PLA+ Alta Definición (Gris)',
    dimensions: '18cm x 10cm x 8cm',
    finish: 'Retiro de soportes y post-procesado manual',
    printTime: '14 horas',
    difficulty: 'Media (Estructura compleja)'
  },
  {
    id: 'headphone-stand',
    name: 'Soporte de Auriculares Mecánico',
    description: 'Soporte de escritorio futurista para auriculares con base antideslizante y diseño de brazo articulado. Ofrece excelente estabilidad y previene deformaciones en las almohadillas de tus auriculares.',
    category: 'funcional',
    image: headphoneStand,
    images: [headphoneStand, cableOrganizer, mechanicalGear],
    material: 'PLA+ de alta resistencia (Negro / Naranja)',
    dimensions: '25cm x 12cm x 14cm',
    finish: 'Termoplástico texturizado y ensamblado',
    printTime: '12 horas',
    difficulty: 'Baja (Piezas mecánicas robustas)'
  },
  {
    id: 'geometric-lamp',
    name: 'Lámpara Geométrica Paramétrica',
    description: 'Lámpara de diseño exclusivo con patrón paramétrico. Genera un juego de luces y sombras cálido y acogedor. Diseñada para usar de forma segura con lámparas LED frías.',
    category: 'decoracion',
    image: geometricLamp,
    images: [geometricLamp, cableOrganizer, headphoneStand],
    material: 'PLA Translúcido (Blanco)',
    dimensions: '20cm x 18cm x 18cm',
    finish: 'Superficie lisa satinada',
    printTime: '15 horas',
    difficulty: 'Alta (Requiere control de retracción)'
  },
  {
    id: 'cable-organizer',
    name: 'Organizador Modular de Cables',
    description: 'Organizador magnético para cables de escritorio. Permite acoplar y ordenar tus cables USB, de carga y periféricos de forma limpia y accesible. Incluye base adhesiva de alta fijación.',
    category: 'funcional',
    image: cableOrganizer,
    images: [cableOrganizer, mechanicalGear, headphoneStand],
    material: 'PLA Premium (Gris / Naranja)',
    dimensions: '8cm x 3cm x 2cm',
    finish: 'Pulido suave',
    printTime: '3 horas',
    difficulty: 'Baja'
  },
  {
    id: 'dragon-bust',
    name: 'Busto de Dragón Ancestral',
    description: 'Escultura mítica impresa con filamento Silk Copper metalizado. Los detalles de las escamas y cuernos capturan la luz de manera espectacular, dando un acabado bronce/cobre antiguo realista sin necesidad de pintura.',
    category: 'coleccionables',
    image: dragonBust,
    images: [dragonBust, cyberpunkFigure, geometricLamp],
    material: 'Silk PLA (Cobre Metalizado)',
    dimensions: '16cm x 12cm x 11cm',
    finish: 'Brillo metálico sedoso',
    printTime: '10 horas',
    difficulty: 'Media'
  },
  {
    id: 'mechanical-gear',
    name: 'Set de Engranajes Helicoidales',
    description: 'Réplica y demostración de engranajes mecánicos funcionales. Excelente para proyectos escolares, demostraciones de ingeniería o como juguete antiestrés para tu escritorio.',
    category: 'funcional',
    image: mechanicalGear,
    images: [mechanicalGear, cableOrganizer, headphoneStand],
    material: 'PETG / ABS Industrial (Rojo / Negro)',
    dimensions: '12cm x 12cm x 4cm',
    finish: 'Resistente al calor e impacto mecánico',
    printTime: '6 horas',
    difficulty: 'Media-Alta (Ajuste de tolerancias fino)'
  }
];
