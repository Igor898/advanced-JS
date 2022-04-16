let button = document.getElementById('burger')

let navigation = document.getElementById('menu')

button.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block')
})

let btn = document.querySelector('.search-btn')

btn.addEventListener('click', () => {
  document.querySelector('.search-form').classList.toggle('n')
})
