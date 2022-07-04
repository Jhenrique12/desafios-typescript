// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";

// Resolucao (uma maneira de varias outras):

interface Employee { //criando interface para employees
    name: string,
    code: number,
}

const employee1: Employee = {
    name: 'John',
    code: 15,
}
