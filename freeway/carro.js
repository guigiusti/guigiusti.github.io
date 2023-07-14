function fnc_carro() {
    // Chamar as Funcoes
    mov_carro();
    rep_carro();
}
function mov_carro() {
    // Velocidade dos Carros
    for (let i = 1; i < 7; i += 1) {
    carros_x[i] -= vel[i];
    }
}
function rep_carro() {
    // Fazer os Carros voltarem ao sair da tela
    for (let i = 1; i < 7; i += 1) {
        if (carros_x[i] < -50) {
            carros_x[i] = 600
        }
    }
}
