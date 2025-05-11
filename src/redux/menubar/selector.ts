import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const activeMenuBar = (state:RootState) => state 
export const activeMenuBarSelector = createSelector(
    activeMenuBar, (state:RootState) =>{
        return state;
    }
)