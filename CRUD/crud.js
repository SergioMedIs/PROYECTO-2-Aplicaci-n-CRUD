
var Direccion =[];
function addDireccion(nombref, cpf ,estadof,coloniaf,callef,nuif,nuef,reff,telefonof){
    var newDirecction = {
        nombre : nombref,
        cp : cpf,
        estado : estadof,
        colonia : coloniaf,
        calle : callef,
        nuii : nuif,
        nuee : nuef,
        ref : reff,
        telefono : telefonof
    };
   
alert('Datos Guardados', newDirecction);
console.log(newDirecction)
   Direccion.push(newDirecction);
   let recoveredData = localStorage.getItem('addDireccion')
   if(recoveredData == null){

     localStorage.setItem('newDirecction', JSON.stringify(newDirecction))
   } else {

     let data = JSON.parse(recoveredData)
     let newCar = {name:'car3', id:3}

     data.push(newCar)
     localStorage.setItem('newDirection', JSON.stringify(data))
   }

   console.log(localStorage.getItem('newDirection'))
   document.querySelector('#borrar').addEventListener('click',localStorage.deteleItem(newDirection));
}
function getDirect(){
  return Direccion;

}
//
document.querySelector('#borrar').addEventListener('click',addDireccion);
function borrarElemento(i){
  arr.splice(i, 1)
  localStorage.setItem('NuevDireccion', arr)
  renderElement()
}
function getElements() {
let localS = localStorage.getItem('NuevaDireccion')
arr = localS.split(',')
renderElement()

}
getElements()
