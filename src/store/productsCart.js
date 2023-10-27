import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    supplier: {}
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // action: function

        addProduct: (state, action) => {
            state.products = [...state.products, action.payload.product]
        },

        setProducts: (state, action) => {
            state.products = action.payload.products
            state.supplier = action.payload.supplier
        },

        updateProduct: (state, action) => {
            const product = action.payload
            const index = state.products.findIndex(x => x.id  === product.id)
            state.products[index] = product
        },

        setPrice: (state, action) => {
            const {id, updatedPrice} = action.payload
            const index = state.products.findIndex(product => product.id === id)
            state.products[index].price = updatedPrice
            state.products[index].status = "Price updated"
        },

        setQuantity: (state, action) => {
            const {id, updatedQuantity} = action.payload
            const index = state.products.findIndex(product => product.id === id)
            state.products[index].quantity = updatedQuantity
            state.products[index].status = "Quantity updated"
        },

        setPriceAndQuantity: (state, action) => {
            const {id, updatedPrice, updatedQuantity} = action.payload
            const index = state.products.findIndex(product => product.id === id)
            state.products[index].price = updatedPrice
            state.products[index].quantity = updatedQuantity
            state.products[index].status = "Price and Quantity updated"
        },

        setStatus: (state, action) => {
            const {status, id} = action.payload
            const index = state.products.findIndex(product => product.id === id)
            state.products[index].status = status
        },

        setApproved: (state, action) => {
            state.supplier.status = "Approved"
        }

    }
});

export const {
    setProducts,
    addProduct,
    updateProduct,
    setApproved,
    setPrice,
    setQuantity,
    setPriceAndQuantity,
    setStatus,
} = productsSlice.actions;
export default productsSlice.reducer;


