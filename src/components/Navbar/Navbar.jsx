import React from "react";
import { NavLink } from "react-router-dom";
import images from "../../constants/images";
import "./Navbar.scss";
import scrollToBottom from "./ScrollToBottom";

const Navbar = () => {
	const navLinkStyles = ({ isActive }) => {
		return {
			color: isActive ? "#6750d6" : "#777777",
		};
	};

	return (
		<nav className="navbar">
			<img src={images.logo_menu} alt="Espaço Terapêutico Lua Cheia" />
			<div>
				<NavLink style={navLinkStyles} to="/">
					Home
				</NavLink>
				<NavLink style={navLinkStyles} to="/atendimentos">
					Atendimentos
				</NavLink>
				<NavLink style={navLinkStyles} to="/medicinas-da-floresta">
					Medicinas da Floresta
				</NavLink>
				<NavLink style={navLinkStyles} to="/localizacao">
					Localização
				</NavLink>
				<NavLink to="#contato" onClick={scrollToBottom}>
					Contato
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;

//<img src={images.logo} alt="Logo Lua Cheia Espaço Terapêutico" />
