const cards = document.querySelector('.cards');


products.forEach((product) => {
    // console.log(`${product.name} : Ksh. ${product.price}`)
    let exists = false;
    const addToCart = (productToAdd) => {
        shoppingCartItems.push(productToAdd)
    };
    const card = `
    <div class="card me-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title" style="text-transform: capitalize;">${product.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Ksh. ${product.price}</h6>
            <div class="btn-group ${product.name.split(' ')[0]}-btn-group" role="group" aria-label="Basic outlined example">
            <! -- Here is where we are appending our buttons -->
            </div>
        </div>
    </div>
    `
    cards.innerHTML += card;
    const cartBtnGroup = document.querySelector(`.${product.name.split(' ')[0]}-btn-group`)
    cartBtnGroup.append(getPlusButton(product, exists, `${product.name.split(' ')[0]}`));
    cartBtnGroup.append(getButtonOne(product, exists, `${product.name.split(' ')[0]}`));
    cartBtnGroup.append(getMinusButton(product, exists, `${product.name.split(' ')[0]}`));
})

products.forEach((product) => {
    const buttonOne = document.querySelector(`#${product.name.split(' ')[0]}`);
    buttonOne.addEventListener('click', (event) => {
        event.preventDefault()
        const plusButton = document.querySelector(`#plus-${product.name.split(' ')[0]}`);
        const getProduct = shoppingCartItems.find((singleCardItem) => {
            return singleCardItem.name === product.name;
        });
        exists = typeof getProduct != 'undefined';
        console.log(exists)
        if (exists) {
            shoppingCartItems.splice(shoppingCartItems.indexOf(product), 1);
            buttonOne.classList.remove('btn-outline-danger')
            buttonOne.classList.add('btn-outline-primary')
            buttonOne.innerText = 'Add to cart';
            plusButton.disabled = true;
        } else {
            shoppingCartItems.push({...product, quantity: 1})
            buttonOne.classList.remove('btn-outline-primary')
            buttonOne.classList.add('btn-outline-danger')
            buttonOne.innerText = 'Remove from cart';
            plusButton.disabled = false;
        }
        console.log('clicked', shoppingCartItems)
    })
})

// products.forEach((product) => {
//     const buttonOne = document.querySelector(`#plus-${product.name.split(' ')[0]}`);
//     buttonOne.addEventListener('click', (event) => {
//         event.preventDefault()
//         console.log(shoppingCartItems.indexOf({...product, quantity: 1}))
//         const minusButton = document.querySelector(`#minus-${product.name.split(' ')[0]}`);
//         if (product.quantity + 1 === 2) {
//             minusButton.disabled = false
//             minusButton.addEventListener('click', (event) => {
//                 event.preventDefault()
//                 if (product.quantity + 1 < 2) buttonOne.disabled = true;
//                 shoppingCartItems.splice(shoppingCartItems.indexOf({...product, quantity: 1}), 1, { ...product, quantity: product.quantity - 1 });
//                 console.log(shoppingCartItems)
//             })
//         };
//         shoppingCartItems.splice(console.log(shoppingCartItems.indexOf({...product, quantity: 1})), 1, { ...product, quantity: product.quantity + 1 });
//         console.log(shoppingCartItems)
//     })
// })

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
