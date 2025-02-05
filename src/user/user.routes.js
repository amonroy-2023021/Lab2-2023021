import { Router } from "express"
import { UpdateProfilePicture, updateUser, updatePassword, deleteUser, getUsers, getUserById } from "./user.controller.js"
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator, UpdateImageValidator } from "../middlewares/user-validators.js"

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)

router.patch("/updateImage/:uid",UpdateImageValidator, UpdateProfilePicture)

export default router
