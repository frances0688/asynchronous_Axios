/*
1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder

En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users.

Leyendo su documentación, deberás hacer lo siguiente:
*/

// Imprimir por consola la lista (array) de usuarios.
axios
	.get("https://jsonplaceholder.typicode.com/users")
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Imprimir por consola solo el nombre de los usuarios.
/*
axios
.get("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    const usersArray = res.data;
    usersArray.forEach((user) => {
        const { name } = user;
        console.log(name);
    });
})
.catch((err) => console.error(err));
*/

// Crear una variable global llamada "users" y, al hacer la solicitud utilizando
// Axios, rellenarla con la respuesta de la API(el array). Este proceso debe
// realizarse fuera de cualquier función.

const users = [];

axios
	.get("https://jsonplaceholder.typicode.com/users")
	.then((res) => {
		const usersArray = res.data;
		usersArray.forEach((user) => {
			const { name } = user;
			users.push(name);
		});
	})
	.catch((err) => console.error(err));

// Crear una función llamada "showUsers" que muestre por consola la variable
// global "users" que has creado.
/*
function showUsers() {
	console.log("Users: ", users);
}
showUsers();
*/

//Crea un botón que cuando lo cliques ejecute la función que habías creado
const btn = document.getElementById("btn");

btn.addEventListener("click", showUsers);

// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada
// uno en el DOM (en el HTML).
const userCard = document.getElementById("userCard");
function showUsers() {
	users.map((user) => {
		userCard.innerHTML += `<div class="card">
        <div class="card-body">
            <h2 class="card-title">${user}</h2>
        </div>
    </div>
    <br>`;
	});
}
