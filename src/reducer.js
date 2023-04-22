export const initialState = {
    basket: [],
    user: null
  };
  
  export const getBasketTotal = basket =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {

    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket]  //here i create a new variable to store the basket data in it



            if (index >= 0) {
                newBasket.splice(index, 1); //here i delete using splice method specfic to the index value that we want to delete
            } else {
                console.warn(
                    `cant remove product (id: ${action.id}) as its not in basket:`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":   
        return{
            ...state,
            user: action.user
        } 
        default:
            return state;
    }
};

export default reducer;
