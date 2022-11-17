const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  // desktopMenu.classList.remove('inactive');
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

  // console.log(isMobileMenuClosed);
  // aside.classList.toggle('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
}

/*Lista de produtos*/ 
const productList = []
productList.push({
  name: 'bike',
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 600,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Computador',
  price: 1000,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */
function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
  
    // product = {name,price,image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
   
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
  
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    /*AppendChild*/
    productInfoFigure.appendChild(productImgCart);
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
