import React from "react";
import { Link, NavLink } from "react-router-dom";
import images from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className="navbar">
			<img src={images.logo} alt="Espaço Terapêutico Lua Cheia" />
			<div>
				<NavLink to="/" activeClassName="active-link">
					Home
				</NavLink>
				<NavLink to="/atendimentos" activeClassName="active-link">
					Atendimentos
				</NavLink>
				<NavLink to="/medicinas-da-floresta" activeClassName="active-link">
					Medicinas da Floresta
				</NavLink>
				<NavLink to="/localizacao" activeClassName="active-link">
					Localização
				</NavLink>
				<NavLink to="#footer" activeClassName="active-link">
					Contato
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;

//<img src={images.logo} alt="Logo Lua Cheia Espaço Terapêutico" />
