import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
}
export const basketSlice=createSlice({
name:'basket',
initialState,
reducers:{
    addToBasket:(s,a)=>{
        s.items=[...s.items,a.payload]
    },
    removeFromBasket:(s,a)=>{
        const index=s.items.findIndex(i=>i.id==a.payload.id);
        let newBasket=[...s.items];

        if(index>=0){
            newBasket.splice(index,1);
        }
        s.items=newBasket;
    },
}    
})

export const {addToBasket,removeFromBasket}=basketSlice.actions

export default basketSlice.reducer

export const selectBasketItems=(s)=>s.basket.items;

export const selectBasketTotal=(s)=>s.basket.items.reduce((t,i)=>t+=i.price,0)

export const selectBasketItemsWithId=(s,id)=>s.basket.items.filter(i=>i.id==id)