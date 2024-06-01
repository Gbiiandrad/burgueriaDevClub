const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonFilterAll = document.querySelector(".filter-all");

function showAll(productsArray) {
  // para zerar a Li sempre q for chamado
  let myLi = "";

  menuOptions.forEach((product) => {
    // para ele pegar tds e adicionar no final vamos add myLi = myLi + 1
    myLi += `
        <li >
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
        `;
  });

  //mostrar na tela
  list.innerHTML = myLi;
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    // Spread Operator (sem precisar colocar cd campo 1 por 1 repetido. Manter os oriinais e so mudar o price)

    ...product,
    price: product.price * 0.9, //10% de descontos
  }));

  showAll(newPrices);
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
  list.innerHTML = `
        <li>
            <p> O valor total dos itens é R$ ${totalValue}</p>
        </li>
        `;

}


function filterAllItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan === true);

  showAll(filterJustVegan);
}

// () => para so colocar a função quando é chamado.
buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
buttonSumAll.addEventListener("click", sumAllItems);
buttonFilterAll.addEventListener("click", filterAllItems);
