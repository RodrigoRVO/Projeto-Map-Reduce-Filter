console.log(menuOptions)


const list = document.querySelector('ul')
let myLi = ''


function showAll(newArray) {
    myLi = ''

    newArray.forEach(product => {
        myLi = myLi + `
        <li>
            <img src="${product.src}" class="salada">
            <p>${product.name}</p>
            <p class="price">R$ ${product.price}</p>
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
    let finalValue = menuOptions.reduce((acc, value) => {
        const finalSum = acc + value.price
        return finalSum
    }, 0)

    list.innerHTML = `
    <li>
    <p> A soma de todos os produtos é de: ${finalValue}</p>
    </li>
    `
}


function vegan() { 
    veganFilter = menuOptions.filter (product => product.vegan)
    showAll(veganFilter)

}
