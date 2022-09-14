const listaCiudades = []
let cantidadCiudades = 3

sesion = 1
while( sesion <= 1) {
  const ciudad ={}
  ciudad.index = 1
  ciudad.nombre = prompt("En que ciudad te encuentras?:")
  ciudad.grados = parseInt(prompt("Cuantos grados hace en este momento?(Ingresa solo números):"))
  ciudad.valor = true
  document.write(`<h1>Bienvenidos! Vamos a ver que tal el clima en </br><strong>${ciudad.nombre.toLocaleUpperCase()}</strong></h1>`)
  document.write(`<h2>Parece que hacen unos ${ciudad.grados}º de temperatura.</h2>`)
  sesion++;
  console.log(ciudad)
}

console.log(ciudad)


/*
document.write(`<h1>Bienvenidos! Vamos a ver que tal el clima en </br>${ciudad.nombre}</h1>`)
document.write(`<h2>Ciudad Elegida: ${ciudad.index} de ${ciudad.nombre.toLocalUpperCase()}</h2>`)


/*
const listaCiudades = []
let cantidadCiudades = 3
do {
  let entrada = prompt("Ingresa hasta 3 nombres de ciudades:")
  listaCiudades.push(entrada.toLocaleUpperCase())
  console.log(listaCiudades.length)
}while(listaCiudades.length != cantidadCiudades)

const recorreCiudades = (arr) => {
  document.write(`<p>Ciudades ingresadas:</p>`);
  for(let i=0; i<=arr.length-1; i++){
    document.write(`<p>${arr[i]}</p>`);
  }
}

recorreCiudades(listaCiudades);

let elegir = parseInt(prompt(`Elija la ciudad:
 1. ${listaCiudades[0]}
 2. ${listaCiudades[1]}
 3. ${listaCiudades[2]}
 `));

 
document.write(`<h2>Ciudad Elegida: ${elegir} - ${listaCiudades[elegir-1]}</h2>`)
*/


