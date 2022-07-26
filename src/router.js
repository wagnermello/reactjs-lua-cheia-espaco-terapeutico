import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AtendimentosPage from "./pages/AtendimentosPage/AtendimentosPage";
import LocalizacaoPage from "./pages/LocalizacaoPage/LocalizacaoPage";
import MedicinasFlorestaPage from "./pages/MedicinasFlorestaPage/MedicinasFlorestaPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Copyright from "./components/Copyright/Copyright";
import ScrollToTop from "./components/Navbar/ScrollToTop";

function RoutesApp() {
	return (
		<BrowserRouter>
			<ScrollToTop />

			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/atendimentos" element={<AtendimentosPage />} />
				<Route path="/localizacao" element={<LocalizacaoPage />} />
				<Route
					path="/medicinas-da-floresta"
					element={<MedicinasFlorestaPage />}
				/>
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
			<Footer />
			<Copyright />
		</BrowserRouter>
	);
}

export default RoutesApp;
