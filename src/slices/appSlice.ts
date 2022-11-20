import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
	darkMode: boolean;
	loading: boolean;
}

const initialState: AppState = {
	darkMode: false,
	loading: true,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		hydrateApp(state, action: PayloadAction<AppState>) {
			return { ...state, ...action.payload };
		},
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
			localStorage.setItem("darkMode", state.darkMode.toString());
		},
		startLoading(state) {
			state.loading = true;
		},
		endLoading(state) {
			state.loading = false;
		},
	},
});

export const { hydrateApp, toggleDarkMode, endLoading, startLoading } =
	appSlice.actions;

export default appSlice.reducer;
