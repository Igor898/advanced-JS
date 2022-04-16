//Отправляйте свои данные с помощью $emit в верхний компонент, а вниз с помощью props
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        filtered: [
            {
                "id_product": 124,
                "product_name": "product 1",
                "price": 1600
            },
            {
                "id_product": 457,
                "product_name": "product 2",
                "price": 3000
            },
            {
                "id_product": 1324,
                "product_name": "product 3",
                "price": 1600
            },
            {
                "id_product": 4572,
                "product_name": "product 4",
                "price": 3000
            },
            {
                "id_product": 1244,
                "product_name": "product 5",
                "price": 1600
            },
            {
                "id_product": 4557,
                "product_name": "product 6",
                "price": 3000
            },
            {
                "id_product": 1264,
                "product_name": "product 7",
                "price": 1600
            },
            {
                "id_product": 4577,
                "product_name": "product 8",
                "price": 3000
            },
            {
                "id_product": 1457,
                "product_name": "product 9",
                "price": 3000
            }
        ],
        imgCart: 'http://anime.com.ru/modules/coppermine/albums_for_animecomru/Anime_CG/Anime_Pictures_2014/ES_02/16/thumb_635657___Nagi_no_Asukara___Hiradaira_Chisaki.jpg',
        products: [
            {
                "id_product": 124,
                "product_name": "product 1",
                "price": 1600
            },
            {
                "id_product": 457,
                "product_name": "product 2",
                "price": 3000
            },
            {
                "id_product": 1324,
                "product_name": "product 3",
                "price": 1600
            },
            {
                "id_product": 4572,
                "product_name": "product 4",
                "price": 3000
            },
            {
                "id_product": 1244,
                "product_name": "product 5",
                "price": 1600
            },
            {
                "id_product": 4557,
                "product_name": "product 6",
                "price": 3000
            },
            {
                "id_product": 1264,
                "product_name": "product 7",
                "price": 1600
            },
            {
                "id_product": 4577,
                "product_name": "product 8",
                "price": 3000
            },
            {
                "id_product": 1457,
                "product_name": "product 9",
                "price": 3000
            }
        ],
        imgProduct: 'https://cloudstatic.eva.ru/eva/240000-250000/243287/avatar/1252735526293.jpg',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                
        },
        addProduct(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if(data.result === 1){
                       let find = this.cartItems.find(el => el.id_product === item.id_product);
                       if(find){
                           find.quantity++;
                       } else {
                           const prod = Object.assign({quantity: 1}, item);
                           this.cartItems.push(prod)
                       }
                    }
                })
        },
        remove(item){
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                    
                })
        },
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
});

