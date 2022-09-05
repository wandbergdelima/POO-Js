export class Cliente {
    nome;
    _cpf;

    get cpf(){
      return this._cpf;
    }
  
  /*
    Aplicando um construtor para permitir a alteração da informação que sera armazenada no atributo somente no momento da sua construção.
  */
    constructor(nome, cpf){
      this.nome = nome;
      this._cpf = cpf;
    }
  }