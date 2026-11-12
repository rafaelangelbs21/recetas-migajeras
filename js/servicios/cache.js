// Caché exclusivamente en memoria: no se utiliza almacenamiento persistente.
class CacheMemoria {
  constructor(){ this.recetas = new Map(); this.listas = new Map(); }
  obtenerReceta(id){ return this.recetas.get(String(id)); }
  guardarReceta(receta){ if(receta && receta.idMeal) this.recetas.set(String(receta.idMeal), receta); }
  obtenerLista(clave){ return this.listas.get(clave); }
  guardarLista(clave, valor){ this.listas.set(clave, valor); }
}
window.cache = new CacheMemoria();