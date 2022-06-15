const shoppingCartItems = [];
const products = [
    {
        name: 'milk',
        price: 100
    },
    {
        name: 'chocolate',
        price: 2000
    },
    {
        name: 'ice cream',
        price: 700
    }
]
products.forEach((product) => {
    console.log(`${product.name} : Ksh. ${product.price}`)
})

const order = (orderedProduct) => {
    let results = null;
    products.forEach((product) => {
        if (orderedProduct === product.name) {
            results = product;
        }
    });
    if (results) {
        shoppingCartItems.push(results)
        console.log('Added to cart')
    }
    else {
        console.log('Out of stock')
    }
}
let total = 0;
const displayTotal = () => {
    shoppingCartItems.forEach((product) => {
        console.log(`${product.name} : ksh ${product.price}`)
        total += product.price
    })
    console.log(total)
}

const makePayment = (amountPaid) => {
    // console.log(total)
    // console.log(amountPaid - total)
    if (amountPaid < total) {
        console.log(`ksh${total - amountPaid} is still remaining to be paid`)
    } else if (amountPaid > total) {
        console.log(`Your balance ${amountPaid - total}`)
    } else if (amountPaid === total) {
        console.log('payment received')
    } else {
        console.log('error occured')
    }
}
