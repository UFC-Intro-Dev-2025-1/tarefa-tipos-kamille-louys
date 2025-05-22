// Implemente elementos da sala de aula como variáveis em TypeScript com tipos: number, string, boolean, undefined e objeto. Exiba as variáveis no terminal.
let ASala: number = 3
let NomeProfessora: string = 'Lana'
let MinhaPresenca: boolean = true
let Entendi;
//let CoisasNaSala:

interface MinhaMochila {
    Item1: String;
    Item2: Number;
}
let Mochila: MinhaMochila = {
    Item1: 'Caderno',
    Item2: 2,
};

console.log (('Sala: ' +  ASala) + ('\nProfessora: ' + NomeProfessora)+ ('\nEstava presente? '+ MinhaPresenca) + ('\n Oque tenho na mochila e quantos? ' + Mochila.Item1 + ' ' + Mochila.Item2));