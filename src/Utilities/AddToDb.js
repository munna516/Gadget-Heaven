import { json } from "react-router-dom"
const getStoreCartList = () => {
    const storedListStr = localStorage.getItem('cart-list')
    if (storedListStr) {
        const storeListObj = JSON.parse(storedListStr)
        return storeListObj
    }
    else {
        return []
    }
}
const getStoreWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storeListObj = JSON.parse(storedListStr)
        return storeListObj
    }
    else {
        return []
    }
}

const addToStoreCartList = (id) => {
    const storedList = getStoreCartList()
    if (storedList.includes(id)) {
        return true
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('cart-list', storedListStr)
        return false
    }
}
const addToStoreWishList = (id) => {
    const storedList = getStoreWishList()
    if (storedList.includes(id)) {
        return true
    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
        return false
    }
}

export { addToStoreCartList, addToStoreWishList, getStoreCartList, getStoreWishList }