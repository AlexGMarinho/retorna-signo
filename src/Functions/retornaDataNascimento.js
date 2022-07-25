import { diaRegistrado, mesRegistrado } from './registraData.js';

function dataNascimento() {
    let dataNascimento = new Date();

    dataNascimento.setDate(diaRegistrado());
    dataNascimento.setMonth(mesRegistrado() - 1);

    return dataNascimento;
}

export default dataNascimento;
