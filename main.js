
// Declaración
class City {
  constructor(id, nombre, tempe) {
    this.id = id;
    this.nombre = nombre;
    this.tempe = tempe;
  }

  toString() {
    return `${this.id}. ${this.nombre}, ${this.tempe} º`;
  }
}

const arrayCity = [];
arrayCity.push(new City(1, "Mendoza", 14));
arrayCity.push(new City(2, "Ushuaia", 6));
arrayCity.push(new City(3, "Neuquen", 11));
arrayCity.push(new City(4, "Jujuy", 18));
arrayCity.push(new City(5, "Salta", 22));


const mensaje = (listaCiudades) => {
  let auxMensaje = [];
  auxMensaje.push("Elija las ciudades que quiere tener información: ");
  for (let i = 0; i < listaCiudades.length; i++) {
    auxMensaje.push(listaCiudades[i].toString());
  }
  auxMensaje.push("Para finalizar su selección ingrese 0.");
  return auxMensaje.join("\n");
};

let elegirCiudades;
let buscarCiudades;
const choice = [];
let tempe = 0;

// Ejecución
elegirCiudades = parseInt(prompt(mensaje(arrayCity)));

while (
  elegirCiudades > 0 &&
  elegirCiudades <= arrayCity.length &&
  !isNaN(elegirCiudades)
) {
  buscarCiudades = arrayCity.find((el) => el.id === elegirCiudades);
  choice.push(buscarCiudades);
  elegirCiudades = parseInt(prompt(mensaje(arrayCity)));
}

if (choice.length > 0) {
  choice.forEach((el) => (tempe += el.tempe));
  alert(
    `Usted seleccionó:\n${choice.join(
      "\n"
    )}\nSon lugares agradables?`
  );
} else {
  alert("¡No has seleccionado nada!");
}
