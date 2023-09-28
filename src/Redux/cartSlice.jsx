import   {createSlice} from '@reduxjs/toolkit'



const cartSlice=createSlice({
name:"pakcart",
initialState:[],
reducers:{
    addtocart(state,action){
    state.push(action.payload)
    },
    reomvecart(state,action){
        return state.filter((item)=>item.id !== action.payload)
    }
}
})

export default cartSlice.reducer;
export const {addtocart,reomvecart}=cartSlice.actions