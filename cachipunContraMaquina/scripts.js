//considerar una jugada como un evento click en uno de los botones
//usar math.random para numero entre 0-2(0-piedra, 1-papel, 2-tijera)
//comparar resultados de click contra la jugada generada y definir ganador
//declarar vencedor y enviar mensaje de final de partida
//generar un ciclo finito donde repitamos el juego completo
let contadorJugadas = prompt('Ingresa el numero de partidas que quieres jugar');
let jugadas=0;
let user=0, mach=0;

const desarmar = ()=>{

    document.querySelector('#dash').style.display = "none";

    if(user>mach)alert('el usuario le gano a la maquina');
    if(mach>user)alert('el usuario perdio contra la maquina');
    
}

document.addEventListener('click', (e)=>{
    let jugador='', maquina='', resultado='';
    //evaluar que el click se haga en un button y obtener jugada del usuario
    if(e.target.tagName == 'BUTTON'){
    jugador = e.target.innerHTML;
    } 
    //generando la jugada  de la maquina 
    maquina = Math.floor(Math.random()*2); //(0-piedra, 1-papel, 2-tijera)    

    //comparacion de resultados y decretar ganador
    if(maquina ==0 && jugador=='piedra')resultado='empate';
    if(maquina ==0 && jugador=='papel'){
        resultado='gana jugador';
        user++;
    }
    if(maquina ==0 && jugador=='tijera'){
        resultado='pierde jugador';
        mach++;
    }
    if(maquina ==1 && jugador=='piedra'){
        resultado='pierde jugador';
        mach++;
    }
    if(maquina ==1 && jugador=='papel')resultado='empate';
    if(maquina ==1 && jugador=='tijera'){
        resultado='gana jugador';
        user++;
    }
    if(maquina ==2 && jugador=='piedra'){
        resultado='gana jugador';
        user++;
    }
    if(maquina ==2 && jugador=='papel'){
        resultado='pierde jugador';
        mach++;
    }
    if(maquina ==2 && jugador=='tijera')resultado='empate';
    document.querySelector('#result').innerHTML = `<p>${resultado}</p>`;    
    
    alert('siguiente jugada');
    jugadas++;
    if(jugadas>=contadorJugadas)desarmar();
})


/**TO DO LIST */
// mostrar el conjunto de botones SOLO despues de recibir el numero de partidas
//esconder los botones luego de cumplir con la cantidad de partidas
//lo anterior se logra modularizando
