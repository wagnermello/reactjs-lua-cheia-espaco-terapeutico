import React from "react";
import { motion } from "framer-motion";

import "./Localizacao.scss";

function Localizacao() {
	return (
		<section className="localizacao app__wrapper">
			<motion.div className="localizacao__container container__wrapper gap__x">
				<div className="localizacao__text-container gap__y flex__column__center">
					<h1 className="title">Como chegar até aqui?</h1>
					<p className="p-text">
						Rua Pernambuco, nº 1213
						<br />
						<br /> Bairro São José <br />
						<br />
						95590-000 Tramandaí, RS
					</p>
					<button className="button-purple">ABRIR NO MAPS</button>
				</div>
				<div className="localizacao__google-maps-container flex__column__center">
					<iframe
						title="Lua Cheia Espaço Terapêutico"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.3426522152836!2d-50.149930485247914!3d-29.998316036092316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95180d11a525a1bd%3A0x5005ce10025c4b24!2sLua%20Cheia%20Espa%C3%A7o%20Terap%C3%AAutico!5e0!3m2!1spt-BR!2sbr!4v1658613039625!5m2!1spt-BR!2sbr"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</motion.div>
		</section>
	);
}

export default Localizacao;
