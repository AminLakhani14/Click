import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import HeaderSlice from "./HeaderSlice";

export const store = configureStore({
    reducer: {
        language:languageSlice,
        header:HeaderSlice,
    },
});
