import { createReducer } from "@reduxjs/toolkit";
import { MenuBarActiveType } from "../types";
import { activeMenuBar } from "./action";

const initialState : MenuBarActiveType = {
    active:false
}

export const menuBarActiveReducer = createReducer(initialState,(builder)=>{
    builder.addCase(activeMenuBar, (state,action)=>{
        var payload:MenuBarActiveType = action.payload
        state.active = payload.active
    })
})