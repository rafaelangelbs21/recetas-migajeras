class Paginador{
 constructor(contenedor,props={}){this.contenedor=contenedor;this.props=props;this.crear();this.render();}
 crear(){this.elemento=document.createElement("div");this.elemento.className="pagination";this.contenedor.append(this.elemento);}
 render(){this.elemento.replaceChildren();const {pagina=1,total=1}=this.props;const prev=document.createElement("button");prev.className="btn ghost small";prev.textContent="← Anterior";prev.disabled=pagina<=1;prev.addEventListener("click",()=>this.emitir(pagina-1));const txt=document.createElement("span");txt.textContent=`Página ${pagina} de ${total}`;const next=document.createElement("button");next.className="btn ghost small";next.textContent="Siguiente →";next.disabled=pagina>=total;next.addEventListener("click",()=>this.emitir(pagina+1));this.elemento.append(prev,txt,next);}
 emitir(p){this.contenedor.dispatchEvent(new CustomEvent("cambiar-pagina",{bubbles:true,detail:{pagina:p}}));}
 destruir(){this.elemento?.remove();}
}
window.Paginador=Paginador;