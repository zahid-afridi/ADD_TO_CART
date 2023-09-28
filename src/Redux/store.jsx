import   {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store=configureStore({
 reducer:{
    pakcart:cartSlice
 }
})

export default store;