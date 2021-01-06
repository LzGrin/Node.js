const getProducts = () => {
    fetch("/api/users")
        .then(response => response.json())
        .then(products => {
            let textBlock = document.querySelector(".response");
            textBlock.innerHTML = "";
            products.forEach(product => {
                textBlock.innerHTML += `<span> Product articul: ` + product.articul + `</span><br>`
                + `<span> Product name: ` + product.name + `</span><br>`
                + `<span> Product price: ` + product.price + `</span><br>`
                + `<span> Product count: ` + product.count + `</span><br>`
            });
        });
};

const deleteProduct = () => {
    fetch("/api/users", {
        method: "DELETE",
        body: JSON.stringify( {
            name: "Some name",
            price: "Some price",
            count: "Some count"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            getProducts();
            console.log(json);
        });
};

let buttonDeleteProduct = document.querySelector(".button-delete-products");

deleteProduct();