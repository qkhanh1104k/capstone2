// let callApiRegister = () => {
//     let promise = axios({
//         url: '',
//         method: ''
//     })
//     promise.then((result) => {

//     })
//     promise.catch((error) => {

//     })
// }

function create() {
    pwcf();
    let user = new userRegister();
    user.email = document.querySelector("#email").value;
    user.password = document.querySelector("#password").value;
    user.name = document.querySelector("#name").value;
    user.gender = document.querySelector("#true").checked;
    user.phone = document.querySelector("#phone").value;
    console.log("user", user);
    //gọi api đưa dữ liệu về server
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: user,
    });
    promise.then(function (result) {
        console.log(result.data);
        //Gọi api load lại tbody

    });
    promise.catch(function (error) {
        console.log(error);
    });
}

function pwcf() {
    let password = document.querySelector("#password").value;
    let pwcf = document.querySelector("#cfpw").value;
    if (password !== pwcf) {
        alert("2 password không giống nhau");
    }
}
