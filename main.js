

function apiFunction() {
    
    // console.log(1);
    let cont = document.querySelector("#cont");

    const products_api = 'https://fakestoreapi.com/products';
    
    fetch(products_api)

    .then(response => response.json())
    .then(data => {
        // console.log(data);

        for (let i = 0; i < data.length; i++) {
            let box = document.createElement("div");
            box.setAttribute("id", "box");
            box.setAttribute("class", "box");
            
            cont.appendChild(box);
            
            let para = document.createElement("p");
            para.setAttribute("id", "para");
            para.setAttribute("class", "para");
            para.innerHTML = `${data[i].title} <hr>`

            box.appendChild(para);

            let image = document.createElement("img");
            image.setAttribute("id", "img");
            image.setAttribute("class", "img");
            image.setAttribute("src", data[i].image);
            box.appendChild(image);

            let price = document.createElement("small")
            price.setAttribute("id", "price");
            price.setAttribute("class", "price");
            price.innerHTML = `<hr> Price: ${data[i].price} SAR`
            box.appendChild(price)

        }
    })
}
apiFunction();



