const API_BASE="https://www.themealdb.com/api/json/v1/1/";
class ErrorAPI extends Error { constructor(tipo,mensaje,estado=null){super(mensaje);this.name="ErrorAPI";this.tipo=tipo;this.estado=estado;} }
async function pedir(endpoint, opciones={}){
  try{
    const response=await fetch(API_BASE+endpoint,opciones);
    if(!response.ok) throw new ErrorAPI("servidor",`El servicio respondió con estado ${response.status}.`,response.status);
    let data; try{data=await response.json();}catch{throw new ErrorAPI("servidor","La respuesta del servicio no contiene JSON válido.",response.status);}
    return data;
  }catch(error){
    if(error.name==="AbortError") throw error;
    if(error instanceof ErrorAPI) throw error;
    throw new ErrorAPI("conexion","No se pudo conectar con TheMealDB. Comprueba tu conexión e inténtalo de nuevo.");
  }
}
const API={
  async buscarNombre(nombre){const d=await pedir(`search.php?s=${encodeURIComponent(nombre)}`);return d.meals||[];},
  async receta(id){const cached=cache.obtenerReceta(id);if(cached)return cached;const d=await pedir(`lookup.php?i=${encodeURIComponent(id)}`);const r=d.meals?.[0];if(!r)throw new ErrorAPI("vacio","No se encontró la receta.");cache.guardarReceta(r);return r;},
  async aleatoria(){const d=await pedir("random.php");const r=d.meals?.[0];if(!r)throw new ErrorAPI("vacio","No se recibió una receta.");cache.guardarReceta(r);return r;},
  async categorias(){const c=cache.obtenerLista("categorias");if(c)return c;const d=await pedir("categories.php");cache.guardarLista("categorias",d.categories||[]);return d.categories||[];},
  async origenes(){const c=cache.obtenerLista("origenes");if(c)return c;const d=await pedir("list.php?a=list");const v=(d.meals||[]).map(x=>x.strArea);cache.guardarLista("origenes",v);return v;},
  async ingredientes(){const c=cache.obtenerLista("ingredientes");if(c)return c;const d=await pedir("list.php?i=list");const v=(d.meals||[]).map(x=>x.strIngredient);cache.guardarLista("ingredientes",v);return v;},
  async filtrar(tipo,valor){const key=tipo==="categoria"?"c":tipo==="origen"?"a":"i";const d=await pedir(`filter.php?${key}=${encodeURIComponent(valor)}`);return d.meals||[];}
};
window.API=API;window.ErrorAPI=ErrorAPI;