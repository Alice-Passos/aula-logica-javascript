//Abrinco um banco de dados IndexadoDB
const request = indexedDB.open("clienteDB", 1);

request.onupgradeneeded = function(event){
    const db = event.target.result;
    const store = db.createObjectStore("clientes", {keyPath: "id"});
    store.creatIndex("nome", "nome", {unique: false});
} //unique = algo que não se repete (email por exemplo)

request.onsuccess = function(event){
    const db = event.target.result;
    const transaction = db.trasaction("clientes", "readwrite");
    const store = transaction.objectStore("clientes");


//Adicionando um novo cliente
store.add({id: 1, nome: "Maria Eduarda", email: "marial@gmail.com"});

//Lendo um cliente pelo nome
const index = store.index("nome");
const nomeIndex = index.get("Maria Eduarda");

nomeIndex.onsuccess = function(){
    console.log(nomeIndex.result);
}
}