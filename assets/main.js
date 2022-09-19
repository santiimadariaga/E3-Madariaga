/*

Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

👉 A cada Pizza, agregarle una imagen. 
👉 Guardar el array en el local storage. 
👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
👉 Debajo del card tiene que haber un input y un botón. 

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

🆙 En Eduflow, colocar el repositorio de Github, en el cual debe figurar el vercel deployado.

*/

const form = document.getElementById("form");
const input = document.getElementById("input");
const h1 = document.getElementById("h1"); // nombre
const h4 = document.getElementById("h4"); // ingre
const h2 = document.getElementById("h2"); // price
const container = document.querySelector(".card-principal");

const arrayDePizzas = [
  {
    id: 1,
    nombre: "Napolitana",
    ingredientes: "Queso, Tomate y Jamon",
    precio: 1000,
  },
  {
    id: 2,
    nombre: "Jamon y Morron",
    ingredientes: "Jamon, Morron y Aceitunas",
    precio: 1200,
  },
  {
    id: 3,
    nombre: "Cebolla y Queso",
    ingredientes: "Cebolla, Queso y Oregano",
    precio: 1250,
  },
  {
    id: 4,
    nombre: "Roquefort",
    ingredientes: "Queso Roquefort y Muzzarela",
    precio: 1100,
  },
  {
    id: 5,
    nombre: "Cuatro Quesos",
    ingredientes: "Quesos Parmesano, Roquefort, Reggianato y Provolone",
    precio: 1300,
  },
  {
    id: 6,
    nombre: "Palmito",
    ingredientes: "Queso, Aceitunas, Palmitos y Salsa Golf",
    precio: 1400,
  },
];

let pizzasLS = JSON.parse(localStorage.getItem("pizzas"));

const saveToLocalStorage = () => {
  localStorage.setItem("pizzas", JSON.stringify(arrayDePizzas));
};

const rendering = (valor) => {
  const pizzaFinded = pizzasLS.find((pizza) => pizza.id === +valor);

  h1.textContent = pizzaFinded.nombre;
  h4.textContent = pizzaFinded.ingredientes;
  h2.textContent = `$${pizzaFinded.precio}`;

  // Seguro hay una forma menos primitiva lo sé, pero fue lo más rápido que se me ocurrió.
  if (pizzaFinded.id === 1) {
    container.classList.add("napo");
    container.classList.remove(
      "jaymo",
      "cebolla",
      "roque",
      "cuatroque",
      "palmi"
    );
  } else if (pizzaFinded.id === 2) {
    container.classList.add("jaymo");
    container.classList.remove(
      "napo",
      "cebolla",
      "roque",
      "cuatroque",
      "palmi"
    );
  } else if (pizzaFinded.id === 3) {
    container.classList.add("cebolla");
    container.classList.remove("napo", "jaymo", "roque", "cuatroque", "palmi");
  } else if (pizzaFinded.id === 4) {
    container.classList.add("roque");
    container.classList.remove(
      "napo",
      "jaymo",
      "cebolla",
      "cuatroque",
      "palmi"
    );
  } else if (pizzaFinded.id === 5) {
    container.classList.add("cuatroque");
    container.classList.remove("napo", "jaymo", "cebolla", "roque", "palmi");
  } else if (pizzaFinded.id === 6) {
    container.classList.add("palmi");
    container.classList.remove(
      "napo",
      "jaymo",
      "cebolla",
      "roque",
      "cuatroque"
    );
  }
};

const reset = () => {
  input.value = "";
};

const error = () => {
  h2.textContent = "Por favor elija un menú valido";
  h4.textContent = "";
  h1.textContent = "";

  container.classList.remove(
    "napo",
    "jaymo",
    "cebolla",
    "roque",
    "cuatroque",
    "palmi"
  );
};

const renderPizza = (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (inputValue > 0 && inputValue <= 6) {
    rendering(inputValue);
  } else {
    error();
  }

  reset();
  saveToLocalStorage();
};

const init = () => {
  form.addEventListener("submit", renderPizza);
};

init();
