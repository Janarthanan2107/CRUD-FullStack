import { users } from "../data.js";

// get all user
export const getAllUser = (req, res) => {
    res.status(200).json({ success: true, data: users })
}

// get dingle user
export const getSingleUser = (req, res) => {
    const { id } = req.params;
    const singleUser = users.find((user) => user.id === Number(id))

    if (!singleUser) {
        res.status(200).send({ success: true, message: `User not fount in the id : ${id}` })
    } else {
        res.status(200).json({ success: true, data: singleUser })
    }
}

// delete user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const findUser = users.find((user) => user.id === Number(id))

    if (!findUser) {
        res.status(200).json({ success: true, message: `User with the id: ${id} is not found` })
    } else {
        const updatedUsers = users.filter((user) => user.id !== Number(id))
        res.status(200).json({ success: true, message: "User deleted successfully!", data: updatedUsers })
    }
}