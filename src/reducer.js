const initialState = {
    basket: [],
    basketAmount: 0,
};

// Selector to give me a basket information

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case "ADD_TO_BASKET":
            // logic for adding item to basket
            const basketAmount = state.basketAmount + Number(action.item.Price);
            return { 
                ...state,
                basket: [...state.basket, action.item],
                basketAmount: basketAmount,
            };

           
        case "REMOVE_FROM_BASKET":
            // logic for removing item from basket
            
            // we cloned the basket
            let newBasket = [...state.basket];

            // we found the index of the item to remove 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            const price = Number(state.basket[index].Price)
            if (index >= 0) {
                // item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket`
                );
            }
            const newBasketAmount = state.basketAmount - price
            return {
                ...state, 
                basket: newBasket,
                basketAmount: newBasketAmount,
            };
           
        default:
            return state;
    }
}

export default reducer;