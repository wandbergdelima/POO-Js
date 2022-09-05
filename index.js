import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';



const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
// contaCorrenteRicardo.agencia = 1001;
// Retorno do atributo cliente para vincular a conta corrente a quem pertence 
// contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);
// conta2.cliente = cliente2;
// conta2.agencia = 102;

// Realizando a Tranferência
contaCorrenteRicardo.transferir(200 , conta2);

let contas = [];
contas = [cliente1,cliente2];

console.log('====================================');
console.log(contas);
console.log("Total de Contas no Banco: " + ContaCorrente.numeroDeContas);
console.log('====================================');