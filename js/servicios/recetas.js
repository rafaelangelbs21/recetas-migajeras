const Recetas = {
  ingredientes(r){ const salida=[]; for(let i=1;i<=20;i++){const nombre=(r[`strIngredient${i}`]||"").trim();if(nombre)salida.push({nombre,medida:(r[`strMeasure${i}`]||"").trim()});}return salida; },
  etiquetas(r){return (r.strTags||"").split(",").map(x=>x.trim()).filter(Boolean);},
  pasos(r){return (r.strInstructions||"").split(/\r?\n/).map(x=>x.trim()).filter(x=>x && !/^(STEP\s*\d*|\d+[\.\):]?)$/i.test(x));},
  palabras(r){return (r.strInstructions||"").trim().split(/\s+/).filter(Boolean).length;},
  normalizar(s){return (s||"").trim().toLocaleLowerCase();}
};
window.Recetas=Recetas;