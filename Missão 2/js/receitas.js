const receitas = [
    {
        titulo: "Arroz de Couve-Flor",
        imagem: "img/arroz.jpg",
        preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: [
        "Arroz",
        "Couve-Flor",
        "Cebola Média",
        "Azeite"
        ]
    },
    {
        titulo: "Bolo de Café",
        imagem: "img/bolo.jpg",
        preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
        ingredientes: [
        "Farinha de Trigo",
        "Açúcar",
        "Café Coado",
        "Chocolate em Pó",
        "Ovos"
        ]
    },
    {
        titulo: "Coxinha de morango",
        imagem: "img/coxinha.jpg",
        preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
        ingredientes: [
        "Leite Condensado",
        "Chocolate em Pó",
        "Manteiga",
        "Morango",
        "Chocolate Granulado"
        ]
    }
];
    
const getListaIngredientes = (receita) => {
    let listaHTML = '<ul>';
    listaHTML += receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('');
    listaHTML += '</ul>';
    return listaHTML;
  }

const getCard = (receita) => {
    return `
        <div class="card" style="width: 250px;">
        <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
        <div class="card-body">
            <h5 class="card-title">${receita.titulo}</h5>
            ${getListaIngredientes(receita)}
            <hr>
            <p class="card-text">${receita.preparo}</p>
        </div>
        </div>
    `;
}

const preencheCatalogo = () => {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    const cardsHTML = receitas.map(receita => getCard(receita)).join('');
    pnlCatalogo.innerHTML = cardsHTML;
  }
  