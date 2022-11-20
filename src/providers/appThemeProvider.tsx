import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "../hooks";
import { hydrateApp } from "../slices/appSlice";
import themeOptions from "../libs/themeOptions";

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const router = useRouter();
	const darkMode = useAppSelector((state) => state.app.darkMode);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			hydrateApp({
				darkMode: localStorage.getItem("darkMode") === "true",
				loading: false,
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ThemeProvider
			theme={createTheme({
				...themeOptions(darkMode ? "dark" : "light"),
			})}
		>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
