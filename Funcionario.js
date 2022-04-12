class Funcionario{
    cpf;
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

    //Criando métodos getters
    getCpf(){
        return this.cpf
    }
    getNomeCompleto(){
        return this.nomeCompleto
    }
    getDepto(){
        return this.depto
    }
    getCargo(){
        return this.cargo
    }
    getSalarioBase(){
        return this.salarioBaseMensal
    }
    getNumDependentes(){
        return this.numeroDependentes
    }
    
}
