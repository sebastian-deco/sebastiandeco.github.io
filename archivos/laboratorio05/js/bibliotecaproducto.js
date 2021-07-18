// declarando varaibles para controles
var txtNom=document.getElementById("txtNom");
var cboCategoria=document.getElementById("cboCategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarProducto(){
    // declaramos una variable para guardar los datos
    var listaproducto=Mostrar();
    // selecciono el tbody de la tabla
    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    // agregamos al tbody las filas que se registren
    for(var i=0;i<listaproducto.length;i++){
        // declarando una variables para las filas
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(3);
        // agregamos los valores
        titulonom.innerHTML=listaproducto[i].nombre;
        titulocat.innerHTML=listaproducto[i].categoria;
        titulopre.innerHTML=listaproducto[i].precio;
        titulocan.innerHTML=listaproducto[i].cantidad;
        tbody.appendChild(fila);
    }
}

function RegistrarProducto(){
    // capturando valores
    var nom=txtNom.value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entretenimiento";
            break;
        case 2:
            cat="Tecnologia";
            break;
        case 3:
            cat="Linea Blanca";
            break;
        default:
            cat="";
            break;
    }
    var pre=txtPre.value;
    var can=txtCan.value;
    // llamamos al procedimiento registrar
    Registrar(nom,cat,pre,can)
    // llamamos al procedimiento para mostrar
    MostrarProducto();
}

btnRegistrar.addEventListener("click",RegistrarProducto);