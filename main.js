
// Creamos el objeto "Ciudad"
const ciudad ={}
ciudad.index = 1
ciudad.valor = true
/*Estos datos serán tomados desde la ubicación del usuario mediante una API*/
ciudad.nombre = prompt("En que ciudad te encuentras?:")
ciudad.grados = parseInt(prompt("Cuantos grados hace en este momento? (Ingresa solo números):"))

//para controlar los datos ingresados
console.log(ciudad)

// Funcion para mostrar el mensaje
let gradosAhora = ciudad.grados
console.log(gradosAhora)
const mostrarMensaje = (gradosAhora) => {
  if (gradosAhora <= 11) {
    document.write(`<h1>Bienvenidos! Vamos a ver que tal el clima en </br><strong>${ciudad.nombre.toLocaleUpperCase()}</strong></h1>`)
    document.write(`<h2>Parece que hacen unos ${ciudad.grados}º de temperatura.</h2>`)
    document.write(`<h3>Mejor abrigate.</h3`);
  }else if (gradosAhora >= 12 && gradosAhora < 19){
    document.write(`<h1>Bienvenidos! Vamos a ver que tal el clima en </br><strong>${ciudad.nombre.toLocaleUpperCase()}</strong></h1>`)
    document.write(`<h2>Parece que hacen unos ${ciudad.grados}º de temperatura.</h2>`)
    document.write(`<h3>LLeva un buzo por las dudas</h3>`);
  }else if (gradosAhora >= 20 && gradosAhora < 29) {
    document.write(`<h1>Bienvenidos! Vamos a ver que tal el clima en </br><strong>${ciudad.nombre.toLocaleUpperCase()}</strong></h1>`)
    document.write(`<h2>Parece que hacen unos ${ciudad.grados}º de temperatura.</h2>`)
    document.write(`<h3>Tranqui, disfruta que el día esta bueno.</h3>`);
  }else if (gradosAhora >= 30 && gradosAhora <= 55) {
    document.write(`<h1>Bienvenidos! Vamos a ver que tal el clima en </br><strong>${ciudad.nombre.toLocaleUpperCase()}</strong></h1>`)
    document.write(`<h2>Parece que hacen unos ${ciudad.grados}º de temperatura.</h2>`)
    document.write(`<h3>Boludo! Quedate en tu casa o te quemas!</h3>`);
  }else {
    document.write(`<h3>Ingresá una temperatura válida</h3>`);
  }
}

//Llamamos a la funcion mostrarMensaje con el argumento gradosAhora
mostrarMensaje(gradosAhora)


/*
- Quiero sumar iconos dependiendo el resultado del clima
- Quiero sumar mas paramentros, como humedad y sensacion térmica
  para tener mucha mas variedad de mensajes.
- Seguramente implemente un coeficiente con estos valores mencionados, 
  de ese resultado se derivaran los mensajes
- Muchas más validaciones para los ingresos del usuario.
  */


console.log(ciudad)
console.log(ciudad.grados)
console.log(gradosAhora)
