import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   count:0
}
const HeaderSlice = createSlice({
    name:'header',
    initialState,
    reducers : {
        searchCount : (state,action) =>{
            debugger
         state.count = action.payload
        }
    }
})

export const {searchCount} = HeaderSlice.actions

export default HeaderSlice.reducer;