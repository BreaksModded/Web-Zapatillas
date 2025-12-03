<div align="center">

# 👟 LimpiaZapatillas

### Servicio Artesanal de Limpieza Profesional de Zapatillas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-00C7B7?style=for-the-badge)](https://web.dev/responsive-web-design-basics/)

[Demo en Vivo](#) · [Reportar Bug](https://github.com/tu-usuario/limpiazapatillas/issues) · [Solicitar Función](https://github.com/tu-usuario/limpiazapatillas/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Comenzando](#-comenzando)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación](#instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Personalización](#-personalización)
- [Optimización y Rendimiento](#-optimización-y-rendimiento)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

**LimpiaZapatillas** es una landing page moderna y completamente responsive diseñada para un servicio artesanal de limpieza profesional de zapatillas. El proyecto combina un diseño visual atractivo con funcionalidades interactivas para ofrecer una experiencia de usuario excepcional.

### ✨ ¿Por qué este proyecto?

- **Diseño Premium**: Interfaz moderna con gradientes, animaciones suaves y efectos visuales profesionales
- **100% Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Performance First**: Código limpio y optimizado (30KB CSS, sin dependencias pesadas)
- **SEO Ready**: Meta tags optimizados para motores de búsqueda y redes sociales
- **Accesibilidad**: Diseño pensado en la experiencia del usuario

---

## 🚀 Características Principales

### 🎨 Diseño y UX

- ✅ **Hero Section Impactante**: Imagen de fondo con overlay y CTAs destacados
- ✅ **Galería Interactiva**: Comparación antes/después con overlay de imágenes ampliadas
- ✅ **Animaciones Suaves**: Efectos de scroll reveal y transiciones fluidas
- ✅ **Sección de Garantía**: Reemplaza testimonios falsos con promesas reales
- ✅ **FAQ Integrado**: Información detallada del servicio en formato pregunta-respuesta

### 📱 Funcionalidades

- ✅ **Formulario de Contacto**: Integración preparada con EmailJS
- ✅ **Botón Flotante WhatsApp**: Acceso directo con mensaje predefinido
- ✅ **Navegación Sticky**: Header fijo con indicador de sección activa
- ✅ **Menú Móvil**: Hamburger menu con animación de pantalla completa
- ✅ **Información Práctica**: Tiempos de entrega, zonas de servicio, métodos de pago

### ⚡ Performance

- ✅ **CSS Optimizado**: Reducido de 53KB a 30KB (40% menos)
- ✅ **Sin Duplicados**: Código limpio y mantenible
- ✅ **Vanilla JavaScript**: Sin frameworks pesados
- ✅ **Lazy Loading Ready**: Preparado para optimización de imágenes

---

## 🛠️ Tecnologías Utilizadas

### Core

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript (ES6+)** - Interactividad sin dependencias

### Librerías y Recursos

- **[Font Awesome 6.0](https://fontawesome.com/)** - Iconografía
- **[Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins)** - Tipografía
- **[EmailJS](https://www.emailjs.com/)** - Envío de formularios (opcional)

### Herramientas de Desarrollo

- Git para control de versiones
- Python para scripts de optimización
- Navegadores modernos para testing

---

## 🏁 Comenzando

### Prerrequisitos

Solo necesitas un navegador web moderno. Para desarrollo local:

```bash
# Opcional: Servidor HTTP simple con Python
python -m http.server 8000

# O con Node.js
npx http-server
```

### Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/limpiazapatillas.git
cd limpiazapatillas
```

2. **Abre el proyecto**

```bash
# Opción 1: Abre index.html directamente en tu navegador
open index.html

# Opción 2: Usa un servidor local (recomendado)
python -m http.server 8000
# Luego visita http://localhost:8000
```

3. **¡Listo!** 🎉

---

## 💻 Uso

### Desarrollo Local

```bash
# Inicia un servidor local
python -m http.server 8000

# Abre tu navegador en
http://localhost:8000
```

### Despliegue

El sitio es estático y puede desplegarse en cualquier servicio de hosting:

- **GitHub Pages**: Gratis y fácil
- **Netlify**: Deploy automático desde Git
- **Vercel**: Optimizado para sitios estáticos
- **Servidor tradicional**: Sube los archivos vía FTP

---

## 📁 Estructura del Proyecto

```
limpiazapatillas/
│
├── index.html              # Página principal
├── styles.css              # Estilos (optimizado, 30KB)
├── script.js               # Funcionalidades JavaScript
├── script-emailjs.js       # Código de referencia para EmailJS
│
├── img/                    # Directorio de imágenes
│   ├── Inicio.jpg         # Hero background
│   ├── antes1.jpg - antes6.jpg
│   └── despues1.jpg - despues6.jpg
│
├── .git/                   # Control de versiones
└── README.md              # Este archivo
```

### Archivos Clave

| Archivo | Descripción | Líneas |
|---------|-------------|--------|
| `index.html` | Estructura HTML completa con todas las secciones | ~500 |
| `styles.css` | Estilos optimizados y responsive | ~1600 |
| `script.js` | Lógica de interacción y animaciones | ~350 |

---

## 🎨 Personalización

### 1. Información de Contacto

Actualiza los siguientes placeholders en `index.html`:

```html
<!-- Busca y reemplaza -->
[Tu Ciudad]           → Tu ciudad real
+34 600 000 000      → Tu teléfono
info@limpiazapatillas.com → Tu email
```

**Guía completa**: Consulta `guia-actualizar-info.md` en el directorio del proyecto.

### 2. Colores y Branding

Modifica las variables de color en `styles.css`:

```css
/* Gradiente principal */
background: linear-gradient(90deg, #3498db, #1abc9c);

/* Cambia a tu paleta */
background: linear-gradient(90deg, #TU_COLOR_1, #TU_COLOR_2);
```

### 3. Configurar EmailJS

Para activar el formulario de contacto:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Sigue la guía en `guia-emailjs.md`
3. Actualiza las credenciales en `script.js`

```javascript
// Descomenta y actualiza estas líneas en script.js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
```

### 4. Imágenes

Reemplaza las imágenes en la carpeta `img/`:

- **Hero**: `img/Inicio.jpg` (1920x1080px recomendado)
- **Galería**: `img/antes1-6.jpg` y `img/despues1-6.jpg` (800x600px)

---

## ⚡ Optimización y Rendimiento

### Métricas Actuales

- **CSS**: 30KB (reducido 40% desde 53KB)
- **JavaScript**: 15KB (vanilla, sin frameworks)
- **HTML**: 24KB (semántico y limpio)

### Mejoras Implementadas

✅ **Eliminación de duplicados CSS** - Reducción masiva de código redundante  
✅ **Consolidación de media queries** - Mejor organización responsive  
✅ **Propiedades estándar** - Compatibilidad cross-browser mejorada  
✅ **Código modular** - Fácil mantenimiento y escalabilidad  

### Optimizaciones Futuras

- [ ] Minificación de CSS/JS para producción
- [ ] Lazy loading de imágenes
- [ ] WebP para imágenes con fallback
- [ ] Service Worker para PWA

---

## 🗺️ Roadmap

### Versión 1.0 (Actual) ✅

- [x] Diseño responsive completo
- [x] Galería interactiva
- [x] Formulario de contacto
- [x] Sección de garantía
- [x] FAQ integrado
- [x] Optimización CSS

### Versión 1.1 (Próximo)

- [ ] Sistema de reservas online
- [ ] Calculadora de precios
- [ ] Blog integrado
- [ ] Multiidioma (ES/EN)

### Versión 2.0 (Futuro)

- [ ] Panel de administración
- [ ] Sistema de pagos
- [ ] App móvil complementaria
- [ ] Programa de fidelización

---

## 🤝 Contribuir

Las contribuciones son lo que hace que la comunidad open source sea un lugar increíble para aprender, inspirar y crear. **Cualquier contribución que hagas será muy apreciada**.

1. Fork el Proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus Cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---

## 📞 Contacto

**LimpiaZapatillas** - [@limpiazapatillas](https://twitter.com/limpiazapatillas)

Email: info@limpiazapatillas.com

Link del Proyecto: [https://github.com/tu-usuario/limpiazapatillas](https://github.com/tu-usuario/limpiazapatillas)

---

## 🙏 Agradecimientos

- [Font Awesome](https://fontawesome.com) por los iconos
- [Google Fonts](https://fonts.google.com) por la tipografía Poppins
- [EmailJS](https://www.emailjs.com/) por la integración de formularios
- La comunidad de desarrolladores web por la inspiración

---

<div align="center">

**⭐ Si este proyecto te resultó útil, considera darle una estrella ⭐**

Hecho con ❤️ para la comunidad

</div>