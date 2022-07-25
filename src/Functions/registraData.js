import readlineSync from 'readline-sync';

function diaRegistrado() {
    console.log(`=== Digite o Dia e Mês que você nasceu ===`);

    let dia = readlineSync.questionFloat('Dia: ');

    return dia;
}

function mesRegistrado() {
    let mes = readlineSync.questionFloat('Mes: ');

    return mes;
}

export { diaRegistrado, mesRegistrado };
