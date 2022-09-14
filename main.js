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

let elegir = prompt(`Elija la ciudad:
 1. ${listaCiudades[0]}
 2. ${listaCiudades[1]}
 3. ${listaCiudades[2]}
 `);

 
document.write(`<h2>Ciudad Elegida: ${elegir}</h2>`);
document.write(`<h2>Ciudad Elegida: ${listaCiudades[elegir-1]}</h2>`)



