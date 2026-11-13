class BarraNavegacion{
 constructor(contenedor,props={}){this.contenedor=contenedor;this.props=props;this.crear();this.render();}
 crear(){this.elemento=document.createElement("div");this.contenedor.append(this.elemento);}
 render(){this.elemento.replaceChildren();const items=[["inicio","Inicio"],["explorar","Explorar"],["catalogo","Categorías y orígenes"],["comparador","Comparador"]];
 items.forEach(([id,label])=>{const b=document.createElement("button");b.className="nav-link"+(this.props.activa===id?" active":"");b.textContent=label;if(id==="comparador"){const n=document.createElement("span");n.className="nav-count";n.textContent=this.props.cantidad||0;b.append(n);}b.addEventListener("click",()=>this.contenedor.dispatchEvent(new CustomEvent("navegar",{bubbles:true,detail:{vista:id}})));this.elemento.append(b);});}
 actualizar(props){this.props={...this.props,...props};this.render();}
 destruir(){this.elemento?.remove();}
}
window.BarraNavegacion=BarraNavegacion;