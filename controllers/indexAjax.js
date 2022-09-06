// Lấy thông tin từ server về và hiển thị lên product

function getDataProductApi() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        ResponseType: "JSON",
    });

    // thành công
    promise.then(function (result) {
        console.log("result", result.data.content);
        renderProduct(result.data.content);
    });

    //  thất bại
    promise.then(function (error) {});
}

window.onload = function () {
    // gọi api lấy data từ backend
    getDataProductApi();
};

function renderProduct(arrProduct) {
    var html = "";
    for (var i = 0; i < arrProduct.length; i++) {
        var snk = arrProduct[i];
        //mỗi lần~ duyệt lấy  ra 1 object product từ mảng
        html += `
        <div class="col-md-4 py-4 px-5 col">
        <div class="card-item card">
            <img
                src="${snk.image}"
                class="card-img-top"
                alt="Fissure in Sandstone"
            />
            <div class="card-body">
                <h1 class="card-title">${snk.name}</h1>
                <p class="card-text">
                  ${snk.shortDescription}
                </p>
                <div class="d-flex card-footer_click">
                    <a href="../detail.html?productid=${snk.id}" class="btn ">Buy now</a>
                    <span>${snk.price}$</span>
                </div>
            </div>
        </div>
      </div>
      `;
    }
    document.querySelector("#tblSanPham").innerHTML = html;
}
