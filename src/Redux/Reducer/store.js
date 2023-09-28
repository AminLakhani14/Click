import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import languageSlice from "./languageSlice";
import HeaderSlice from "./HeaderSlice";

export const store = configureStore({
    reducer: {
        language:languageSlice,
        header:HeaderSlice,
    },
});
