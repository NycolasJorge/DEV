const horas = document.getElementById('Horas')
const minutos = document.getElementById('Minutos')
const segundos = document.getElementById('Segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let ho = dateToday.getHours()
    let mi = dateToday.getMinutes()
    let se = dateToday.getSeconds()
    
    if (ho < 10) ho = '0' + ho;
    if (mi < 10) mi = '0' + mi;
    if (se < 10) se = '0' +se;

    horas.textContent = ho
    minutos.textContent = mi
    segundos.textContent = se

})



