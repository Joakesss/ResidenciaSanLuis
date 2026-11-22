# Residencia SL — Sitio Web

Sitio promocional y de preinscripción de la residencia para **adultos entre 50 y 75 años sin problemas de movilidad** en San Luis Capital, Argentina.

> **Proyecto independiente:** Este proyecto es completamente autónomo y no modifica en nada a `ResidenciaSL`.

---

## Características Principales

1. **Nombre de Marca:** **Residencia SL** (sin agregados en la identidad principal).
2. **Orientación:** Adultos de 50 a 75 años autovalentes e independientes (sin problemas de movilidad).
3. **Foto de Cabecera (Hero):**
   - Incorpora la foto horizontal de la habitación privada (`/img/HabitacionPrivada2.jpeg`), cálida, acogedora y con excelente luminosidad, con cama hecha, lámpara de noche, plantas y cortinados, transmitiendo confort y descanso desde el primer segundo.
4. **Gimnasio Terapéutico Contiguo:**
   - **Texto de modelo incluido:**
     > *"Está incluido el servicio de GIMNASIA TERAPEUTICA SEMANAL.*
     > *Disponibles actividades como: Pilates, Yoga, Fisioterapia, kinesiología, Psicomotricidad, Psicología, Podología.*
     > *El gimnasio se localiza al lado de la residencia NO REQUIRIENDO TRASLADO ALGUNO."*
   - Trae 1 clase a elección semanal incluida.
   - Apartado especial con **4 lugares reservados para las fotos del gimnasio** que el usuario incorporará.
5. **Servicios destacados:**
   - **Servicio de lavado de ropa** incluido (sin lavarropas de uso personal en la casa).
   - **Servicio de limpieza de espacios comunes** (áreas compartidas higienizadas a diario).
   - Internet Wi-Fi, cocina equipada, habitaciones amobladas.
6. **Paleta de Colores Renovada:**
   - Se mantiene el **Verde Bosque / Esmeralda** que te gustó (`#1b4d3e`, `#103228`, `#286b57`, `#eaf3ef`).
   - Se eliminaron por completo los amarillos, ocres y cremas, reemplazándolos por **fondos luminosos, frescos y modernos**: blanco puro (`#ffffff`), porcelana fresca (`#f9fbf9`), piedra suave (`#f1f5f3`) y bordes nítidos (`#e1e7e4`).
   - Contraste visual accesible de alto nivel (WCAG AAA).

---

## Cómo agregar las fotos del Gimnasio

Cuando tengas las fotos del gimnasio:

1. Guardá los archivos de imagen en la carpeta:
   ```
   public/img/
   ```
   (por ejemplo: `gimnasio-1.jpg`, `gimnasio-2.jpg`, `gimnasio-3.jpg`, `gimnasio-4.jpg`).

2. Abrí el archivo:
   ```
   src/content/residencia.ts
   ```

3. Buscá la propiedad `gimnasio.fotos` y actualizá la ruta del `src` con el nombre de tu foto:
   ```ts
   fotos: [
     {
       id: "gym-1",
       tipo: "imagen",
       src: "/img/gimnasio-1.jpg", // <-- cambiás acá la extensión o nombre
       alt: "Sala principal del gimnasio terapéutico contiguo",
       etiqueta: "Sala de aparatos y movilidad",
     },
     // ...
   ]
   ```

---

## Comandos del Proyecto

```bash
# 1. Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# 2. Compilar el sitio estático para producción (carpeta out/)
npm run build

# 3. Correr las pruebas unitarias y verificaciones
npm test

# 4. Regenerar los placeholders SVG
npm run placeholders
```
