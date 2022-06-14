function horario() {
    const msg = document.querySelector('#msg');
    const img = document.querySelector('#img');
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha.png.jpg';
        document.body.style.background = '#e2cd9f';
        msg.innerHTML = `Agora são ${hora} horas e ${minutos}minutos.<br>BOM DIA!`;
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/meiodia.png.jpg';
        document.body.style.background = '#b9846f';
        msg.innerHTML = `Agora são ${hora} horas e ${minutos}minutos.<br>BOA TARDE!`;
    } else if(hora > 18 && hora < 24) {
        img.src = 'imagens/noite.png.jpg';
        document.body.style.background = 'rgb(0, 27, 46)';
        msg.innerHTML = `Agora são ${hora} horas e ${minutos}minutos.<br>BOA NOITE!`;
    }else if(hora === 18) {
            img.src = 'imagens/pordosol.png.jpg';
            document.body.style.background = 'rgb(185, 50, 1)';
            msg.innerHTML = `Agora são ${hora} horas e ${minutos}minutos.<br>FELIZ POR DO SOL!`;
    }else {
        if(hora === 1){
            msg.innerHTML = `Agora são ${hora} hora e ${minutos}minutos.<br>TENHA UMA BOA MADRUGADA!`;
        }else {
            msg.innerHTML = `Agora são ${hora} horas e ${minutos}minutos.<br>TENHA UMA BOA MADRUGADA!`;
        }
        img.src = 'imagens/madrugada.png.jpg';
        document.body.style.background = '#0c0c0c';

    }
}
