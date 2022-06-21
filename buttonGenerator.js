const shoppingCartItems = [];
const products = [
    {
        name: 'milk',
        price: 100,
        quantity: 1
    },
    {
        name: 'chocolate',
        price: 2000,
        quantity: 1
    },
    {
        name: 'ice cream',
        price: 700,
        quantity: 1
    }
]

const getButtonOne = (product, exists, id) => {
    const buttonOne = document.createElement('button')
    buttonOne.id = id;
    buttonOne.classList.add('btn-outline-primary', 'btn')
    buttonOne.innerText = 'Add to cart';
    return buttonOne;
}

const getPlusButton = (product, exists, id) => {
    const buttonOne = document.createElement('button')
    buttonOne.id = `plus-${id}`;
    buttonOne.classList.add('btn-outline-primary', 'btn')
    buttonOne.innerText = ' + ';
    buttonOne.disabled = true;
    return buttonOne;
}

const getMinusButton = (product, exists, id) => {
    const buttonOne = document.createElement('button')
    buttonOne.id = `minus-${id}`;
    buttonOne.classList.add('btn-outline-primary', 'btn')
    buttonOne.innerText = ' - ';
    buttonOne.disabled = true;
    return buttonOne;
}
