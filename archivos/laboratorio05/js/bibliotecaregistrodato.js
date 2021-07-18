var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnActualizar=document.getElementById("btnActualizar");
// creamos un procedimiento prar mostrar los datos de la tabla
function Buscar(codigo){
    // seleccionamos la tabla que se quiere buscar
    var db = database.ref().child("registro");
    db.once("value", function(snapshot){
        snapshot.forEach(function(data){
            // declaramos una variable para obtener el IDBCursor(KEY) de la tabla
            var key = data.key;
            // verificar si el codigo es igual al ID de la tabla
            if(key==codigo){
                // declaramos variables para capturar los datos
                var cod=key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;
                // le asignamos los valores a los controles
                txtCod.value=cod;
                txtNom.value=nom;
                txtApe.value=ape;
                txtCor.value=cor;
            }
        });
    });
}



function Mostrar(){
    var i =0;
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // seleccionamos la tabla que se quiere mostrar
    var db=database.ref().child("registro");
    db.once("value", function(snapshot){
        if(snapshot.exists()){
            snapshot.forEach(function(data) {
                var cod= data.key;
                var nom= data.val().nombre;
                var ape= data.val().apellido;
                var cor= data.val().correo;
                // declaramos una variable para las filas
                var fila=tbody.insertRow(i);
                // declarmos variables para los titulos
                var titulonom= fila.insertCell(0);
                var tituloape= fila.insertCell(1);
                var titulocor= fila.insertCell(2);
                var tituloact= fila.insertCell(3);
                var titulobor= fila.insertCell(4);
                    // agregamos los valores
                titulonom.innerHTML=nom;
                tituloape.innerHTML=ape;
                titulocor.innerHTML=cor;
                tituloact.innerHTML =
                "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
                titulobor.innerHTML = 
                "<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>";
                tbody.appendChild(fila);
                i++;
            });
        }
    });
}

window.onload=Mostrar;
// creamos un procedimiento para limpiar
function Limpiar(){
    txtNom.value ="";
    txtApe.value ="";
    txtCor.value ="";
    txtNom.focus();
}

function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese sus nombres");
        txtNom.focus();
    } else if(txtApe.value =="" || txtApe.value==null){
        alert("Ingrese sus apellidos");
        txtApe.focus();
    } else if(txtCor.value == "" || txtCor.value==null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else{
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        var db=database.ref("Registro");
        var registros=db.push();
        registros.set({
            nombre:nom,
            apellido:ape,
            correo:cor,
        });
        alert("Se registro el dato");

        Limpiar();
        Mostrar();
    }
}
// creamos el procedimiento para actualizar
function Actulizar(){
    // capturando valores
    var cod = txtCod.value;
    var nom = txtNom.value;
    var ape = txtApe.value;
    var cor = txtCor.value;
    // seleccionamos la tabla que queremos actualizar con el codigo del registro
    var db = database.ref("registro/"+cod);
    // le asignamos los valores que se van a actualizar
    db.update({
            nombre:nom,
            apellido:ape,
            correo:cor,
            });
    alert("Se actualizo el dato");
    // llamamos al procedimiento limpiar
    Limpiar();
    // llamamos al procedimiento mostrar
    Mostrar();
}
// creamos un procedimiento para eliminar
function Eliminar(codigo){
    var result = confirm("¿Estas seguro que quieres eliminar el registro?")
    if(result){
        var cod=codigo;
        var bd=database.ref("registro/"+ cod).remove();
        alert("Se elimino el dato");
        Limpiar();
        Mostrar();
    }
}
btnRegistrar.addEventListener("click",Registrar);
btnActualizar.addEventListener("click",Actulizar);