// branch ContaCorrente
export class ContaCorrente {
    agencia;
    // atributo privado porem ainda não esta valido para produção (#saldo) o padrão é utilizar _saldo , porem não torna o atributo devidamente privado atualmente no js
    // #saldo = 0;
    _saldo = 0;
    // operações (parametros ou argumentos) e metodos dentro da classe
  
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
  }