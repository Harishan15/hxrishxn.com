import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { AppThemeProvider } from "../src/providers/appThemeProvider";
import { store } from "../src/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AppThemeProvider>
				<Component {...pageProps} />
			</AppThemeProvider>
		</Provider>
	);
}
