let primerValor = document.getElementById("primerValor");
let segundoValor = document.getElementById("segundoValor");
let buttonNumber = document.querySelectorAll(".buttonNumber");
let buttonOperador = document.querySelectorAll(".buttonOperador");
let buttonBorrar = document.getElementById("buttonBorrar");
let borrarTodo = document.getElementById("borrarTodo");
let buttonIgual = document.getElementById("igual");

const calculadora = new Calculadora(primerValor,segundoValor);

buttonNumber.forEach(button => {
    button.addEventListener("click", () => {
        calculadora.agregarValor(button.innerHTML);
    })
});
buttonOperador.forEach(button => {
    button.addEventListener("click", () => {
        calculadora.operaciones(button.value);
    })
})

buttonBorrar.addEventListener("click", () => {
    calculadora.borrar();
})
borrarTodo.addEventListener("click" , () => {
    calculadora.borrarTodo();
})

buttonIgual.addEventListener("click", () => {
    calculadora.igual();
})