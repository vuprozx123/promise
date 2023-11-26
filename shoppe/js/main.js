function openRegisterModal() {
    const modalElement = document.getElementById('register-modal');

    if (modalElement) {
        modalElement.style.display = 'flex';
    }
}

fetch('https://fakestoreapi.com/products')
    .then((respone) => {
        console.log(respone);
        if (respone.status === 200) {
            return respone.json();
        }
    })
    .then((data) => {
        console.log(data);
        const Container = document.querySelector('#product-container');
        let html = '';
        data.forEach(product => {
            console.log(product);
            html += `<div class="grid-colum-2-4">
            <a class="home-product-item" href="#">
                <div class="product-image-container" style="height: 160px; width: 100%; display: flex; justify-content: center; align-items: center">
                <img src="${product.image}" style="height: 150px; width: 90%;">
                </div>
                <div class="home-product-item-name">${product.title}</div>
                <div class="home-product-item-price">
                    <span class="home-product-item-price-new">${product.price}$</span>
                </div>
                <div class="home-product-item-action">
                    <span class="home-product-item-action-like  home-product-item-action-liked">
                        <i class=" home-product-item-action-like-icon-empty fa-regular fa-heart" style="color: #74777b;"></i>
                        <i class="home-product-item-action-like-icon-fill fa-solid fa-heart" style="color: #ff1414;"></i>
                    </span>
                    <div class="home-product-item-rating">
                        <i class="home-product-item-rating-star-gold fa-solid fa-star"></i>
                        <i class="home-product-item-rating-star-gold fa-solid fa-star"></i>
                        <i class="home-product-item-rating-star-gold fa-solid fa-star"></i>
                        <i class="home-product-item-rating-star-gold fa-solid fa-star"></i>
                        <i class="fa-solid fa-star" style="color: #cececf;"></i>
                    </div>
                    <span class="home-product-item-sell">88 đã bán</span>
                </div>
                <div class="home-product-item-origin">
                    <span class="home-product-item-origin-brand">Whoo</span>
                    <span class="home-product-item-origin-name">${product.category}</span>
                </div>
                <div class="home-product-item-favourite">
                    <i class="home-product-item-favourite-icon fa-solid fa-check"></i>
                    Yêu thích
                </div>
                <div class="home-product-item-sale">
                    <span class="home-product-item-sale-percent">10%</span>
                    <span class="home-product-item-sale-label">GIẢM</span>
                </div>
            </a>
        </div>`;
            console.log(html);
        });
        Container.innerHTML = html;
    })


