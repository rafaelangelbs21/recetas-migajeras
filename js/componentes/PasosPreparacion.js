class PasosPreparacion{
 constructor(contenedor,props={}){this.contenedor=contenedor;this.props=props;this.crear();this.render();}
 crear(){this.elemento=document.createElement("div");this.elemento.className="steps";this.contenedor.append(this.elemento);}
 render(){this.elemento.replaceChildren();(this.props.pasos||[]).forEach(p=>{const s=document.createElement("div");s.className="step";s.textContent=p;this.elemento.append(s);});}
 destruir(){this.elemento?.remove();}
}
window.PasosPreparacion=PasosPreparacion;