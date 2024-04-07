// primeiro variavel nomeHeroi
let nomeHeroi ="Thor"
// segundo criar variavel de nivel
let nivel 
// terceiro criar valores de xp 
let xp = 20000
// criar as condições para xp dar o nivel 

if (xp <= 1000){
    nivel = "Ferro"
}
else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze"
}

else if (xp >= 2001 && xp <= 5000){
    nivel = "Prata"
}

else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
}
else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina"
}
else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
}
else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}
else if (xp >= 10001){
    nivel = "Imortal"
}

   // mensagem de saida 
console.log ("O Herói de nome " + nomeHeroi +  " está no nível de " + nivel)