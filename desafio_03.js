let heroi = {
    nome: 'Pablo',
    idade: '42',
    tipo:'mago'
}
let tipoAtaque = atacar()

function atacar(){
    let ataque
    if(heroi.tipo == 'guerreiro'){
      ataque = 'espada'  
    }else if(heroi.tipo == 'mago'){
        ataque = 'magia'  
    }else if(heroi.tipo == 'monge'){
        ataque = 'artes marciais'  
    }else if(heroi.tipo == 'ninja'){
        ataque = 'shuriken'  
    }
    return ataque
}

console.log(`O ${heroi.tipo} atacou usando ${tipoAtaque}`)



