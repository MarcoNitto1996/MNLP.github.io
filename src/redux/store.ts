import { configureStore } from "@reduxjs/toolkit";
import { menuBarActiveReducer } from "./menubar/reducer";

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
    reducer:{
        menuBarActiveReducer:menuBarActiveReducer
    }
});

