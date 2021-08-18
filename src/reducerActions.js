

const addToBasket = (productDetails) =>{
    return {
        type: "ADD_TO_BASKET",
        item: productDetails
    }
}

export const pushToBasket = (productDetails) => {
    return (dispatch) =>{
            dispatch(addToBasket(productDetails))
    }
}

const removeFromBasket = (productId) =>{
    return {
        type: "REMOVE_FROM_BASKET",
        id: productId
    }
}

export const popFromBasket = (productId) =>{
    return (dispatch) =>{
        dispatch(removeFromBasket(productId))
    }
}