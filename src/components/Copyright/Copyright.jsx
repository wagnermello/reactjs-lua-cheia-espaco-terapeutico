import React from "react";
import { Link } from "react-router-dom";

import "./Copyright.scss";

function Copyright() {
	return (
		<div className="copyright__container">
			<p>Copyright 2022 - Instituto Espiritual Xamânico Lua Cheia</p>
			<Link to="/politica-de-privacidade" className="copyright__link">
				Política de Privacidade
			</Link>
		</div>
	);
}

export default Copyright;
