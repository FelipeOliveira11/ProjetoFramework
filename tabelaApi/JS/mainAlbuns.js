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
        tdId.innerHTML = usuario.userId
        tdNome.innerHTML = usuario.id
        tdTitle.innerHTML = usuario.title
    
        
        linha.appendChild(tdId);
        linha.appendChild(tdNome);
        linha.appendChild(tdTitle);
    
        return linha;
    }
    
    function main() {
        let data = fazGet("https://jsonplaceholder.typicode.com/albums");
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