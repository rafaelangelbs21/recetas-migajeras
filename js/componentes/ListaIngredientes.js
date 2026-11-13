class ListaIngredientes{
 constructor(contenedor,props={}){this.contenedor=contenedor;this.props=props;this.crear();this.render();}
 crear(){this.elemento=document.createElement("div");this.elemento.className="ingredient-grid";this.contenedor.append(this.elemento);}
 render(){this.elemento.replaceChildren();(this.props.ingredientes||[]).forEach(i=>{const item=document.createElement("div");item.className="ingredient";const img=document.createElement("img");img.src=`https://www.themealdb.com/images/ingredients/${encodeURIComponent(i.nombre)}.png`;img.alt="";img.onerror=()=>{img.onerror=null;img.src="assets/ingrediente.svg";};const txt=document.createElement("div");const strong=document.createElement("strong");strong.textContent=i.nombre;const small=document.createElement("span");small.textContent=i.medida||"Al gusto";txt.append(strong,small);item.append(img,txt);this.elemento.append(item);});}
 destruir(){this.elemento?.remove();}
}
window.ListaIngredientes=ListaIngredientes;