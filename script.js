let relogioDigital = document.querySelector('.digital');
let ponteiroSegundo = document.querySelector('.p_s');
let ponteiroMinuto = document.querySelector('.p_m');
let ponteiroHora = document.querySelector('.p_h');

function atualizaRelogio() {
    let now = new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();
    let segundos = now.getSeconds();

    relogioDigital.innerHTML = `${insereZero(horas)}:${insereZero(minutos)}:${insereZero(segundos)}`;

    let segundoDeg = ((360 / 60) * segundos)-90;
    ponteiroSegundo.style.transform = `rotate(${segundoDeg}deg)`

    let minutoDeg = ((360 / 60) * minutos)-90;
    ponteiroMinuto.style.transform = `rotate(${minutoDeg}deg)`

    let horaDeg = ((360 / 12) * horas)-90;
    ponteiroHora.style.transform = `rotate(${horaDeg}deg)`

}
/** Essa função faz acrescentar um zero antes do numero, caso seja menor que 10
 * 
 * @param {*} time 
 * @returns retorna um zero antes da hora, minuto ou segundo se for menor do que 10
 */
function insereZero(time) {
    
    return time < 10 ? `0${time}` : time;
}

setInterval(atualizaRelogio,1000);
atualizaRelogio();

