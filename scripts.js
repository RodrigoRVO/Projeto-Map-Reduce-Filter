console.log(menuOptions)

const list = document.querySelector('ul')
let myLi = ''





function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return newValue
}

function showAll(newArray) {
    myLi = ''

    newArray.forEach(product => {
        myLi = myLi + `
        <li>
            <img src="${product.src}" class="salada">
            <p>${product.name}</p>
            <p class="price"> ${formatCurrency(product.price)}</p>
        </li>
        `
    })

    list.innerHTML = myLi
}

function discount() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))

    showAll(newPrices)
}


function sum() {

    finalValue = menuOptions.reduce((acc, value) => {
        const finalSum = value.price
        return acc + finalSum
    }, 0)

    list.innerHTML = `<li>
     <p> A soma de todos os produtos é de: ${formatCurrency(finalValue)}</p>
     </li>`

}

function vegans() {
   veganFilter = menuOptions.filter (product => product.vegan)
    showAll(veganFilter)
}



























/*

const list = document.querySelector('ul')
let myLi = ''

function showAll(newArray) {

    myLi = ''

    newArray.forEach((product) => {
        myLi = myLi + `
        <li>
            <img src="${product.src}" class="salada">
            <p>${product.name}</p>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
        </li>
        `
    })

    list.innerHTML = myLi

}

function discount() {
    const newPrices = menuOptions.map ((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)

}


 */