// 1. Declaración de variables de diferentes tipos
console.log("1. Variables y sus tipos:");
let numero = 17;
let cadena = "Hola mundo";
let booleano = true;
let decimal = 2.59;
let arreglo = [7, 8, 9];
let objeto = { nombre: "Leandro", edad: 30 };
let nulo = null;
let indefinido = undefined;

console.log("Número:", numero, "Tipo:", typeof numero);
console.log("Cadena:", cadena, "Tipo:", typeof cadena);
console.log("Booleano:", booleano, "Tipo:", typeof booleano);
console.log("Decimal:", decimal, "Tipo:", typeof decimal);
console.log("Arreglo:", arreglo, "Tipo:", typeof arreglo);
console.log("Objeto:", objeto, "Tipo:", typeof objeto);
console.log("Nulo:", nulo, "Tipo:", typeof nulo);
console.log("Indefinido:", indefinido, "Tipo:", typeof indefinido);

// 2. Manipulación de Objeto
console.log("\n2. Manipulación de Objeto:");
let vehiculo = { marca: "Toyota" };
console.log("Objeto inicial:", vehiculo);

vehiculo.modelo = "Corolla"; // Agregar propiedad
console.log("Objeto después de agregar:", vehiculo);

delete vehiculo.marca; // Eliminar propiedad
console.log("Objeto después de eliminar:", vehiculo);

// 3. Manipulación de Arreglo
console.log("\n3. Manipulación de Arreglo:");
let numeros = [10, 20, 30];
console.log("Arreglo inicial:", numeros);

numeros.push(40); // Agregar elemento
console.log("Arreglo después de agregar:", numeros);

numeros.pop(); // Eliminar último elemento
console.log("Arreglo después de eliminar:", numeros);

// 4. Función para sumar dos números
function sumarNumeros(a, b) {
    return a + b;
}
console.log("\n4. Suma de números:");
console.log("5 + 3 =", sumarNumeros(5, 3));

// 5. Función con evaluación if
function evaluarValores(a, b) {
    if (a > b) {
        console.log(a, "es mayor que", b);
    } else if (b > a) {
        console.log(b, "es mayor que", a);
    } else {
        console.log("Los valores son iguales");
    }
}
console.log("\n5. Evaluación de valores:");
evaluarValores(10, 5);

// 6. Función con do-while
function ejemploDoWhile() {
    let contador = 0;
    console.log("\n6. Ejemplo Do-While:");
    do {
        console.log("Contador:", contador);
        contador++;
    } while (contador < 3);
}
ejemploDoWhile();

// 7. Función con switch
function evaluarDia(dia) {
    console.log("\n7. Ejemplo Switch:");
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Día inválido");
    }
}
evaluarDia(5);

// 8. Imprimir números del 1 al 100 de 5 en 5
function imprimirNumeros() {
    console.log("\n8. Números de 5 en 5:");
    let numero = 1;
    while (numero <= 100) {
        console.log(numero);
        numero += 5;
    }
}
imprimirNumeros();

// 9. Arreglo bidimensional
function ArregloBidimensional() {
    console.log("\n9. Arreglo Bidimensional:");
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(`Elemento [${i}][${j}]:`, matriz[i][j]);
        }
    }
}
ArregloBidimensional();

// 10. Mostrar alerta
function MostrarAlerta() {
    alert("Bienvenido/a tu mejor opcion para rentar vehiculos de todo tipo!");
}

// 11. Cambiar estilo 
function cambiarEstilo() {
    let elemento = document.getElementById('elementoEstilo');
    if (elemento) {
        elemento.classList.toggle('highlight');
        elemento.classList.toggle('special');
    } else {
        console.log("No se encontró el elemento con id 'elementoEstilo'");
    }
}

// 12. Función para cambiar modo oscuro
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// 13. Comprobar preferencia de modo oscuro al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// script.js

function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateNavbar();
}

function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (document.body.classList.contains('dark-mode')) {
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    } else {
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateNavbar();
});