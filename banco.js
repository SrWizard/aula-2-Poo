class Banco{
    constructor (nome, cnpjt, cpf, telefone, cep){
       this.nome=nome
       this.cnpjt=cnpjt
       this.cpf=cpf
       this.telefone=telefone
       this.cep=cep
    }
}
let Banco1 = new Banco ("Lulamolusco",90.269, 55555, 4444, 89514)
let Banco2 = new Banco ("Zafenadi Paneia", 666.666, 8888, 999)
let Banco3 = new Banco ("Godines Gordin", 866.666, 8588, 969)
let Banco4 = new Banco ("Zafenadi Paneia", 666.668, 8884, 899)
console.log (Banco1)
Banco1.nome=("Roubank")
console.log (Banco2)
console.log (Banco3)
console.log (Banco4)