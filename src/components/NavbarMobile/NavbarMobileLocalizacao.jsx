import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import scrollToBottom from "../Navbar/ScrollToBottom";

import "./NavbarMobile.scss";

function NavbarMobileLocalizacao() {
	return (
		<div className="navbar__mobile flex__column__center">
			<div>
				<Link to="/">
					<img src={images.mobile_navbar_home_inactive} alt="home" />
				</Link>
				<Link to="/atendimentos">
					<img
						src={images.mobile_navbar_atendimentos_inactive}
						alt="atendimentos"
					/>
				</Link>
				<Link to="/medicinas-da-floresta">
					<img
						src={images.mobile_navbar_medicinas_inactive}
						alt="medicinas-da-floresta"
					/>
				</Link>
				<Link to="/localizacao">
					{" "}
					<img
						src={images.mobile_navbar_localizacao_active}
						alt="localizacao"
					/>
				</Link>
				<Link to="#contato" onClick={scrollToBottom}>
					<img src={images.mobile_navbar_contato_inactive} alt="contato" />
				</Link>
			</div>
		</div>
	);
}

export default NavbarMobileLocalizacao;
