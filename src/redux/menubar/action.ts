import { createAction } from "@reduxjs/toolkit";
import { MenuBarActiveType } from "../types";

export const activeMenuBar = createAction<MenuBarActiveType,"activeMenuBar">("activeMenuBar")
