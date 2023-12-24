"use strict";

const container = document.getElementById("container")

// Global variable
const getAllProductsUrl = "http://localhost:5000/api/v1/products";

// Functions
const init = () => {
    getAllProducts();
};

const getAllProducts = async () => {
    try {
        const response = await fetch(getAllProductsUrl);
        const res = await response.json();
        console.log(res.data);
        displayProducts(res.data)
    } catch (err) {
        console.error("Error fetching data:", err);
        container.textContent = "Sorry Something Went Wrong!!";
    }
};

const displayProducts = (products) => {
    const productsEle = products.map((product) => {
        return (
            `<div id=${product.id} class="mb-2">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary" id=${product.id} onclick="deleteProduct(event)">Delete</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productUpdateModel" id=${product.id}>
                            Update
                            </button>
                        </div>
                        </div>
                    </div>

                    <div class="modal" id="productUpdateModel" tabindex="-1" aria-labelledby="productUpdateModelLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="productUpdateModelLabel">Product Update Form</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                    <form action="#" id="productForm">
                                    <div class="container d-flex flex-column gap-3">
                                        <div class="form-floating">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="title"
                                            value=${product.title}
                                            />
                                            <label for="title">Title:</label>
                                        </div>
                                        <div class="form-floating">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="description"
                                            name="description"
                                            placeholder="description"
                                            value=${product.description}
                                            />
                                            <label for="description">Description:</label>
                                        </div>
                                        <div class="form-floating">
                                            <input
                                            type="number"
                                            class="form-control"
                                            id="price"
                                            name="price"
                                            placeholder="price"
                                            value=${product.price}
                                            />
                                            <label for="price">Price:</label>
                                        </div>
                                        <div class="form-floating">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="category"
                                            name="category"
                                            placeholder="category"
                                            value=${product.category}
                                            />
                                            <label for="category">Category:</label>
                                        </div>
                                        <div class="form-floating">
                                            <input
                                            type="text"
                                            class="form-control"
                                            id="image"
                                            name="image"
                                            placeholder="image"
                                            value=${product.image}
                                            />
                                            <label for="image">Image Url:</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" onClick="updateProduct(${product.id})" data-bs-dismiss="modal">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        )
    });
    container.innerHTML = productsEle.join("")
}

const deleteProduct = async (event) => {
    event.preventDefault();
    const { id } = event.target

    if (confirm("Are you sure to delete this product ?")) {
        await fetch(`http://localhost:5000/api/v1/products/${id}`, {
            method: "DELETE",
        })
    }
}

init()
