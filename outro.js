const foto = document.getElementById('foto');
const nome = document.getElementById('nome');
const descricao = document.getElementById('descricao');
const nascimento = document.getElementById('nascimento');
const altura = document.getElementById('altura');
const btnVoltar = document.getElementById('btnVoltar');

btnVoltar.onclick = () => window.location = '/card.html';

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


const carregarPagina = async () => {
    const parametros = new URLSearchParams(window.location.search);
    const url = "https://botafogo-atletas.mange.li/" + parametros.get('id');

    const atleta = await pegar_coisas(url);

    descricao.innerHTML = atleta.descricao;
    nome.innerText = atleta.nome_completo;
    nascimento.innerText = `Data de Nascimento: ${atleta.nascimento}`;
    altura.innerText = `Altura: ${atleta.altura}`;
    foto.src = atleta.imagem;
}

carregarPagina();





