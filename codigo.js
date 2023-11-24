const url = "https://botafogo-atletas.mange.li";

//const numero_jogador = 54;

    const header = document.createElement('header');
    header.id = 'meuHeader';
  

    const divBotoes = document.createElement('div');
  
    
    const btnMasculino = document.createElement('button');
    btnMasculino.textContent = 'Masculino';
    btnMasculino.className = 'btnMasculino';
    btnMasculino.onclick = () => pegar_coisas(`${url}/masculino`).then(
      (entrada) => {
        document.body.innerHTML = "";
        document.body.appendChild(header);
        for (atleta of entrada) {
          preenche(atleta);
        }
      }
    ); 
  
    const btnFeminino = document.createElement('button');
    btnFeminino.textContent = 'Feminino';
    btnFeminino.className = 'btnFeminino';
    btnFeminino.onclick = () => pegar_coisas(`${url}/feminino`).then(
        (entrada) => {
          document.body.innerHTML = "";
          document.body.appendChild(header);
          for (atleta of entrada) {
            preenche(atleta);
          }
        }
      ); 
  
    const btnTodos = document.createElement('button');
    btnTodos.textContent = 'Todos';
    btnTodos.className = 'btnTodos'
    btnTodos.onclick = () => pegar_coisas(`${url}/all`).then(
        (entrada) => {
          document.body.innerHTML = "";
          document.body.appendChild(header);
          for (atleta of entrada) {
            preenche(atleta);
          }
        }
      ); 



    const btnSair = document.createElement('button');
    btnSair.textContent = 'Sair';
    btnSair.className = 'btnSair' 
    btnSair.onclick = () => {window.location = '/';};

  
    // Adicionar os botões à div
    divBotoes.appendChild(btnMasculino);
    divBotoes.appendChild(btnFeminino);
    divBotoes.appendChild(btnTodos);
    divBotoes.appendChild(btnSair);
  
    // Adicionar a div com os botões ao cabeçalho
    header.appendChild(divBotoes);
  
    // Adicionar o cabeçalho à página
    document.body.appendChild(header);
  
  
  // Chamar a função para criar o cabeçalho quando a página carregar
  document.addEventListener('DOMContentLoaded', function () {
    // Criar um objeto Headers
    var meuHeader = new Headers();
  
    // Adicionar informações ao cabeçalho
    meuHeader.append('Chave', 'Valor');
    meuHeader.append('OutraChave', 'OutroValor');
})
  

const preenche = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');
    descricao.id = "saibamais"

    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    descricao.innerHTML = "Saiba mais";

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    container.onclick = handleClick;

    document.body.appendChild(container);

}

const handleClick = (e) => {
    const artigo = e.target.closest('article');
    window.location = `/outra.html?id=${artigo.dataset.id}`;
}


const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

