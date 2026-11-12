const Comparacion={
  normalizarLista(arr){return arr.map(x=>Recetas.normalizar(x)).filter(Boolean);},
  calcular(a,b){
    const ia=Recetas.ingredientes(a),ib=Recetas.ingredientes(b);
    const sa=new Set(this.normalizarLista(ia.map(x=>x.nombre))),sb=new Set(this.normalizarLista(ib.map(x=>x.nombre)));
    const ta=new Set(this.normalizarLista(Recetas.etiquetas(a))),tb=new Set(this.normalizarLista(Recetas.etiquetas(b)));
    const comunes=[...sa].filter(x=>sb.has(x)),soloA=[...sa].filter(x=>!sb.has(x)),soloB=[...sb].filter(x=>!sa.has(x));
    const pasosA=Recetas.pasos(a).length,pasosB=Recetas.pasos(b).length,palA=Recetas.palabras(a),palB=Recetas.palabras(b);
    const union=new Set([...sa,...sb]).size;
    let sencilla="Empate";if(ia.length!==ib.length)sencilla=ia.length<ib.length?"A":"B";else if(pasosA!==pasosB)sencilla=pasosA<pasosB?"A":"B";else if(palA!==palB)sencilla=palA<palB?"A":"B";
    return {ia:ia.length,ib:ib.length,pasosA,pasosB,palA,palB,catA:a.strCategory||"—",catB:b.strCategory||"—",areaA:a.strArea||"—",areaB:b.strArea||"—",tags:[...ta].filter(x=>tb.has(x)),comunes,soloA,soloB,similitud:union?Math.round(comunes.length/union*100):0,videoA:!!a.strYoutube,videoB:!!b.strYoutube,sencilla};
  }
};
window.Comparacion=Comparacion;