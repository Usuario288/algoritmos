// 1 - Utilizando ForLoop e array juntos, faça uma lista com 5 nomes, e faça o forLoop percorrer por ela exibindo todos os nomes um por um.
// Será necessário um método de array chamado "length".


const nomes = ["Fulano", "Ciclano", "Delclano", "John Doe", "Bob"];

for(i = 0; i < nomes.length; i++){
    console.log(i + 1 + ":" + nomes[i]);
}