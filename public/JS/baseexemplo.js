const nome = "Magdalena Tavares";
let nome2 = "";
let pessoaDefault = {
    nome: "Magdalena Tavares",
    idade: "26",
    trabalho: "programadora"
}

let nomes = ["Magdalena", "Matheus", "Pedro"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Magdalena Tavares",
        idade: "26",
        trabalho: "programadora" 
    },
    {
        nome: "Matheus",
        idade: "21",
        trabalho: "programador"
    }
];

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado");
    console.log(nome2);
}

function recebealteraNome(novoNome) {
    nome2 = novoNome ;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa (pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("---------Imprimir Pessoas---------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas ();

adicionarPessoa({
    Nome: "Pedro Silva",
    Idade: "28",
    Trabalho: "Porteiro"
})

console.log(adicionarPessoa);

imprimirPessoas ();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa ({
   // nome: "Matheus",
    //idade: "21",
    //trabalho: "ux / ui desginer"
//});

//recebealteraNome("João Silva");
//recebealteraNome ("Maria Silva")

//alterarNome ();