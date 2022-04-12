class Funcionario{
    cpf;
    nomeCompleto;
    dataContratacao;
    depto;
    cargo;
    salarioBaseMensal;
    numeroDependentes;

    /*criação do método construtor*/
    constructor (cpf, nomeCompleto, depto, cargo, salarioBaseMensal, numeroDependentes){
    this.cpf = cpf;
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
    //criando métodos setters
    setDepto(departamento){
        this.depto = departamento
    }
    setCargo(novoCargo){
        this.cargo = novoCargo
    }
    setNumDependentes(dependentes){
        this.numeroDependentes = dependentes
    }
    //Criando um método para settar o Reajuste do salário
    reajustarSalarioBase(aumentoSalario){
        return salarioBaseMensal += aumentoSalario/100 * salarioBaseMensal
    }
    
    
}
