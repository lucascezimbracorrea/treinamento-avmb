
/*function ClientePrototype(prototipo){
    this.prototipo = prototipo;
    this.clone = function(){
        var cliente = new Cliente();
        cliente.nome = prototipo.nome;
        cliente.telefone = prototipo.telefone;
        cliente.email = prototipo.email;
        return cliente;
    };
}

function Cliente(nome, telefone, email){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;

    this.exibir = function(){
        alert("Nome: "+this.nome+" Telefone: "+this.telefone+" Email: "+this.email);
    }
}

function cadastrar(){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    var dados = new Cliente(nome, telefone, email);
    var prototipo = new ClientePrototype(dados);
    
    var cliente = prototipo.clone();
    cliente.exibir();
}  */


class Cliente {
    constructor() {
        this.nome = '';
        this.telefone = '';
        this.email = '';
    }

    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }

    setTelefone(telefone){
        this.telefone = telefone;
    }
    getTelefone(){
        return this.telefone;
    }

    setEmail(email){
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
} 

function exibir(c){
    let nome = c.getNome();
    let telefone = c.getTelefone();
    let email = c.getEmail();

    alert("Nome: "+nome+" Telefone: "+telefone+" Email: "+email);
}

function cadastrar(){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    var c = new Cliente();

    c.setNome(nome);
    c.setEmail(email);
    c.setTelefone(telefone);

    exibir(c);
}  