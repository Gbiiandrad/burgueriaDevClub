const list = document.querySelector("ul");
const buttonShowAll = document.querySelector('.show-all')
let myLi = "";

function showAll() {
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
list.innerHTML = myLi
}

buttonShowAll.addEventListener('click', showAll)