const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false
    },
    methods: {
        filter(){
            const regexp = new RegExp(this.userSearch, 'i')
            this.filtered = this.products.filter(el => regexp.test(el.product_name))
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(product){
            document.querySelector('.cart-block').insertAdjacentHTML('beforeend', `
                <div>
                    <span>Title: ${product.product_name}</span>
                    <span>Price: ${product.price}</span>
                    <span><button class="btn-del">delete</button></span>
                </div>
            `)
        }
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el)
                    this.filtered.push(el)
                }
            })
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el)
                    this.filtered.push(el) 
                }
            })
    }
})

let btn = document.querySelector('.btn-cart')
btn.addEventListener('click', () => document.querySelector('.cart-block').classList.toggle('invisible'))
