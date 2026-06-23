# Helix 3D — Catálogo de Impresión 3D

¡Bienvenido a **Helix 3D**! Este es un proyecto de catálogo interactivo premium desarrollado con **React** y **Vanilla CSS**, diseñado específicamente para exhibir impresiones 3D (tecnología FDM) y facilitar la cotización personalizada de piezas directamente con el cliente a través de **WhatsApp**.

Ideal como sitio web de portafolio comercial o catálogo virtual de productos de diseño.

---

## 🎨 Características Destacadas

* **🌓 Modo Oscuro / Claro Alternable:** Diseño estético minimalista basado en una paleta de blancos, grises y naranja de acento (`#ff5a1f`). La elección del usuario persiste automáticamente gracias a `localStorage`.
* **🖼️ Visor de Ficha Técnica (Carrusel de Fotos):** Ventana emergente con carrusel interactivo (soporta de 1 a 3 fotos) y navegación cíclica mediante flechas táctiles e indicadores de posición.
* **⚡ Integración Directa con WhatsApp:** En lugar de sistemas de carrito complejos, cada producto genera un mensaje estructurado y listo para enviar al número de WhatsApp del administrador con un solo clic.
* **📝 Cotizador Express Integrado:** Formulario dinámico que compila los detalles técnicos del pedido (material sugerido, tamaño, disponibilidad de archivo .STL y descripción) y abre un chat de WhatsApp con la plantilla formateada.
* **⚙️ Animación Simulada CSS:** Portada interactiva que incluye la animación de un extrusor en tiempo real imprimiendo un poliedro paramétrico.
* **📱 100% Responsivo:** Layout fluido diseñado mediante Flexbox y CSS Grid, compatible con dispositivos móviles, tablets y pantallas de escritorio.

---

## 🛠️ Tecnologías Utilizadas

* **React 19:** Biblioteca para construir interfaces de usuario declarativas y componentes modulares.
* **Vite:** Herramienta de compilación ultrarrápida para desarrollo frontend con Hot Module Replacement (HMR).
* **Vanilla CSS:** Estilos personalizados nativos y variables de diseño dinámicas para control absoluto del rendimiento y la estética.
* **Lucide React:** Set de iconos limpios y vectoriales de alta definición.

---

## 📂 Estructura del Código

El proyecto está diseñado de manera altamente modular para facilitar su edición:

```bash
├── public/                  # Favicon e iconos del sitio
├── src/
│   ├── assets/              # Imágenes de los productos y assets de diseño
│   ├── components/          # Componentes de interfaz de React
│   │   ├── About.jsx        # Especificaciones de materiales (PLA+, PETG, etc.)
│   │   ├── Catalog.jsx      # Barra de búsqueda, categorías y grilla
│   │   ├── CustomOrder.jsx  # Formulario del Cotizador Express
│   │   ├── Footer.jsx       # Enlaces, redes e información institucional
│   │   ├── Hero.jsx         # Bienvenida y animación de impresión 3D
│   │   ├── Navbar.jsx       # Menú e interruptor de Modo Claro/Oscuro
│   │   ├── ProductCard.jsx  # Tarjeta de producto con specs rápidas
│   │   └── ProductModal.jsx # Ventana de Ficha Técnica y Carrusel
│   ├── data/
│   │   └── products.js      # Base de datos local de productos (catálogo)
│   ├── App.jsx              # Punto de entrada de la aplicación y estado del tema
│   ├── config.js            # Archivo de configuración general (WhatsApp, email, redes)
│   ├── index.css            # Hoja de estilos global y variables CSS del tema
│   └── main.jsx             # Render de React
├── package.json             # Scripts y dependencias del proyecto
└── vite.config.js           # Configuración de Vite
```

---

## 🚀 Instalación y Uso Local

Para ejecutar este proyecto de forma local en tu computadora, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Cotomods/Helix3D.git
   cd Helix3D
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la página.*

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   *Genera el paquete optimizado en la carpeta `dist/` listo para subir a hosting.*

---

## ⚙️ Configuración Personalizada

Puedes cambiar la información de contacto global de manera muy sencilla editando el archivo `src/config.js`:
* **WhatsApp:** Modifica `whatsappNumber` con tu código de país y número (ej. `5491136367039`).
* **Correo:** Actualiza `socials.email` (ej. `helix3dprints99@gmail.com`).
* **Instagram:** Cambia `socials.instagram` para apuntar a tu perfil de redes sociales.
* **Productos:** Modifica o agrega nuevos items en `src/data/products.js` siguiendo el formato existente.
