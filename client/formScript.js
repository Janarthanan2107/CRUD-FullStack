"use strict";

const productForm = document.getElementById("productForm");
const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const category = document.getElementById("category");
const image = document.getElementById("image");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/v1/products/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Corrected Content-Type
        },
        // Add the request body here if you're sending data
        body: JSON.stringify({
            title: title.value,
            description: description.value,
            price: price.value,
            category: category.value,
            image: image.value
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
});
