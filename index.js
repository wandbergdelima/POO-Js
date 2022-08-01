class Cliente{
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
    
    // operações (parametros ou argumentos) e metodos dentro da classe
    
    // operação de SAQUE
    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
        
    }

    // Operação de Deposito
    depositar(valor){
        if (valor > 0) {
            this.saldo += valor;
        }
    }

}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 10000;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.sacar(50);


console.log(contaCorrenteRicardo);