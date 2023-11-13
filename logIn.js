// email-input
// password-ino

function logIn() {

    const api = 'https://655239d55c69a7790329ba98.mockapi.io/users';

    let logInBtn = document.querySelector("#logIn");
    let mail = document.querySelector("#email-input");
    let pass = document.querySelector("#password-ino");

    logInBtn.addEventListener("click", ()=>{

        mail = mail.value;
        pass = pass.value;

        fetch(api, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            if (mail == data[i].email && pass == data[i].password) {
                // console.log(data);
                (window.location.href = 'products.html');
            }
        }
    })
    .catch((error) => console.error(`The error is: ${error}`));

    })
}


logIn();