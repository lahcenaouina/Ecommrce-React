import {action, createStore} from 'easy-peasy';

const store = createStore({
    wishlist: {
        items: JSON.parse(localStorage.getItem('Wishlist')) || [],
        addToWishlist: action((state, productId) => {
            console.log("Was added ! ")

            state.items = [...(new Set([productId, ...state.items]))];
            localStorage.setItem('Wishlist', JSON.stringify(state.items))
        }),
        removeFromWishlist: action((state, productId) => {
            console.log("was Removed !")

            const index = state.items.indexOf(productId)
            if (index !== -1) {
                state.items.splice(index, 1);
            }

            localStorage.setItem('Wishlist', JSON.stringify(state.items))

        }),
        clearWishlist: action((state) => {
            state.items = [];
            localStorage.setItem('Wishlist', JSON.stringify(state.items))

        }),

    },
    cart: {
        items: [],
        addtocart: action((state, productId) => {
            state.items = [...(new Set([productId, ...state.items]))];
            console.log('Was Added to card ')
        }),
        removefromCart: action((state, productId) => {
            const index = state.items.indexOf(productId)
            if (index !== -1) {
                state.items.splice(index, 1);
            }
            console.log('Was Rm from card ')

        }),
        clearCart : action((state) => {
            state.items = [];
        })
    } ,
    User : {
        Data: [],
        setData : action ((state , Payload) => {
            state.Data = [Payload];
        })
    }
});
export default store