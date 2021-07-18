// crear un vector que contega la informacion del registro
var registro=[];
// creamos un procedimiento para poder registrar
function Registrar(nomregistro,aperegistro,corregistro){
    var NuevoRegistro={
        nombre:nomregistro,
        apellido:aperegistro,
        correo:corregistro
    };
    registro.push(NuevoRegistro)
}

// creamos un funcion para mostrar la informacion dl registro
function Mostrar(){
    return registro;
}