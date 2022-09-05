import { Cliente } from "./Cliente.js";

// branch ContaCorrente
export class ContaCorrente {
  // definindo atributo como estatico é possivel acessa-lo por todos os Dados construidos pela classe
    static numeroDeContas = 0;
  
  // operações (parametros ou argumentos) e metodos dentro da classe
    agencia;
    // atributo privado porem ainda não esta valido para produção (#saldo) o padrão é utilizar _saldo , porem não torna o atributo devidamente privado atualmente no js
    // asociação de cliente a conta corrente do mesmo (iniciar o atributo cliente)
    _cliente;
    // #saldo = 0;
    _saldo = 0;
    

    /*
    Iniciando os Getters e Setters

    Usando GET para ler o atributo privado e permitir a exibição.
    */
    
    get saldo(){
      return this._saldo;
    }

    // Usando SET para instancear um atributo privado e permitindo o acesso somente por uma instancia de classe especifica.
    set cliente(novoValor){
      if(novoValor instanceof Cliente){
        this._cliente = novoValor;
      }
    }

    get cliente(){
      return this._cliente;
    }

    // constructor da conta corrente
    constructor(agencia, cliente){
      this.agencia = agencia;
      this.cliente = cliente;

      /*
      forma de acessar atributos estaticos dentro do construtor (nome da classe+Atributo)
      agora com esse contador da para saber quantas contas foram criadas no projeto.
      */
      ContaCorrente.numeroDeContas += 1;

    }

    /*
    Inicio dos Metodos
      
    operação de SAQUE - inicio da Branch SAQUE
    */
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