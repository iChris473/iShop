
import {atom} from "recoil"

export const carts = atom({
    key:"cartState ",
    default:[]
})

export const productItem = atom({
    key:"productItem",
    default:[]
})
