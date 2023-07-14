function funcoes_ligar() {
    imagemDaEstrada = loadImage("media/estrada.png")
    imagemDoAtor = loadImage("/guigiusti.github.io/freeway/media/ator-1.png")
    imagemCarro1 = loadImage("/guigiusti.github.io/freeway/media/carro-1.png")
    imagemCarro2 = loadImage ("/guigiusti.github.io/freeway/media/carro-2.png")
    imagemCarro3 = loadImage ("/guigiusti.github.io/freeway/media/carro-3.png")
    imagemCarros = [0, imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
}
function mostrar_ator() {
    image(imagemDoAtor, ator_x, ator_y, 30, 30)
}
function mostrar_carros() {
    for (let i = 1; i < 7; i += 1){
        image(imagemCarros[i], carros_x[i], pistas[i], 50, 40)
    }
}
function carregar_imagens() {
    background(imagemDaEstrada);
    mostrar_ator();
    mostrar_carros();
    fnc_carro();
    fnc_ator();
}