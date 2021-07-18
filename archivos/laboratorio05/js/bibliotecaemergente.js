function Cargar(url,titulo,ancho,alto){
    // declaramos varoables para calcular ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    alert(anc);
    alert(alt);
    // delcarmaos variables para la posicion
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"widht"+ancho+",height="+alto+",left="+x+",top="+y+",scrollbars=No");
}
window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);