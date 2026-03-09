# ARAndes

## Propósito del proyecto

ARAndes es un proyecto de realidad aumentada para web cuyo objetivo es crear una experiencia interactiva que permita a los usuarios explorar y comprender qué significa un barrio para los habitantes de Bogotá.

A través de elementos visuales en Realidad Aumentada, los usuarios pueden visualizar contenido digital superpuesto en el entorno real usando la cámara de su dispositivo móvil. Este contenido puede incluir:

- Elementos visuales representativos del barrio.
- Historias o narrativas asociadas al lugar.
- Contenido cultural y social.
- Información contextual sobre la identidad del barrio.

El objetivo principal es conectar la tecnología AR con la memoria urbana y la identidad cultural, permitiendo que las personas experimenten el significado de los barrios de Bogotá de una manera inmersiva.

## Tipos de Realidad Aumentada

### Marker-based AR

Utiliza marcadores o imágenes específicas para activar contenido AR.

- El sistema detecta una imagen o patrón.
- Sobre esa imagen se renderiza el objeto 3D o contenido digital.
- Ejemplo: escanear un cartel o una ilustración para activar la experiencia.

Ventajas:

- Estable.
- Fácil de implementar.
- Buen rendimiento en web.

Es el tipo de AR que utiliza MindAR.

### Markerless AR

No necesita marcadores físicos. El sistema detecta superficies, planos y espacio tridimensional.

Se utiliza con frecuencia en tecnologías como:

- ARKit.
- ARCore.

Permite colocar objetos en el suelo o en mesas.

Desventajas:

- Requiere sensores avanzados.
- Tiene compatibilidad limitada en navegadores.
- Depende de frameworks nativos o entornos más complejos.

### Location-based AR

La experiencia se activa dependiendo de la ubicación GPS del usuario.

Ejemplos:

- Juegos tipo Pokémon GO.
- Experiencias urbanas basadas en ciudad.

Ventajas:

- Ideal para recorridos urbanos.
- Permite experiencias geolocalizadas.

Desventajas:

- Precisión limitada del GPS.
- Dependencia de conectividad.

### Projection-based AR

Utiliza proyectores para mostrar contenido sobre superficies físicas.

Es poco común en web y se usa más en instalaciones físicas, museos o montajes interactivos.

## Comparación de frameworks de AR para Web

### Comparación general

| Framework | Tipo | Compatibilidad | Ventajas | Desventajas |
| --- | --- | --- | --- | --- |
| AR.js | Marker-based | Android / iOS | Muy ligero | Tecnología más antigua |
| MindAR | Marker-based | Android / iOS | Buen rendimiento y estabilidad | Solo marker-based |
| 8thWall | Marker + Markerless | Android / iOS | Muy potente | Servicio pago |
| WebXR | Markerless | Android (Chrome) | API oficial de web | Muy limitado en iOS |
| Zappar | Marker + Markerless | Android / iOS | Muy robusto | Licencias comerciales |

### Comparación técnica detallada

| Framework / Tecnología | Tipo de AR | Android (Chrome) | iOS (Safari) | ¿Requiere App? | Open Source | Observaciones |
| --- | --- | --- | --- | --- | --- | --- |
| MindAR | Marker-based | Sí | Sí | No | Sí | Muy estable para AR basada en imágenes en navegador |
| AR.js | Marker-based | Sí | Parcial | No | Sí | Tecnología más antigua, rendimiento variable |
| WebXR | Markerless / XR | Sí | No | No | Sí | iOS no soporta completamente WebXR |
| 8thWall | Marker + Markerless | Sí | Sí | No | No | Muy potente pero es un servicio comercial |
| Zappar | Marker + Markerless | Sí | Sí | No | No | Plataforma robusta pero con licencias |
| ARCore | Markerless | Sí | No | Sí | No | Diseñado principalmente para apps nativas Android |
| ARKit | Markerless | No | Sí | Sí | No | Solo disponible en apps nativas iOS |

### Conclusión técnica

Para el proyecto ARAndes se decidió utilizar MindAR, ya que:

- Funciona bien en navegadores móviles.
- Tiene compatibilidad con Android e iOS.
- Es open source.
- Permite integrar fácilmente Three.js.
- No requiere instalación de apps nativas.

Esto permite que la experiencia sea accesible directamente desde el navegador web.

## Google XR y por qué no se usa

Google desarrolla varias tecnologías relacionadas con XR:

- ARCore.
- WebXR.
- Google XR SDK.

Sin embargo, muchas de estas soluciones están diseñadas principalmente para aplicaciones nativas, especialmente con motores como Unity.

### ARCore

ARCore es el sistema de realidad aumentada de Google para Android.

Está optimizado para:

- Unity.
- Android Studio.
- Aplicaciones móviles nativas.

No está pensado como solución principal para experiencias directamente en navegador web.

### WebXR

WebXR es una API estándar para experiencias XR en navegador.

Problemas actuales:

- Compatibilidad limitada en iOS.
- Safari no soporta completamente WebXR.
- Dependencia de navegadores específicos.
- Muchas funciones solo funcionan bien en Chrome Android o navegadores experimentales.
- Existe inconsistencia entre dispositivos.

Esto hace que el desarrollo de experiencias web XR sea menos confiable para proyectos accesibles al público general.

### Conclusión

Debido a estas limitaciones, Google XR no es actualmente la mejor opción para un proyecto AR web multiplataforma.

En cambio, se utilizan soluciones como MindAR, que implementan técnicas de computer vision directamente en el navegador.

## Herramientas utilizadas en el proyecto

### Three.js

Three.js es una librería de JavaScript utilizada para crear gráficos 3D en el navegador usando WebGL.

En este proyecto se utiliza para:

- Renderizado de modelos 3D.
- Manejo de escenas.
- Iluminación.
- Animaciones.
- Interacción con objetos.

### MindAR

MindAR es un framework de realidad aumentada para web que permite detectar imágenes objetivo usando la cámara del dispositivo.

Características principales:

- Marker-based AR.
- Compatible con Three.js.
- Funciona en navegadores móviles.
- No requiere aplicaciones nativas.
- Open source.

MindAR procesa el reconocimiento de imagen y posiciona los objetos 3D en la escena.

## Posibles herramientas futuras

El proyecto prioriza la experiencia de Realidad Aumentada, por lo que las tecnologías adicionales se evaluarán solo si no afectan el rendimiento de AR.

### Frameworks frontend

Si en el futuro se requiere una interfaz más compleja o una arquitectura más escalable, podrían evaluarse:

- Vue.js.
- React.

Posibles usos:

- Manejo de interfaz.
- Componentización.
- Escalabilidad del proyecto.

Sin embargo, el proyecto comienza con JavaScript puro para evitar sobrecarga innecesaria.

### Backend potencial

Si el proyecto necesita contenido dinámico, podrían integrarse tecnologías como:

- Node.js.
- Express.
- APIs REST.
- Almacenamiento de contenido cultural.

Posibles usos:

- Almacenar historias de barrios.
- Cargar contenido dinámico.
- Manejar usuarios o contribuciones.

### Otras herramientas posibles

- CMS para contenido cultural.
- Base de datos para narrativas urbanas.
- CDN para assets 3D.

## Filosofía técnica del proyecto

El desarrollo de ARAndes sigue estos principios:

### Accesibilidad

- Experiencia disponible desde navegador.
- Sin instalación de apps.

### Compatibilidad móvil

- Android.
- iOS.

### Rendimiento

- AR estable en dispositivos móviles.

### Escalabilidad

- Posibilidad de integrar backend y frameworks en el futuro.

### Prioridad en la experiencia AR

La tecnología se selecciona en función de mejorar la experiencia de realidad aumentada.

## Stack actual del proyecto

Actualmente el proyecto se construye con una base ligera orientada a rendimiento web:

- HTML para la estructura principal.
- CSS para estilos y presentación.
- JavaScript para la lógica de interacción.
- Three.js para render 3D.
- MindAR para seguimiento de imágenes y experiencia AR basada en markers.

## Enfoque del proyecto

ARAndes busca que la realidad aumentada no sea solo una capa visual, sino una herramienta para interpretar la memoria urbana, la identidad cultural y las narrativas barriales de Bogotá desde una experiencia web accesible e inmersiva.

