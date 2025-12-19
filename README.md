# Guía del Apartamento 604 - PWA

## 🎯 Descripción
Aplicación web progresiva (PWA) para proporcionar información útil a los huéspedes del Apartamento 604 en el Edificio Toscana, Bogotá.

## ✨ Características

### 📱 Instalable como App Móvil
- Se puede instalar en la pantalla de inicio del celular
- Funciona sin conexión a internet (después de la primera carga)
- Interfaz de app nativa sin barras del navegador
- Compatible con Android e iOS

### 🗺️ Enlaces Interactivos a Google Maps
- **Dirección del apartamento**: Clic para abrir en Google Maps
- **Lugares recomendados**: Enlaces directos a:
  - Centro Comercial Unicentro
  - Usaquén y mercado de pulgas
  - Zona T y Parque de la 93
  - Monserrate
- **Servicios cercanos**: Búsqueda directa de:
  - Supermercados
  - Restaurantes
  - TransMilenio
  - Farmacias

### 💬 Contacto Directo por WhatsApp
- Botón de WhatsApp con mensaje predefinido
- Abre directamente la conversación en WhatsApp
- Número: +57 315 464 5370

### 📶 Información Útil
- **WiFi**: Red: APTO604, Contraseña: 41373163
- **Dirección**: Cl. 145 #13a-70, Edificio Toscana, Apartamento 604
- **Normas de convivencia** claramente especificadas
- **Recordatorios importantes** destacados visualmente

## 📁 Archivos del Proyecto

```
/Users/cristian/airbnb/
├── index.html          # Página principal
├── manifest.json       # Configuración PWA
├── sw.js              # Service Worker (funcionalidad offline)
├── icon-192.png       # Icono 192x192
├── icon-512.png       # Icono 512x512
├── INSTRUCCIONES.md   # Guía de instalación
└── README.md          # Este archivo
```

## 🚀 Cómo Instalar en el Celular

### Android (Chrome/Edge)
1. Abre la página en Chrome o Edge
2. Toca el menú (⋮) en la esquina superior derecha
3. Selecciona "Agregar a pantalla de inicio" o "Instalar aplicación"
4. Confirma la instalación
5. ¡Listo! El ícono aparecerá en tu pantalla de inicio

### iPhone/iPad (Safari)
1. Abre la página en Safari
2. Toca el botón de Compartir (□↑)
3. Desplázate y selecciona "Agregar a pantalla de inicio"
4. Dale un nombre (ej: "Apartamento 604")
5. Toca "Agregar"
6. ¡Listo! El ícono aparecerá en tu pantalla de inicio

## 🌐 Despliegue

Para que la PWA funcione correctamente, necesitas subirla a un servidor web con HTTPS. Opciones recomendadas:

### GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en la configuración
4. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repo`

### Netlify (Gratis)
1. Arrastra la carpeta a netlify.com
2. Se despliega automáticamente
3. Obtienes un URL personalizado

### Vercel (Gratis)
1. Conecta tu repositorio de GitHub
2. Se despliega automáticamente
3. Obtienes un URL personalizado

## 🎨 Personalización

### Colores (basados en Airbnb)
- Rosa principal: `#FF5A5F`
- Azul/Verde: `#008489` / `#00A699`
- Gris oscuro: `#484848`
- Fondo claro: `#FAFAFA`

### Modificar Información
- **WiFi**: Edita líneas 397-399 en index.html
- **Contacto**: Edita línea 402 y 404 en index.html
- **Dirección**: Edita líneas 325-328 en index.html
- **Lugares recomendados**: Edita líneas 360-367 en index.html

## 📊 Características Técnicas

- **Responsive Design**: Se adapta a móviles, tablets y escritorio
- **Service Worker**: Caché offline para acceso sin internet
- **Manifest.json**: Configuración de app instalable
- **Meta tags**: Optimizado para iOS y Android
- **Google Maps Integration**: Enlaces directos a ubicaciones
- **WhatsApp Integration**: Enlace directo para contacto

## 🔒 Seguridad

⚠️ **Importante**: Esta página contiene información sensible (contraseña WiFi). Solo compártela con huéspedes verificados de Airbnb.

## 📞 Soporte

Para cualquier duda sobre el apartamento:
- WhatsApp: +57 315 464 5370
- O usa el botón de WhatsApp en la página

---

Creado con ❤️ para mejorar la experiencia de los huéspedes
