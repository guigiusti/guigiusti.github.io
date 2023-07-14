function fnc_ator () {
    // Chamar as Funcoes
    mov_ator();
    col_ator();
    marcaponto();
    exibir_pontuacao();
}
function mov_ator () {
    // Mover o Personagem
    if(keyIsDown(UP_ARROW)) {
        ator_y -= 3;
    }
    if(keyIsDown(DOWN_ARROW)) {
        ator_y += 3;
    }
    // Limitar a saida da tela
    ator_y = constrain(ator_y, 0,370);
}
function col_ator() {
    // Verificador de Colisao
    var hit = false;
    for (let i = 1; i < 7; i += 1) {
        colisao = collideRectCircle(carros_x[i], pistas [i], 50, 40, ator_x, ator_y, 15)
        if (colisao) {
            colidiu() // COLIDIU!!!
        }
    }
}

function colidiu() {
    // Se Colidiu e tiver com mais de 0 pontos, perde ponto.
    if (ator_y != 366) {
        if (pontuacao > 0) {pontuacao -= 1;}
        ator_y = 366
    }
}
function exibir_pontuacao () {
    // Exibir os Pontos
    textSize(30)
    textAlign(CENTER)
    fill(75,0,130)
    text (pontuacao, width / 5, 29);
}
function marcaponto() {
    // Marcar os Pontos
    if (ator_y < 30) {
        pontuacao++;
        ator_y = 366
    }
}