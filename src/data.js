let matricula = [
    {
    number: 181372,
    name: "HERRERA PALOS ARMANDO", 
}
];

export function getMatricula(){
    return matricula;
}

export function getMatricu(number){

    return matricula.find((matricu)=> matricu.number===number);
}