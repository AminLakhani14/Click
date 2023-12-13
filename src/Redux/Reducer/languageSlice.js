import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    language:'en',
    isLoading: true,
    isNewsletterModalOpen:true
}
const languageSlice = createSlice({
    name:'language',     
    initialState,
    reducers : {
        setLanguage : (state,action) =>{
         state.language = action.payload
        },
        News_Letter_Modal:(state,action)=>{
            state.isNewsletterModalOpen=action.payload
        }
    }
})

export const {setLanguage,News_Letter_Modal} = languageSlice.actions

export default languageSlice.reducer;
console.log("new data",languageSlice);