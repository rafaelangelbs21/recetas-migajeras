class EstadoCarga{
 constructor(contenedor,props={}){this.contenedor=contenedor;this.props=props;this.elemento=null;this.crear();}
 crear(){this.elemento=document.createElement("div");this.elemento.className="state";this.contenedor.append(this.elemento);}
 render(tipo="carga",mensaje="Cargando…",reintentar=null){
  this.elemento.replaceChildren();
  if(tipo==="carga"){const sp=document.createElement("div");sp.className="spinner";this.elemento.append(sp);}
  else {const icon=document.createElement("div");icon.className="empty-illustration";icon.textContent=tipo==="error"?"☹":"✳";this.elemento.append(icon);}
  const p=document.createElement("p");p.textContent=mensaje;this.elemento.append(p);
  if(reintentar){const b=document.createElement("button");b.className="btn small";b.textContent="Reintentar";b.addEventListener("click",reintentar);this.elemento.append(b);}
 }
 destruir(){this.elemento?.remove();this.elemento=null;}
}
window.EstadoCarga=EstadoCarga;