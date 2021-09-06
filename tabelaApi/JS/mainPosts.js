function fazGet(url) {
let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdTitle = document.createElement("td");
    tdBody = document.createElement("td");
    tdId.innerHTML = usuario.userId
    tdNome.innerHTML = usuario.id
    tdTitle.innerHTML = usuario.title
    tdBody.innerHTML = usuario.body

    
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdTitle);
    linha.appendChild(tdBody);

    return linha;
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/posts");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById('tabela')
    
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
        
    });

    //Para cada usuario
        // cria uma linha
            // adicionar na tabela
}

main()


