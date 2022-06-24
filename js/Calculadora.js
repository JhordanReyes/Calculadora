class Calculadora{
    constructor(primerValor,segundoValor){
        this.primerValor = primerValor;
        this.segundoValor = segundoValor;
        this.numberA = "";
        this.numberB = "";
        this.operacion = "";
        this.signoNumberA = "";
        this.signoNumberB = "";
        this.signos = {
            suma: "+",
            resta: "-",
            division: "%",
            multiplicacion: "x",
            raiz: "√",
            potenciaAuto: "^ 2",
            potencia: "^",
            PI: "π"
        };
        this.calculos = new Calculos();
    }
    agregarValor(number){
        if(this.numberA === "ERROR"){
            this.numberA = "";
        }
        if(number === "." && this.numberA.includes(".")){
            this.numberA = this.numberA;
        } else {
            this.numberA = this.numberA + number;
        }
        this.imprimirValor();
    };
    imprimirValor(){
        if(this.operacion === "raiz"){
            this.primerValor.textContent = `${this.numberA}`;
            this.segundoValor.textContent = `${this.signos[this.operacion]} ${this.numberB}`
            return
        }
        this.primerValor.textContent = `${this.numberA}`;
        this.segundoValor.textContent = `${this.numberB} ${this.signos[this.operacion] || ""}`;
    }
    borrar(){
        if(this.numberA === "ERROR"){
            this.borrarTodo();
            return
        }
        this.numberA = this.numberA.slice(0,-1);
        this.imprimirValor();
    }
    borrarTodo(){
        this.numberA = "";
        this.numberB = "";
        this.operacion = "";
        this.signoNumberA = "";
        this.signoNumberB = "";
        this.imprimirValor();
    }
    operaciones(tipoOperacion){
        if( !( RegExp(/[1234567890]/g).test(this.numberA)) ){
            if( !(tipoOperacion === "resta") ){
                return
            }
            this.signoNumberA = tipoOperacion;
            this.numberA = this.signos[this.signoNumberA];
            this.imprimirValor();
            return
        }
        if(tipoOperacion === "raiz" && this.numberA < 0){
            this.numberA = "ERROR";
            this.imprimirValor();
            return
        }
        this.operacion = tipoOperacion;
        this.numberB = this.numberA;
        this.signoNumberB = this.signoNumberA;
        this.signoNumberA = "";
        this.numberA = "";
        this.imprimirValor();
    }
    igual(){
        if(this.operacion === "raiz" || this.operacion === "potenciaAuto" || this.operacion === "PI"){
            this.numberA = this.calculos[this.operacion](this.numberB);
            if(this.numberA % 1 === 0){
                this.numberA = String(this.numberA);
            } else {
                this.numberA = String( this.numberA.toFixed(5) );
            }
            this.numberB = "";
            this.signoNumberB = "";
            this.operacion = "";
            this.imprimirValor();
            return
        }
        if(this.numberA === "" || this.numberB === ""){return}
        this.numberA = parseFloat(this.numberA);
        this.numberB = parseFloat(this.numberB);
        this.numberA = this.calculos[this.operacion](this.numberB, this.numberA);
        if(this.numberA % 1 === 0){
            this.numberA = String(this.numberA);
        } else {
            this.numberA = String( this.numberA.toFixed(5) );
        }
        this.numberB = "";
        this.signoNumberB = "";
        this.operacion = "";
        this.imprimirValor();
    }
}
