import { Cliente } from "./Cliente.js";

// branch ContaCorrente
export class ContaCorrente {
    agencia;
    // atributo privado porem ainda não esta valido para produção (#saldo) o padrão é utilizar _saldo , porem não torna o atributo devidamente privado atualmente no js
    // operações (parametros ou argumentos) e metodos dentro da classe
    // #saldo = 0;
    _saldo = 0;

    // Usando GET para ler o atributo privado e permitir a exibição.
    get saldo(){
      return this._saldo;
    }

    // asociação de cliente a conta corrente do mesmo (iniciar o atributo cliente)
    _cliente;

    // Usando SET para instancear um atributo privado e permitindo o acesso somente por uma instancia de classe especifica.
    set cliente(novoValor){
      if(novoValor instanceof Cliente){
        this._cliente = novoValor;
      }
    }

    get cliente(){
      return this._cliente;
    }

    // operação de SAQUE - inicio da Branch SAQUE
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        return valor;
      }
    }
  
    // Operação de Deposito - inicio da Branch DEPOSITO
    depositar(valor) {
      if (valor <= 0) {
        return;
      }
      this._saldo += valor;
    }

    /*
    Operação de Transferência de valores entre contas
    
    Ter cuidade e não adicionar atributos dinamicamente a metodos para consertar classes, pois assim pode-se criar um erro na alteração do valor do atributo referenciado.
    
     */
    transferir(valor, conta){
      // exemplo: const valorSacado = this.sacar(valor = 20);
      // conta.cidade = "Rio de Janeiro";
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }

  }