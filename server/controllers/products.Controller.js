import { products } from "../data.js"

// get all products
export const getAllProducts = (req, res) => {
    res.status(200).json({ success: true, data: products })
}

// get single product
export const getSingleProduct = (req, res) => {
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id))

    if (!singleProduct) {
        res.status(200).send({ success: true, message: `Product not fount in the id : ${id}` })
    } else {
        res.status(200).json({ success: true, data: singleProduct })
    }
}

// create new product
export const createProduct = (req, res) => {
    // body is the inbuilt keyword for req
    // console.log(req.body)

    const id = Math.random().toString(16).slice(2)

    const newProduct = {
        id,
        ...req.body
    }

    console.log(newProduct)

    res.status(201).json({ success: true, message: `Your product successfully created wit the id : ${id}` })
}

// update existing product
export const updateProduct = (req, res) => {
    const { id } = req.params;
    const findProduct = products.find((product) => product.id === Number(id))

    if (!findProduct) {
        res.status(200).send({ success: true, message: `Product not fount in the id : ${id}` })
    } else {
        const newProduct = {
            id: findProduct.id,
            ...req.body,
        }

        const updatedProducts = products.map((product) => {
            if (product.id === Number(id)) {
                return {
                    id: product.id,
                    title: newProduct.title,
                    description: newProduct.description,
                    price: newProduct.price,
                    category: newProduct.category,
                    image: newProduct.image
                }
            } else {
                return product;
            }
        })
        res.status(200).json({ success: true, message: `Product Updated Successfully with the id ${id}!`, data: updatedProducts })
    }
}

// delete product
export const deleteProduct = (req, res) => {
    const { id } = req.params;
    const findProduct = products.find((product) => product.id === Number(id))

    if (!findProduct) {
        res.status(200).json({ success: true, message: `Product with the id: ${id} is not found` })
    } else {
        const updatedProducts = products.filter((product) => product.id !== Number(id))
        res.status(200).json({ success: true, message: "Product deleted successfully!", data: updatedProducts })
    }
}