let wrapper = document.querySelector('[recentProducts]')
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                  {
                   id: 1,
                    productName: "Hand Filer",
                    category: "Nail Tools",
                    description: "100/180 grit hand file suitable for nail-prep",
                    amount: 20,
                    img_url: "http://thuthuzaposwayo.github.io/All-images/images/nail-file.jpg"
                },

                {
                    id: 2,
                    productName: "Rechargeable UV Lamp",
                    category: "Nail Tools",
                    description: "Allows you to cure and dry gel products on nail",
                    amount: 800,
                    img_url: "https://thuthuzaposwayo.github.io/All-images/images/newinlamp.jpg"
                },

              {
                id: 3,
                productName: "SUN UV Lamp",
                category: "Nail Tools",
                description: "Allows you to cure and dry gel products on nail",
                amount: 600,
                img_url: "https://thuthuzaposwayo.github.io/All-images/images/images/lamp.jpg"

            },
            
            {
            id: 4,
                    productName: "DIY Gel Set",
                    category: "Nail Gel",
                    description: "Gel products you can use by self",
                    amount: 500,
                    img_url: "https://thuthuzaposwayo.github.io/All-images/images/oil.jpg"
            },

                {
                id: 5,
                    productName: "DIY Gel Set",
                    category: "Nail Gel",
                    description: "Gel products you can use by self",
                    amount: 500,
                    img_url: "https://thuthuzaposwayo.github.io/All-images/images/diy-gel.jpg"
                },

                {
                    id: 6,
                    productName: "Lipoil",
                    category: "Lip Products",
                    description: "Hydrating lip oil with SPF 15 for extra protectionjpg",
                    amount: 200,
                    img_url: "https://thuthuzaposwayo.github.io/All-images/images/lipoil.jpg"
                },

                {
                    id: 7,
                    productName: "The Blender Set",
                    category: "Makeup  Brushes",
                    description: "23 piece brush set",
                    amount: 1500,
                    img_url: "https://thuthuzaposwayo.github.io/All-images/images/blender-set.jpg"
                },

                {
                    id: 8,
                    productName: "Nail Brushes",
                    category: "Nail Tools",
                    description: "20 piece nail brush and nails art tools",
                    amount: 100,
                    img_url: "https://thuthuzaposwayo.github.io/All-images/images/nailbrushes.jpg"
                },

                {
                    id: 9,
                    productName: "Gel Polish",
                    category: "Nail Gel",
                    description: "Gel set for nail art",
                    amount: 100,
                    img_url: "https://thuthuzaposwayo.github.io/All-images/images/gel set.jpg"
                },
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