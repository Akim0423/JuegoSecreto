let numero=0;
let intentos=0;
let lista=[];
let numeroMaximo=10;

function asignarTexto(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;     
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario===numero){
        asignarTexto('p',`Acertaste el numero en ${intentos} ${(intentos==1)? 'vez':'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuario no acerto
        if(numeroUsuario>numero){
            asignarTexto('p','El numero secreto es menor')
        }else{
            asignarTexto('p','El numero secreto es mayor')
        }
        intentos++;
        Limpiar();
    }
    return;
}

function Limpiar(){
    document.querySelector('#valorUsuario').value='';

}

function generarNumero() {
    console.log(numero);
    console.log(lista);
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if(lista.length== numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los numeros posibles');
    }else{
    //Si el numero generado esta incluido en la lista
        if(lista.includes(numeroGenerado)){
            return generarNumero();    
        }else{
            lista.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionInicial(){
    asignarTexto('h1','Juego del numero secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numeroMaximo}` );
    numero=generarNumero();
    intentos=1;
}

function reiniciarJuego(){
    Limpiar();
    condicionInicial();  
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionInicial();

