class Cliente{
    nome;
    cpf;
}

// branch ContaCorrente
class ContaCorrente {
    agencia;

    // atributo privado porem ainda não esta valido para produção (#saldo) o padrão é utilizar _saldo , porem não torna o atributo devidamente privado atualmente no js
    #saldo = 0;
    
    // operações (parametros ou argumentos) e metodos dentro da classe
    
    // operação de SAQUE - inicio da Branch SAQUE
    sacar(valor){
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
        }
        
    }

    // Operação de Deposito - inicio da Branch DEPOSITO
    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.sacar(50);


console.log(contaCorrenteRicardo);