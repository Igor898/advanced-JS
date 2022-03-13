const products = [
    {img: '80124557.jpg', id: 1, title: 'Notebook', price: 2000},
    {img: '80124557.jpg', id: 2, title: 'Mouse', price: 20},
    {img: '80124557.jpg', id: 3, title: 'Keyboard', price: 200},
    {img: '80124557.jpg', id: 4, title: 'Gamepad', price: 50}
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <img class="photo" src=${item.img}>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    let a = productsList.join('')
    console.log(productsList);
    document.querySelector('.products').innerHTML = a;
};

renderPage(products);