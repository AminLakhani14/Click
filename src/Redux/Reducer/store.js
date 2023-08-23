import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import languageSlice from "./languageSlice";

export const store = configureStore({
    reducer: {
        language:languageSlice,
    },
});
