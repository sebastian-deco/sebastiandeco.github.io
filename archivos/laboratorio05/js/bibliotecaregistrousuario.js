//declarando variables para los controles
var txtCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
// creamos un procedimiento para limpiar las cajas
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}
// creamos un procedimiento para registrar el usuario
function RegistrarUsuario(){
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
        // capturando valores
        var cor=txtCor.value;
        var con=txtCon.value;
        // llamamos a la funcion firebase
        auth.createUserWithEmailAndPassword(cor,con)
    .then((userCredential) => {
    // Signed in
    
    alert("Se registro el usuario en Firebase");
    Limpiar();
    })
    .catch((error) => {
    alert("No se pudo registrar el usuario en Firebase");
    Limpiar();
    });
        
    }
}
// llamamos al procedimiento en el boton
btnRegistrar.addEventListener("click",RegistrarUsuario);