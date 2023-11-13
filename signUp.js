function signUp() {

    const api = 'https://655239d55c69a7790329ba98.mockapi.io/users';

    let signUpBtn = document.querySelector("#signUp");
    let name = document.querySelector("#name");
    let email = document.querySelector("#email")
    let password = document.querySelector("#pass")
    const check_Mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    signUpBtn.addEventListener("click", () =>{

        name = name.value;
        email = email.value;
        password = password.value;

        if (name.length < 5) {
            alert('Name must have at least 5 letters');
        } else if (!check_Mail.test(email)){
            alert('Please enter a valid email');
        } else if (password.length < 8){
            alert('Password must have at least 8 letters');
        }  else if (name === '' || email === '' || password === '') {
            alert('Please fill the required fields!!');
        } else {
            fetch(api, {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    (window.location.href = 'products.html');
                })
                .catch((error) => console.error(`The error is: ${error}`));
        }
            })
        }


signUp();