var soldado = new Soldado("Rilary")
var percurso = [_, _, _, _, _, _, _, _, _, "o", _, _, _, "O"]

for (i = 0; i < percurso.length; i++) {
    if ("o" == percurso[i]) {
        soldado.atirar(5)
        for (i = 0; i < 4; i++) {
            soldado.pular()
        }
    }
}
for (i = 0; i < percurso.length; i++) {
    if ("O" == percurso[i]) {
        soldado.atirar(10)
        for (i = 0; i < 4; i++) {
            soldado.pular()
        }
    }
}

