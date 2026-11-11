# Recetas Migajeras

SPA de exploración y comparación de recetas construida con HTML5, CSS3 y JavaScript Vanilla. Consume la API pública TheMealDB v1 (`1`) sin persistencia local.

## Integrantes
- Integrante 1: completar nombre y responsabilidades.
- Integrante 2: completar nombre y responsabilidades.

## Ejecutar
Abrir `index.html` en un navegador moderno con conexión a Internet. No requiere servidor ni proceso de compilación.

## Vistas
1. **Inicio:** receta aleatoria y categorías.
2. **Explorar:** filtros combinables por nombre, categoría, origen e ingrediente; intersección y paginación en cliente.
3. **Detalle:** información, ingredientes, pasos, video y recetas relacionadas.
4. **Categorías y orígenes:** navegación por ambas taxonomías.
5. **Comparador:** dos paneles, métricas, ingredientes/etiquetas comunes y exclusivos y receta más sencilla.

## Pseudocomponentes
Cada clase recibe un contenedor y propiedades, crea su elemento, renderiza y ofrece `destruir()`:
- `BarraNavegacion`: navegación y contador del comparador; emite `navegar`.
- `TarjetaReceta`: tarjeta reutilizable; emite `tarjeta-receta`.
- `Paginador`: navegación de páginas; emite `cambiar-pagina`.
- `FormularioBusqueda`: criterios de búsqueda; emite `formulario-busqueda`.
- `EstadoCarga`: estados de carga, vacío y error.
- `ListaIngredientes`: ingredientes e imágenes alternativas.
- `PasosPreparacion`: pasos numerados.
- `PanelComparador`: búsqueda y selección por panel; emite `panel-comparador`.
- `TablaComparacion`: métricas calculadas.

Los eventos se comunican mediante `CustomEvent` y sus datos viajan en `detail`. Las tarjetas y paneles se instancian varias veces con datos distintos.

## Paralelismo
- `Promise.allSettled`: inicio (receta aleatoria + categorías), detalle (recetas relacionadas) y resolución de detalles de la página visible, para tolerar fallos parciales.
- `Promise.all`: listas iniciales de categorías/orígenes/ingredientes y criterios independientes de explorar, donde se necesitan todas las respuestas para calcular la intersección.

## Decisiones de diseño
- Paleta: papel cálido `#f5efe5`, crema `#fffaf2`, verde profundo `#315b45`, verde lima `#d9e5b5` y acento terracota `#e77d4d`.
- Tipografías: Playfair Display para titulares y DM Sans para interfaz.
- Iconografía: símbolos tipográficos y recursos propios; no se utilizan kits de interfaz.
- Inspiración: cuadernos de cocina, mercados y cartas de restaurantes contemporáneas.

## Estructura
- `index.html`: estructura base y orden de carga de scripts.
- `css/styles.css`: diseño responsive y estados visuales.
- `js/servicios/`: API centralizada, caché, normalización y comparación.
- `js/componentes/`: pseudocomponentes reutilizables.
- `js/app.js`: coordinación de vistas, eventos y estado de sesión.
- `assets/`: recursos alternativos.

## Notas
- La caché vive solo en memoria.
- La búsqueda interna de cada panel aplica debounce de 400 ms y cancela la consulta anterior con `AbortController`.
- Los textos recibidos de la API se insertan con `textContent`; `innerHTML` no se utiliza para datos externos.
- No se usan frameworks, librerías externas, módulos ES, almacenamiento persistente, `alert`, `confirm` ni `prompt`.
- Completar nombres de integrantes y añadir capturas reales de las cinco vistas antes de entregar.
