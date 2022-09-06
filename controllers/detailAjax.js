window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam)
    callApi(myParam);
}

let callApi = (myParam) => {
    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
        method: 'GET',
    })

    promise.then((result) => {
        console.log('result', result.data.content.price);
        renderApicontent(result.data.content)
        renderApiRelateproduct(result.data.content.relatedProducts)
    })


    promise.catch((error) => {
        console.log(error);
    })
}

let renderApicontent = (arr) => {
    let sp = arr
    html = `
    <div class="container">
            <div class="left">
                <img src="${sp.image}" alt="">
            </div>
            <div class="right">
                <h2 class="productName">${sp.name}</h2>
                <span class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus aliquid asperiores explicabo. Qui, delectus temporibus quasi a nobis in amet tempore voluptatem fugit enim.</span>
                <h5>Available size</h5>
                <div class="size">
                    <button>${sp.size[1]}</button>
                    <button>${sp.size[2]}</button>
                    <button>${sp.size[3]}</button>
                    <button>${sp.size[4]}</button>
                    <button>${sp.size[5]}</button>
                </div>
                <h5 class="price">${sp.price}</h5>
                <div class="amount">
                    <button class="add1">+</button>
                    <i>1</i>
                    <button class="remove1">-</button>
                </div>
                <button class="AddToCart">Add To Cart</button>
            </div>
        </div>`
    document.querySelector('#product').innerHTML = html;
}

let renderApiRelateproduct = (arr) => {
    let sp = arr;
    let count = 0;
    html = "";
    for (i = 0; i < arr.length; i++) {
        sp = arr[i];
        count += 1;
        html += `
                <div class="item item${count}">
                    <img class="product-img" src="${sp.image}" alt="">
                    <h3 class="product-name">${sp.name}</h3>
                    <span class="product-desc">${sp.shortDescription}</span>
                    <div class="buy">
                        <a href="./detail.html?productid=${sp.id}" class="btnBuy">Buy Now</a>
                        <button class="price">${sp.price}</button>
                    </div>
                </div>`
    }
    document.querySelector('#Relate').innerHTML = html;
}