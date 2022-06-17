class Calculadora{
    constructor(primerValor,segundoValor){
        this.primerValor = primerValor;
        this.segundoValor = segundoValor;
        this.numberA = "";
        this.numberB = "";
        this.operacion = "";
        this.signos = {
            suma: "+",
            resta: "-",
            division: "%",
            multiplicacion: "x"
        };
        this.calculos = new Calculos();
    }
    agregarValor(number){
        if(number === "." && this.numberA.includes(".")){
            this.numberA = this.numberA;
        } else {
            this.numberA = this.numberA + number;
        }
        this.imprimirValor();
    };
    imprimirValor(){
        this.primerValor.textContent = `${this.numberA}`;
        this.segundoValor.textContent = `${this.numberB} ${this.signos[this.operacion] || ""}`;
    }
    borrar(){
        this.numberA = this.numberA.slice(0,-1);
        this.imprimirValor();
    }
    borrarTodo(){
        this.numberA = "";
        this.numberB = "";
        this.operacion = "";
        this.imprimirValor();
    }
    operaciones(tipoOperacion){
        if( !( RegExp(/[1234567890]/g).test(this.numberA)) ){
            return
        }
        this.operacion = tipoOperacion;
        this.numberB = this.numberA;
        this.numberA = "";
        this.imprimirValor();
    }
    igual(){
        if(this.numberA === "" || this.numberB === ""){
            return
        }
        this.numberA = parseFloat(this.numberA);
        this.numberB = parseFloat(this.numberB);
        this.numberA = String(this.calculos[this.operacion](this.numberB, this.numberA));
        this.numberB = "";
        this.operacion = "";
        this.imprimirValor();
    }
}