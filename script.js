let container = document.createElement('div');
container.className = 'container';

let data = [
    {
        image: './image/1.jpg',
        price: "$60.00",
        full_price: "$115.00"
    },
    {
        image: './image/1.jpg',
        price: "$60.00",
        full_price: "$115.00"
    },
    {
        image: './image/1.jpg',
        price: "$60.00",
        full_price: "$115.00"
    },
    {
        image: './image/1.jpg',
        price: "$60.00",
        full_price: "$115.00"
    },
    {
        image: './image/1.jpg',
        price: "$60.00",
        full_price: "$115.00"
    },
    {
        image: './image/1.jpg',
        price: "$60.00",
        full_price: "$115.00"
    },
];

const renderBlock = () => {
    let fragment = new DocumentFragment();

    data.map((item, id) => {
        let block = document.createElement('div');
        block.innerHTML = `
        <div id="btn" class="cards">
            <img src="${item.image}">
            <div class="texts">
                <p>${item.price}</p>
                <p class="text-line">${item.full_price}</p>
            </div>
            <button>ADD TO CART</button>
        </div>
        `;
        fragment.append(block);
    })
    return fragment;
}

document.body.append(container);
container.append(renderBlock());