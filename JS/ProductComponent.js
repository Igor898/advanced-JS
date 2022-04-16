Vue.component('products', {
   props: ['products', 'img'],
   template: `<div class="catalog-grid container">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="img"
                :product="item"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
        <div class="product-item" @click="$parent.$emit('add-product', product)">
            <div class="product-item__img-box">
                <img class="product-img" src="img/card4.png" alt="photo">
                <div class="overlay">
                    <div class="product-img-border">
                        <p class="product-img-border-text">
                            Add to Cart
                        </p>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <h5 class="product-card__h5">{{product.product_name}}</h5>
                <p class="product-card__p">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                <p class="dollar">{{product.price}}</p>
            </div>
        </div>
    `
})