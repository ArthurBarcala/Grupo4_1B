class Funcionario{
    CPF;
    nomeCompleto;
    dataContratacao;
    depto;
    cargo;
    salarioBaseMensal;
    numeroDependentes;

    /*criação do método construtor*/
    constructor (CPF, nomeCompleto, depto, cargo, salarioBaseMensal, numeroDependentes){this.CPF = CPF;
    this.nomeCompleto = nomeCompleto;
    this.depto = depto;
    this.cargo = cargo;
    this.salarioBaseMensal = salarioBaseMensal;
    this.numeroDependentes = numeroDependentes;}
   
}