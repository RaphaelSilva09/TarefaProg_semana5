// exercício 7
``class Animal {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    descrever () {
        return `o animal é um ${this.nome} e tem ${this.idade} anos`;
    }
  }

  const cachorro = new Animal ("cachorro", 7);
  const gato = new Animal ("gato", 5);

  console.log(cachorro.descrever());
  console.log(gato.descrever());``

//----------------------------------------------------------------------------
// exercício 8

``class Animal {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    descrever () {
        return `o animal é um ${this.nome} e tem ${this.idade} anos`;
    }
  }

  class Gato extends Animal {
    constructor(nome, idade, pelagem) {
        super(nome, idade);
        this.pelagem = pelagem
    }

    miar() {
        return `o gato faz miaaaaaaaaaaaaaaaaaaaaauuuuuuuu`
    }
  }

  const cachorro2 = new Animal("cachorro", 14);
  const gato2 = new Gato("gato", 3, "laranja");

  console.log(cachorro2.descrever());
  console.log(gato2.descrever() + " e " + gato2.miar());``

//----------------------------------------------------------------------------
// exercício 9

``class SomadordeNotas{
    constructor(banana) {
        this.total = 0;
    }

    adicionarNotas(nota) {
        this.total += nota;
    }

    verTotal() {
        return this.total;
    } 
}

const minhasNotas = new SomadordeNotas()

minhasNotas.adicionarNotas(10);
console.log(minhasNotas.verTotal());``

//----------------------------------------------------------------------------
// exercício 10


// classe funcionário
``class Funcionário {
    constructor(nome, idade, salarioBase) {
        this.nome = nome
        this.idade = idade
        this.salarioBase = salarioBase  
    }

    // método 
    calcularSalario() {
        
    }
}

// classe professor
class Professor extends Funcionário {
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        super(nome, idade, salarioBase)
        this.disciplina = disciplina;
        this.horasAula = horasAula;
    }

    // calcula salário do professor, tendo hora aula com valor em reais e trabalho em horas mensais
    calcularSalario(horas, valorHora) {
         horas*valorHora
    }
}

// criação dos objetos professores 
const Bruno = new Professor("Bruno",42, 1440, "filosofia");
const Jorge = new Professor("Jorge", 53, 1440, "biologia", 120);

console.log(Bruno.calcularSalario(120, 20) + Jorge.calcularSalario(120,18));``