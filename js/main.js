const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

class ProductsCart {
    constructor() {
        this.goods = []
        this._getProducts()
        this.makeBasket()
    }

    _getProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .then(data => data.contents.forEach(item => {
                document.querySelector('.products').insertAdjacentHTML('beforeend', `
                <div class="product-item" data-id="${item.id_product}">
                    <img src="${'https://anivisual.net/avatar/01/86/32217419.jpg'}" alt="Some img">
                    <div class="desc">
                        <h3>${item.product_name}</h3>
                        <p>${item.price} $</p>
                        <button class="buy-btn">Купить</button>
                    </div>
                </div>
                `)
            }))
    }

    makeBasket() {
        let btns = document.querySelectorAll('.buy-btn')
        btns.forEach((param) => {
            param.addEventListener('click', (event) => {
                document.querySelector('.basket').insertAdjacentHTML('beforeend', `
                    <div>title: <span>${event.target.parentElement.children[0].innerText}</span></div>
                `)
            })
        })
    }

}

let list = new ProductsCart()




