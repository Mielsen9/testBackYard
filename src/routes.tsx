import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@/components/pages/Home";

// Створення маршрутів за допомогою createBrowserRouter
export const router = createBrowserRouter([
		{
			path: "/",
			element: <App/> ,
			children: [
				{ path: "/", element: <Home/> },
			],
		},
	],
	// {
	// 	basename: "/zvir-petro-v-portfolio", // Шлях до репозиторію на GitHub
	// }
);