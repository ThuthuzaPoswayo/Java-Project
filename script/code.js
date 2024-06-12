let wrapper = document.querySelector('[recentProducts]')
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                    {
                        id: 1,
                        productName: "Hand Filer"
                        category: "Nail Tools",
                        description: "100/180 grit hand file suitable for nail-prep",
                        amount: 20,
                        img_url: "http://thuthuzaposwayo.github.io/All-images/images/nail file.jpg"
                    },
                    {
                        id: 2,
                        productName: "Reachargebale UV Lamp",
                        category: "Nail Tools",
                        description: "Allows you to cure and dry gel products on nail",
                        amount: 800,
                        img_url: "https://thuthuzaposwayo.github.io/All-images/images/newinlamp.jpg"
                    },
                    {
                        id: 3,
                        productName: "DIY Gel Set",
                        category: "Nail Gel",
                        description: "Gel products you can use for self",
                        amount: 500,
                        img_url: "https://thuthuzaposwayo.github.io/All-images/images/images/diy gel.jpg"
                    },
                    {
                        id: 4,
                        productName: "Lipoil",
                        category: "Lip Products",
                        description: "Hydrating lip oil with SPF 15 for extra protection",
                        amount: 200,
                        img_url: "https://thuthuzaposwayo.github.io/All-images/images/lipoil.jpg"
                    },
                    {
                        id: 5,
                        productName: "The Blender Set",
                        category: "Makeup  Brushes",
                        description: "23 piece brush set",
                        amount: 15000,
                        img_url: "https://thuthuzaposwayo.github.io/All-images/images/blender set.jpg"
                    }
                ]
            )
        )
// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()
function recentProducts() {
    try {
        let arrSize = products.length
        let latestProducts = products.reverse().slice(0, arrSize >> 1)
        latestProducts.forEach(product => {
            wrapper.innerHTML += `
        <div class="card">
            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.description}</p>
            </div>
        </div>
    `
        })
    } catch (e) {
        wrapper.textContent = "Please contact our administrator"
        setTimeout(() => {
            location.reload()
        },
            2000
        )
    }
}
recentProducts()
// Counter
window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}